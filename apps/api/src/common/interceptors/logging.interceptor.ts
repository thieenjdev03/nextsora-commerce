import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CustomLogger } from '../logger/logger.service';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly logger: CustomLogger) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { method, url, body, user } = request;
    const userAgent = request.get('User-Agent') || '';
    const ip = request.ip || request.connection.remoteAddress;

    const now = Date.now();

    // Log request
    this.logger.log(
      `Incoming Request - ${method} ${url} - IP: ${ip} - User-Agent: ${userAgent}`,
      'LoggingInterceptor'
    );

    if (body && Object.keys(body).length > 0) {
      this.logger.debug(
        `Request Body: ${JSON.stringify(body)}`,
        'LoggingInterceptor'
      );
    }

    if (user) {
      this.logger.debug(
        `Request User: ${user.email} (${user.role})`,
        'LoggingInterceptor'
      );
    }

    return next.handle().pipe(
      tap({
        next: (data) => {
          const responseTime = Date.now() - now;
          this.logger.log(
            `Outgoing Response - ${method} ${url} - ${responseTime}ms`,
            'LoggingInterceptor'
          );
        },
        error: (error) => {
          const responseTime = Date.now() - now;
          this.logger.error(
            `Request Error - ${method} ${url} - ${responseTime}ms - ${error.message}`,
            error.stack,
            'LoggingInterceptor'
          );
        },
      }),
    );
  }
} 