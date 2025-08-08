import {
  Controller,
  Post,
  Get,
  Delete,
  Param,
  UseInterceptors,
  UploadedFile,
  Body,
  UseGuards,
  BadRequestException,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import {
  ApiTags,
  ApiOperation,
  ApiConsumes,
  ApiBody,
  ApiBearerAuth,
} from "@nestjs/swagger";
import { UploadService, UploadResult, SignedUrlResult } from "./upload.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { CustomLogger } from "../common";
import { UploadFileDto } from "./dto/upload-file.dto";
import { OptimizeUrlDto } from "./dto/optimize-url.dto";

@ApiTags("Upload")
@Controller("upload")
export class UploadController {
  constructor(
    private readonly uploadService: UploadService,
    private readonly logger: CustomLogger
  ) {}

  @Post("file")
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @UseInterceptors(FileInterceptor("file"))
  @ApiConsumes("multipart/form-data")
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        file: {
          type: "string",
          format: "binary",
        },
        folder: {
          type: "string",
          description: "Folder name (optional)",
        },
      },
    },
  })
  @ApiOperation({ summary: "Upload file to Cloudinary" })
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() uploadFileDto: UploadFileDto
  ): Promise<UploadResult> {
    this.logger.log(
      `File upload request: ${file?.originalname}`,
      "UploadController"
    );

    if (!file) {
      throw new BadRequestException("No file provided");
    }

    return this.uploadService.uploadFile(file, uploadFileDto.folder);
  }

  @Post("signed-url")
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: "Generate signed URL for direct upload" })
  async generateSignedUrl(
    @Body() uploadFileDto: UploadFileDto
  ): Promise<SignedUrlResult> {
    this.logger.log("Signed URL generation request", "UploadController");
    return this.uploadService.generateSignedUrl(uploadFileDto.folder);
  }

  @Delete("file/:publicId")
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: "Delete file from Cloudinary" })
  async deleteFile(
    @Param("publicId") publicId: string
  ): Promise<{ message: string }> {
    this.logger.log(`File deletion request: ${publicId}`, "UploadController");

    await this.uploadService.deleteFile(publicId);
    return { message: "File deleted successfully" };
  }

  @Get("file/:publicId/info")
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get file information from Cloudinary" })
  async getFileInfo(@Param("publicId") publicId: string): Promise<any> {
    this.logger.log(`File info request: ${publicId}`, "UploadController");
    return this.uploadService.getFileInfo(publicId);
  }

  @Post("optimize-url")
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: "Optimize image URL with transformations" })
  async optimizeImageUrl(
    @Body() optimizeUrlDto: OptimizeUrlDto
  ): Promise<{ optimizedUrl: string }> {
    this.logger.log("Image URL optimization request", "UploadController");

    const optimizedUrl = this.uploadService.optimizeImageUrl(
      optimizeUrlDto.url,
      {
        width: optimizeUrlDto.width,
        height: optimizeUrlDto.height,
        quality: optimizeUrlDto.quality,
        format: optimizeUrlDto.format,
      }
    );

    return { optimizedUrl };
  }
}
