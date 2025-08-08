# 🛠 BACKLOG DỰ ÁN ECOMMERCE (Pano cửa sắt, Mâm cầu thang, Bản lề...)

## Phase 0 – Nền tảng & Cấu trúc (P0)

### Backend ✅

- [x] Cấu trúc monorepo (`apps/{web,dashboard,api}`, `packages/{ui,types,sdk,config,utils}`)
- [x] Module cấu hình chung (`packages/config`)
- [x] Xác thực cơ bản (JWT, refresh token, RBAC: admin, nhân viên, khách hàng)
- [x] Logger, xử lý lỗi, interceptor response, validation pipes
- [x] **Dịch vụ upload (S3/Cloudinary) + signed URL** 🔥
- [ ] **Seed dữ liệu mẫu: user admin, danh mục, thuộc tính** 🔥

### Frontend ✅

- [x] Cấu trúc monorepo với Turborepo
- [x] Shared packages (ui, utils, config)
- [x] Basic routing và layout

---

## Phase 0.5 – Quản lý User & Xác thực (P0)

### Backend 🔥 **ƯU TIÊN CAO**

#### Authentication & Authorization

- [ ] **Refresh token mechanism** 🔥
- [ ] **Logout endpoint với blacklist token** 🔥
- [ ] **Session management** 🔥
- [ ] **Password reset flow** 🔥
- [ ] **Email verification** 🔥
- [ ] **2FA implementation** (P1)
- [ ] **Social login** (Google, Facebook) (P1)

#### User Management

- [ ] **User profile CRUD** 🔥
- [ ] **Address management** 🔥
- [ ] **Role-based permissions** 🔥
- [ ] **Audit logging** 🔥
- [ ] **Bulk user operations** 🔥

#### Database & Models

- [ ] **User schema extensions** 🔥
- [ ] **Address schema** 🔥
- [ ] **Audit log schema** 🔥
- [ ] **Session schema** 🔥

### Frontend

#### Dashboard

- [ ] **User management interface** 🔥
- [ ] **Role assignment UI** 🔥
- [ ] **User profile forms** 🔥
- [ ] **Audit log viewer** 🔥

#### Web

- [ ] **Login/Register forms** 🔥
- [ ] **User profile page** 🔥
- [ ] **Address management** 🔥
- [ ] **Password reset flow** 🔥

---

## Phase 1 – Quản lý sản phẩm **config-driven** (P0)

### Backend 🔥 **ƯU TIÊN CAO**

#### Database & Models

- [ ] **Category schema với tree structure** 🔥
- [ ] **Attribute schema với dynamic types** 🔥
- [ ] **Product schema với dynamic attributes** 🔥
- [ ] **Media/Image schema** 🔥
- [ ] **Inventory schema** 🔥

#### API Endpoints

- [ ] **Category CRUD với tree operations** 🔥
- [ ] **Attribute CRUD với category binding** 🔥
- [ ] **Product CRUD với dynamic form generation** 🔥
- [ ] **Media upload với Cloudinary** 🔥
- [ ] **Inventory management** 🔥
- [ ] **Search API với filters** 🔥

#### Business Logic

- [ ] **Dynamic form generation từ attributes** 🔥
- [ ] **Product validation logic** 🔥
- [ ] **Inventory tracking** 🔥
- [ ] **Slug generation** 🔥

### Frontend

#### Dashboard

- [ ] **Category tree management** 🔥
- [ ] **Attribute builder interface** 🔥
- [ ] **Dynamic product form** 🔥
- [ ] **Media upload interface** 🔥
- [ ] **Inventory management** 🔥

#### Web

- [ ] **Product listing với filters** 🔥
- [ ] **Product detail page** 🔥
- [ ] **Category pages** 🔥
- [ ] **Search functionality** 🔥

---

## Phase 2 – Giỏ hàng / Thanh toán / Đơn hàng (P0)

### Backend 🔥 **ƯU TIÊN CAO**

#### Database & Models

- [ ] **Cart schema** 🔥
- [ ] **Order schema với status flow** 🔥
- [ ] **Order item schema** 🔥
- [ ] **Shipping method schema** 🔥
- [ ] **Payment schema** 🔥

#### API Endpoints

- [ ] **Cart CRUD operations** 🔥
- [ ] **Order creation từ cart** 🔥
- [ ] **Order status management** 🔥
- [ ] **Shipping methods API** 🔥
- [ ] **Payment processing** 🔥

#### Business Logic

- [ ] **Cart merge logic (guest → user)** 🔥
- [ ] **Order status workflow** 🔥
- [ ] **Inventory validation** 🔥
- [ ] **Price calculation** 🔥

### Frontend

#### Dashboard

- [ ] **Order management interface** 🔥
- [ ] **Order status updates** 🔥
- [ ] **Order details view** 🔥

#### Web

- [ ] **Shopping cart interface** 🔥
- [ ] **Checkout process** 🔥
- [ ] **Order confirmation** 🔥

---

## Phase 3 – Tồn kho & Giá nâng cao (P1)

### Backend

- [ ] **Inventory adjustment API** 🔥
- [ ] **Supplier management** 🔥
- [ ] **Pricing rules engine** 🔥
- [ ] **Low stock alerts** 🔥

### Frontend

- [ ] **Inventory dashboard** 🔥
- [ ] **Pricing management** 🔥

---

## Phase 4 – CMS, Liên hệ & Báo giá (P0)

### 📦 Packages

- [ ] **`packages/cms-editor`** – React wrapper cho Editor.js
  - Khởi tạo Editor.js
  - Plugin: header, list, image, embed, table...
  - Output JSON

### Backend

#### Schema & Model

- [ ] `cms_page` schema:

```ts
{
  id: string
  title: string
  slug: string
  content_json: object // from Editor.js
  tags: string[]
  seo_meta: {
    title: string
    description: string
  }
  created_at: Date
  updated_at: Date
}

### Backend 🔥 **ƯU TIÊN CAO**

#### Database & Models

- [ ] **CMS page schema** 🔥
- [ ] **Contact form schema** 🔥
- [ ] **Quote request schema** 🔥

#### API Endpoints

- [ ] **CMS pages CRUD** 🔥
- [ ] **Contact form submission** 🔥
- [ ] **Quote request API** 🔥
- [ ] **File upload for quotes** 🔥

### Frontend

#### Dashboard

- [ ] **CMS page editor** 🔥
- [ ] **Contact form management** 🔥
- [ ] **Quote request management** 🔥

#### Web

- [ ] **CMS page rendering** 🔥
- [ ] **Contact form** 🔥
- [ ] **Quote request form** 🔥

---

## Phase 5 – SEO, Tìm kiếm, Hiệu năng (P0)

### Backend

- [ ] **SEO metadata API** 🔥
- [ ] **Sitemap generation** 🔥
- [ ] **Structured data API** 🔥

### Frontend

- [ ] **SEO optimization** 🔥
- [ ] **Performance optimization** 🔥
- [ ] **Error pages (404/500)** 🔥

---

## Phase 6 – Thống kê, Logs, Thông báo (P1)

### Backend

- [ ] **Analytics API** 🔥
- [ ] **Email notification system** 🔥
- [ ] **Webhook system** 🔥

### Frontend

- [ ] **Analytics dashboard** 🔥
- [ ] **Notification center** 🔥

---

## Phase 7 – Bảo mật & Quyền (P0)

### Backend

- [ ] **Rate limiting** 🔥
- [ ] **Audit logging** 🔥
- [ ] **Permission matrix** 🔥

### Frontend

- [ ] **Permission-based UI** 🔥
- [ ] **Security features** 🔥

---

## Phase 8 – DevOps & QA (P0)

### Backend

- [ ] **CI/CD pipeline** 🔥
- [ ] **Health checks** 🔥
- [ ] **Backup system** 🔥

### Frontend

- [ ] **E2E testing** 🔥
- [ ] **Performance testing** 🔥

---

## 🎯 **BACKEND TASKS ƯU TIÊN CAO** (Thực hiện ngay)

### 1. Upload Service (P0) 🔥

- [x] **Cloudinary integration** 🔥
- [x] **Signed URL generation** 🔥
- [x] **Image optimization** 🔥
- [x] **File validation** 🔥

### 2. Seed Data (P0) 🔥

- [ ] **Admin user creation** 🔥
- [ ] **Sample categories** 🔥
- [ ] **Sample attributes** 🔥
- [ ] **Sample products** 🔥

### 3. User Management Extensions (P0) 🔥

- [ ] **Refresh token implementation** 🔥
- [ ] **Password reset flow** 🔥
- [ ] **Email verification** 🔥
- [ ] **Address management** 🔥

### 4. Product Management Foundation (P0) 🔥

- [ ] **Category CRUD với tree** 🔥
- [ ] **Attribute CRUD** 🔥
- [ ] **Product CRUD với dynamic attributes** 🔥
- [ ] **Media upload integration** 🔥

### 5. Order Management Foundation (P0) 🔥

- [ ] **Cart CRUD** 🔥
- [ ] **Order creation** 🔥
- [ ] **Order status workflow** 🔥
- [ ] **Inventory tracking** 🔥

---

## 📊 **PROGRESS TRACKING**

### Backend Progress

- **Phase 0**: 80% ✅
- **Phase 0.5**: 20% 🔥
- **Phase 1**: 0% 🔥
- **Phase 2**: 0% 🔥

### Frontend Progress

- **Phase 0**: 60% ✅
- **Phase 0.5**: 0% 🔥
- **Phase 1**: 0% 🔥
- **Phase 2**: 0% 🔥

---

## 🚀 **NEXT ACTIONS**

### Backend (Ưu tiên cao)

1. **Upload Service** - Cloudinary integration
2. **Seed Data** - Sample data creation
3. **User Extensions** - Refresh token, password reset
4. **Category Management** - Tree structure CRUD
5. **Attribute System** - Dynamic attribute management

### Frontend (Sau backend)

1. **User Management UI** - Dashboard user management
2. **Product Management UI** - Category, attribute, product forms
3. **Order Management UI** - Order dashboard
4. **Web Interface** - Product listing, cart, checkout
```
