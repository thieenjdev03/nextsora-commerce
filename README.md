# NextSora

NextSora là một ứng dụng web hiện đại được xây dựng trên kiến trúc monorepo với Turborepo, bao gồm backend API (NestJS), frontend website (Next.js), và internal dashboard (Vite + React).

## 🏗️ Kiến trúc dự án

```
nextsora-project/
│── apps/
│   ├── api/          # Backend service (NestJS)
│   ├── web/          # Frontend website (Next.js)
│   └── dashboard/    # Internal dashboard (Vite + ShadCN)
│
│── packages/
│   ├── ui/                    # Shared UI components (React)
│   ├── utils/                 # Shared utilities (TypeScript)
│   └── config/                # Shared configs (eslint, tailwind, tsconfig)
│
│── turbo.json                 # Turborepo pipeline config
│── package.json               # Root package with workspaces
│── pnpm-workspace.yaml        # pnpm workspace
└── README.md
```

## 🚀 Công nghệ sử dụng

### Backend (api)
- **NestJS** - Progressive Node.js framework
- **Mongoose** - MongoDB object modeling cho Node.js
- **MongoDB Atlas** - Cloud database service
- **JWT** - Authentication
- **Swagger** - API documentation
- **bcryptjs** - Password hashing

### Frontend Web (web)
- **Next.js 14** - React framework với App Router
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS** - Utility-first CSS framework
- **React Hook Form** - Form handling
- **React Hot Toast** - Toast notifications

### Dashboard (dashboard)
- **Vite** - Build tool
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **TanStack Router** - Type-safe routing
- **TailwindCSS** - Styling
- **ShadCN UI** - UI component library

### Shared Packages
- **@nextsora/ui** - Shared React components
- **@nextsora/utils** - Shared utilities (axios, date, validation, etc.)
- **@nextsora/config** - Shared configurations (ESLint, Tailwind, TypeScript)

### DevOps & Tools
- **Turborepo** - Monorepo build system
- **pnpm** - Package manager
- **ESLint** - Code linting
- **TypeScript** - Type checking

## 📋 Yêu cầu hệ thống

- **Node.js** 18+ 
- **pnpm** 8+
- **MongoDB Atlas** account (đã được cấu hình)

## 🛠️ Cài đặt và chạy

### 1. Clone repository

```bash
git clone <repository-url>
cd nextsora-project
```

### 2. Cài đặt dependencies

```bash
pnpm install
```

### 3. Setup cơ sở dữ liệu

MongoDB Atlas đã được cấu hình sẵn. Tạo file `.env` trong `apps/api/`:

```env
# MongoDB Configuration - Đã được cấu hình sẵn MongoDB Atlas
MONGODB_URI=mongodb+srv://nguyenvthiendev:Thien2003@cluster0.2rs3wsn.mongodb.net/nextsora?retryWrites=true&w=majority

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key

# Application Configuration
NODE_ENV=development
PORT=3001

# Frontend URL for CORS
FRONTEND_URL=http://localhost:3000
```

### 4. Chạy ứng dụng

#### Chạy tất cả apps đồng thời:
```bash
pnpm dev
```

#### Chạy từng app riêng biệt:
```bash
# Backend API (cổng 3001)
pnpm dev:api

# Frontend Web (cổng 3000)  
pnpm dev:web

# Dashboard (cổng 3002)
pnpm dev:dashboard
```

## 📚 URLs ứng dụng

- **API Backend**: http://localhost:3001
- **Swagger Docs**: http://localhost:3001/api/docs
- **Frontend Web**: http://localhost:3000
- **Dashboard**: http://localhost:3002

## 🔧 Scripts có sẵn

```bash
# Development
pnpm dev                # Chạy tất cả apps
pnpm dev:api           # Chỉ chạy API
pnpm dev:web           # Chỉ chạy Web
pnpm dev:dashboard     # Chỉ chạy Dashboard

# Build
pnpm build             # Build tất cả apps
pnpm build:api         # Build API
pnpm build:web         # Build Web
pnpm build:dashboard   # Build Dashboard

# Lint & Type checking
pnpm lint              # Lint tất cả code
pnpm type-check        # Type check tất cả TypeScript

# Utilities
pnpm clean             # Xóa node_modules
```

## 🏠 API Endpoints

### Authentication
- `POST /api/auth/login` - Đăng nhập
- `POST /api/auth/register` - Đăng ký
- `GET /api/auth/profile` - Lấy thông tin profile

### Users
- `GET /api/users` - Lấy danh sách users
- `GET /api/users/:id` - Lấy thông tin user
- `POST /api/users` - Tạo user mới
- `PATCH /api/users/:id` - Cập nhật user
- `DELETE /api/users/:id` - Xóa user

### Health Check
- `GET /api` - Health check
- `GET /api/health` - Detailed health status

## 🔐 Authentication

Ứng dụng sử dụng JWT (JSON Web Tokens) cho authentication:

1. User đăng nhập qua `/api/auth/login`
2. Server trả về JWT token
3. Client lưu token và gửi kèm trong header: `Authorization: Bearer <token>`
4. Server verify token cho các protected routes

## 🎨 UI Components

### Shared Components (@nextsora/ui)
- `Button` - Button component với variants
- `Input` - Input field component  
- `Card` - Card layout component
- `Modal` - Modal dialog component

### Shared Utils (@nextsora/utils)
- `apiClient` - Configured axios instance
- `cn` - TailwindCSS class merger
- `formatDate` - Date formatting utilities
- `validation` - Form validation helpers

## 🧪 Testing

```bash
# Run tests cho API
cd apps/api
pnpm test

# Run tests với coverage
pnpm test:cov

# E2E tests
pnpm test:e2e
```

## 🐳 Docker Deployment

### Build API Docker image:
```bash
cd apps/api
docker build -t api .
docker run -p 3001:3001 api
```

## 🤝 Đóng góp

1. Fork repository
2. Tạo feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Tạo Pull Request

## 📝 License

MIT License - xem [LICENSE](LICENSE) file để biết thêm chi tiết.

## 🔗 Links hữu ích

- [NestJS Documentation](https://nestjs.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Turborepo Documentation](https://turbo.build/repo)
- [TailwindCSS Documentation](https://tailwindcss.com/)
- [pnpm Documentation](https://pnpm.io/)

## 📞 Hỗ trợ

Nếu bạn gặp vấn đề hoặc có câu hỏi, vui lòng tạo issue trên GitHub repository.

---

**NextSora** - Được xây dựng với ❤️ bằng TypeScript và React ecosystem.