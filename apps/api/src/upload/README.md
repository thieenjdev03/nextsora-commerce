# 📤 Upload Service

Upload service với Cloudinary integration cho NextSora API.

## 🎯 Features

### ✅ Đã hoàn thành
- **Cloudinary integration** với automatic optimization
- **File validation** (size, type, format)
- **Signed URL generation** cho direct upload
- **Image optimization** với transformations
- **File deletion** từ Cloudinary
- **JWT authentication** required
- **Comprehensive logging** với CustomLogger

### 📁 Supported File Types
- **Images**: JPG, JPEG, PNG, GIF, WebP
- **Documents**: PDF, DOC, DOCX
- **Max size**: 10MB per file

## 🔧 Configuration

### Environment Variables
```env
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

### Cloudinary Setup
1. Tạo tài khoản tại [Cloudinary](https://cloudinary.com/)
2. Lấy credentials từ Dashboard
3. Thêm vào `.env` file

## 📡 API Endpoints

### 1. Upload File
```http
POST /api/upload/file
Content-Type: multipart/form-data
Authorization: Bearer <jwt-token>

Body:
- file: <file>
- folder: <optional-folder-name>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "public_id": "nextsora/abc123",
    "url": "http://res.cloudinary.com/...",
    "secure_url": "https://res.cloudinary.com/...",
    "width": 800,
    "height": 600,
    "format": "jpg",
    "resource_type": "image",
    "bytes": 12345
  }
}
```

### 2. Generate Signed URL
```http
POST /api/upload/signed-url
Authorization: Bearer <jwt-token>

Body:
{
  "folder": "products"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "url": "https://api.cloudinary.com/v1_1/...",
    "public_id": "nextsora_1234567890",
    "signature": "abc123...",
    "timestamp": 1234567890
  }
}
```

### 3. Delete File
```http
DELETE /api/upload/file/:publicId
Authorization: Bearer <jwt-token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "message": "File deleted successfully"
  }
}
```

### 4. Get File Info
```http
GET /api/upload/file/:publicId/info
Authorization: Bearer <jwt-token>
```

### 5. Optimize Image URL
```http
POST /api/upload/optimize-url
Authorization: Bearer <jwt-token>

Body:
{
  "url": "https://res.cloudinary.com/...",
  "width": 800,
  "height": 600,
  "quality": "auto:good",
  "format": "auto"
}
```

## 🚀 Usage Examples

### Frontend Upload
```javascript
// 1. Get signed URL
const signedUrlResponse = await fetch('/api/upload/signed-url', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ folder: 'products' }),
});

const { url, public_id, signature, timestamp } = signedUrlResponse.data;

// 2. Upload directly to Cloudinary
const formData = new FormData();
formData.append('file', file);
formData.append('public_id', public_id);
formData.append('signature', signature);
formData.append('timestamp', timestamp);

await fetch(url, {
  method: 'POST',
  body: formData,
});
```

### Backend Upload
```javascript
// Upload through API
const formData = new FormData();
formData.append('file', file);
formData.append('folder', 'products');

const response = await fetch('/api/upload/file', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`,
  },
  body: formData,
});
```

## 🔍 Testing

### Test Script
```bash
# Test upload service
pnpm test:upload

# Manual testing
curl -X POST http://localhost:3080/api/upload/signed-url \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"folder": "test"}'
```

### Test with Authentication
1. Login để lấy JWT token
2. Sử dụng token trong Authorization header
3. Test file upload với multipart/form-data

## 📊 File Organization

```
nextsora/
├── products/          # Product images
├── categories/        # Category images
├── users/            # User avatars
├── documents/        # PDF files
└── temp/             # Temporary files
```

## 🛡️ Security

- **JWT Authentication** required cho tất cả endpoints
- **File validation** (size, type, format)
- **Virus scanning** (Cloudinary built-in)
- **Secure URLs** với HTTPS
- **Access control** theo user permissions

## 📈 Performance

- **Automatic optimization** với Cloudinary
- **CDN delivery** globally
- **Image transformations** on-the-fly
- **Lazy loading** support
- **Responsive images** với width/height

## 🔧 Error Handling

```json
{
  "success": false,
  "statusCode": 400,
  "message": "File size exceeds limit of 10MB",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "path": "/api/upload/file"
}
```

## 📝 Logging

Tất cả upload operations được log với:
- File name và size
- Upload success/failure
- Error details với stack trace
- User context (nếu authenticated)

## 🚀 Next Steps

1. **Image processing** - Thêm filters, effects
2. **Batch upload** - Upload nhiều files cùng lúc
3. **Progress tracking** - Upload progress cho large files
4. **Video support** - Upload và process videos
5. **Backup strategy** - Backup files to secondary storage 