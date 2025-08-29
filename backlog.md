# 🛠 BACKLOG DỰ ÁN ECOMMERCE (Pano cửa sắt, Mâm cầu thang, Bản lề...)

## Phase 0 – Nền tảng & Cấu trúc (P0)

### Backend ✅

- [x] Cấu trúc monorepo (`apps/{web,dashboard,api}`, `packages/{ui,types,sdk,config,utils}`)
- [x] Module cấu hình chung (`packages/config`)
- [x] Xác thực cơ bản (JWT, refresh token, RBAC: admin, nhân viên, khách hàng)
- [x] Logger, xử lý lỗi, interceptor response, validation pipes
- [x] **Dịch vụ upload (S3/Cloudinary) + signed URL** 🔥
- [x] **Seed dữ liệu mẫu: user admin, danh mục, thuộc tính, sản phẩm** 🔥

### Frontend ✅

- [x] Cấu trúc monorepo với Turborepo
- [x] Shared packages (ui, utils, config)
- [x] Basic routing và layout

---

## Phase 0.5 – Quản lý User & Xác thực (P0)

### Backend 🔥 **ƯU TIÊN CAO**

#### Authentication & Authorization

- [x] **Refresh token mechanism** 🔥
- [x] **Logout endpoint với blacklist token (clear refresh hash)** 🔥
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
- [x] **Bulk user operations** 🔥

#### Database & Models

- [x] **User schema extensions (refreshTokenHash, tokenVersion)** 🔥
- [ ] **Address schema** 🔥
- [ ] **Audit log schema** 🔥
- [ ] **Session schema** 🔥

---

## Phase 1 – Quản lý sản phẩm **config-driven** (P0)

### Backend 🔥 **ƯU TIÊN CAO**

#### Database & Models

- [x] **Category schema với tree structure (parentId, sortOrder)** 🔥
- [x] **Attribute schema với dynamic types** 🔥
- [x] **Product schema với dynamic attributes** 🔥
- [ ] **Media/Image schema** 🔥
- [ ] **Inventory schema** 🔥

#### API Endpoints

- [x] **Category CRUD** 🔥
- [x] **Attribute CRUD với category binding** 🔥
- [x] **Product CRUD (dynamic)** 🔥
- [x] **Media upload với Cloudinary** 🔥
- [ ] **Inventory management** 🔥
- [ ] **Search API với filters** 🔥

#### Business Logic

- [ ] **Dynamic form generation từ attributes** 🔥
- [ ] **Product validation logic theo Attribute.type** 🔥
- [ ] **Inventory tracking** 🔥
- [x] **Slug generation (thủ công qua DTO hiện tại)** 🔥

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

---

## Phase 4 – CMS, Liên hệ & Báo giá (P0)

(giữ nguyên mục mở rộng packages và schema mẫu CMS)

---

## 🎯 **BACKEND TASKS ƯU TIÊN CAO** (Thực hiện ngay)

### 1. Upload Service (P0) 🔥

- [x] **Cloudinary integration** 🔥
- [x] **Signed URL generation** 🔥
- [x] **Image optimization** 🔥
- [x] **File validation** 🔥

### 2. Seed Data (P0) 🔥

- [x] **Admin user creation** 🔥
- [x] **Sample categories** 🔥
- [x] **Sample attributes** 🔥
- [x] **Sample products** 🔥

### 3. User Management Extensions (P0) 🔥

- [x] **Refresh token implementation** 🔥
- [ ] **Password reset flow** 🔥
- [ ] **Email verification** 🔥
- [ ] **Address management** 🔥

### 4. Product Management Foundation (P0) 🔥

- [x] **Category CRUD** 🔥
- [x] **Attribute CRUD** 🔥
- [x] **Product CRUD với dynamic attributes** 🔥
- [x] **Media upload integration** 🔥

### 5. Order Management Foundation (P0) 🔥

- [ ] **Cart CRUD** 🔥
- [ ] **Order creation** 🔥
- [ ] **Order status workflow** 🔥
- [ ] **Inventory tracking** 🔥

---

## 📊 **PROGRESS TRACKING**

### Backend Progress

- **Phase 0**: 95% ✅
- **Phase 0.5**: 40% 🔥
- **Phase 1**: 40% 🔥
- **Phase 2**: 0% 🔥

### Frontend Progress

- **Phase 0**: 60% ✅
- **Phase 0.5**: 0% 🔥
- **Phase 1**: 0% 🔥
- **Phase 2**: 0% 🔥

---

## 🚀 **NEXT ACTIONS**

### Backend (Ưu tiên cao)

1. **Product validation theo Attribute.type**
2. **Category tree endpoints (children, reorder)**
3. **Inventory schema & APIs**
4. **Password reset + Email verification**
5. **Search/filter API**

### Frontend (Sau backend)

1. **User Management UI** - Dashboard user management
2. **Product Management UI** - Category, attribute, product forms
3. **Order Management UI** - Order dashboard
4. **Web Interface** - Product listing, cart, checkout
```