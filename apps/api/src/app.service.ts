import { Injectable } from '@nestjs/common';
import { CustomLogger } from './common';

@Injectable()
export class AppService {
  constructor(private readonly logger: CustomLogger) {}

  getHello(): string {
    this.logger.log('Hello endpoint called', 'AppService');
    return 'Welcome to NextSora API! 🚀';
  }
}