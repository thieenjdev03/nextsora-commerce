# Common Module - Logger & Interceptors

Module này cung cấp các utility chung cho ứng dụng NextSora API.

## 🎯 Components

### Logger Service (`CustomLogger`)

Custom logger sử dụng Winston để logging với các tính năng:

- **Console logging** cho development
- **File logging** cho production (logs/combined.log, logs/error.log)
- **Log rotation** với kích thước file tối đa 5MB
- **Structured logging** với timestamp và context
- **Error tracking** với stack trace

#### Sử dụng:

```typescript
import { CustomLogger } from "../common";

@Injectable()
export class MyService {
  constructor(private readonly logger: CustomLogger) {}

  someMethod() {
    this.logger.log("Info message", "MyService");
    this.logger.warn("Warning message", "MyService");
    this.logger.error("Error message", error.stack, "MyService");
    this.logger.debug("Debug message", "MyService");
  }
}
```

### Response Interceptor (`TransformInterceptor`)

Format response theo chuẩn API:

```json
{
  "success": true,
  "data": {
    /* actual data */
  },
  "message": "Success",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "path": "/api/users",
  "statusCode": 200
}
```

### Logging Interceptor (`LoggingInterceptor`)

Tự động log tất cả requests và responses:

- **Request logging**: method, URL, IP, User-Agent
- **Response logging**: status code, response time
- **Error logging**: error details với stack trace
- **User context**: thông tin user nếu authenticated

### Exception Filters

#### `HttpExceptionFilter`

Xử lý HTTP exceptions với format response nhất quán:

```json
{
  "success": false,
  "statusCode": 400,
  "message": "Bad Request",
  "error": {
    /* error details */
  },
  "timestamp": "2024-01-01T00:00:00.000Z",
  "path": "/api/users"
}
```

#### `AllExceptionsFilter`

Bắt tất cả exceptions không được handle, đảm bảo không có unhandled errors.

## 🔧 Configuration

### Environment Variables

```env
# Logging
LOG_LEVEL=info  # debug, info, warn, error
NODE_ENV=development

# CORS
FRONTEND_URL=http://localhost:3000
DASHBOARD_URL=http://localhost:3002
```

### Log Files

- `logs/combined.log`: Tất cả logs
- `logs/error.log`: Chỉ error logs
- Files được rotate khi đạt 5MB
- Giữ tối đa 5 files cũ

## 📊 Monitoring

### Health Check Endpoints

- `GET /api`: Basic health check
- `GET /api/health`: Detailed health status
- `GET /api/test-error`: Test error logging

### Log Analysis

```bash
# Xem error logs
tail -f logs/error.log

# Xem tất cả logs
tail -f logs/combined.log

# Tìm logs theo pattern
grep "ERROR" logs/combined.log
```

## 🚀 Best Practices

1. **Sử dụng context**: Luôn cung cấp context khi log
2. **Log levels**: Sử dụng đúng level (debug, info, warn, error)
3. **Error handling**: Luôn log errors với stack trace
4. **Performance**: Không log sensitive data
5. **Structured logging**: Sử dụng JSON format cho production

## 🔍 Debugging

### Enable Debug Logging

```env
LOG_LEVEL=debug
```

### Test Logging

```bash
# Test error logging
curl http://localhost:3080/api/test-error

# Check logs
tail -f logs/error.log
```
