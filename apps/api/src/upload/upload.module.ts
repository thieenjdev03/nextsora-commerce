import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { CustomLogger } from '../common';

@Module({
  providers: [UploadService, CustomLogger],
  controllers: [UploadController],
  exports: [UploadService],
})
export class UploadModule {} 