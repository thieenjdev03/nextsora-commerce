import { Injectable, BadRequestException } from "@nestjs/common";
import { v2 as cloudinary } from "cloudinary";
import { CustomLogger } from "../common";

export interface UploadResult {
  public_id: string;
  url: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  bytes: number;
}

export interface SignedUrlResult {
  url: string;
  public_id: string;
  signature: string;
  timestamp: number;
}

@Injectable()
export class UploadService {
  private readonly logger: CustomLogger;

  constructor() {
    this.logger = new CustomLogger();

    // Configure Cloudinary
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    this.logger.log("Cloudinary configured successfully", "UploadService");
  }

  /**
   * Upload file to Cloudinary
   */
  async uploadFile(
    file: Express.Multer.File,
    folder: string = "nextsora"
  ): Promise<UploadResult> {
    try {
      this.logger.log(
        `Uploading file: ${file.originalname} to folder: ${folder}`,
        "UploadService"
      );

      // Validate file
      this.validateFile(file);

      // Upload to Cloudinary
      const result = await new Promise<UploadResult>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder,
            resource_type: "auto",
            allowed_formats: [
              "jpg",
              "jpeg",
              "png",
              "gif",
              "webp",
              "pdf",
              "doc",
              "docx",
            ],
            transformation: [
              { quality: "auto:good" },
              { fetch_format: "auto" },
            ],
          },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result as UploadResult);
            }
          }
        );

        uploadStream.end(file.buffer);
      });

      this.logger.log(
        `File uploaded successfully: ${result.public_id}`,
        "UploadService"
      );
      return result;
    } catch (error) {
      this.logger.error(
        `File upload failed: ${error.message}`,
        error.stack,
        "UploadService"
      );
      throw new BadRequestException(`Upload failed: ${error.message}`);
    }
  }

  /**
   * Generate signed URL for direct upload
   */
  async generateSignedUrl(
    folder: string = "nextsora"
  ): Promise<SignedUrlResult> {
    try {
      const timestamp = Math.round(new Date().getTime() / 1000);
      const signature = cloudinary.utils.api_sign_request(
        {
          timestamp,
          folder,
        },
        process.env.CLOUDINARY_API_SECRET
      );

      const result: SignedUrlResult = {
        url: `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/auto/upload`,
        public_id: `nextsora_${timestamp}`,
        signature,
        timestamp,
      };

      this.logger.log(
        `Signed URL generated for folder: ${folder}`,
        "UploadService"
      );
      return result;
    } catch (error) {
      this.logger.error(
        `Signed URL generation failed: ${error.message}`,
        error.stack,
        "UploadService"
      );
      throw new BadRequestException("Failed to generate signed URL");
    }
  }

  /**
   * Delete file from Cloudinary
   */
  async deleteFile(publicId: string): Promise<void> {
    try {
      this.logger.log(`Deleting file: ${publicId}`, "UploadService");

      const result = await cloudinary.uploader.destroy(publicId);

      if (result.result === "ok") {
        this.logger.log(
          `File deleted successfully: ${publicId}`,
          "UploadService"
        );
      } else {
        throw new Error(`Delete failed: ${result.result}`);
      }
    } catch (error) {
      this.logger.error(
        `File deletion failed: ${error.message}`,
        error.stack,
        "UploadService"
      );
      throw new BadRequestException(`Delete failed: ${error.message}`);
    }
  }

  /**
   * Optimize image URL
   */
  optimizeImageUrl(
    url: string,
    options: {
      width?: number;
      height?: number;
      quality?: string;
      format?: string;
    } = {}
  ): string {
    try {
      const { width, height, quality = "auto:good", format = "auto" } = options;

      let optimizedUrl = url;

      if (width || height) {
        const transformation = [];
        if (width) transformation.push(`w_${width}`);
        if (height) transformation.push(`h_${height}`);
        if (quality) transformation.push(`q_${quality}`);
        if (format) transformation.push(`f_${format}`);

        optimizedUrl = url.replace(
          "/upload/",
          `/upload/${transformation.join(",")}/`
        );
      }

      return optimizedUrl;
    } catch (error) {
      this.logger.error(
        `Image URL optimization failed: ${error.message}`,
        error.stack,
        "UploadService"
      );
      return url; // Return original URL if optimization fails
    }
  }

  /**
   * Validate uploaded file
   */
  private validateFile(file: Express.Multer.File): void {
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedMimeTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/webp",
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!file) {
      throw new BadRequestException("No file provided");
    }

    if (file.size > maxSize) {
      throw new BadRequestException(
        `File size exceeds limit of ${maxSize / 1024 / 1024}MB`
      );
    }

    if (!allowedMimeTypes.includes(file.mimetype)) {
      throw new BadRequestException(
        `File type ${file.mimetype} is not allowed`
      );
    }
  }

  /**
   * Get file info from Cloudinary
   */
  async getFileInfo(publicId: string): Promise<any> {
    try {
      const result = await cloudinary.api.resource(publicId);
      return result;
    } catch (error) {
      this.logger.error(
        `Failed to get file info: ${error.message}`,
        error.stack,
        "UploadService"
      );
      throw new BadRequestException(
        `Failed to get file info: ${error.message}`
      );
    }
  }
}
