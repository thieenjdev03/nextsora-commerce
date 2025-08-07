// API Endpoints
// API endpoint constants for authentication and user management
const API_PREFIX = "api";
const AUTH_PREFIX = `${API_PREFIX}/auth`;
const USERS_PREFIX = `${API_PREFIX}/users`;

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${AUTH_PREFIX}/login`,
    REGISTER: `${AUTH_PREFIX}/register`,
    REFRESH: `${AUTH_PREFIX}/refresh`,
    LOGOUT: `${AUTH_PREFIX}/logout`,
    PROFILE: `${AUTH_PREFIX}/profile`,
  },
  USERS: {
    LIST: USERS_PREFIX,
    CREATE: USERS_PREFIX,
    UPDATE: (id: string) => `${USERS_PREFIX}/${id}`,
    DELETE: (id: string) => `${USERS_PREFIX}/${id}`,
    GET: (id: string) => `${USERS_PREFIX}/${id}`,
    BULK_CREATE: `${USERS_PREFIX}/bulk`,
    BULK_UPDATE: `${USERS_PREFIX}/bulk`,
    BULK_DELETE: `${USERS_PREFIX}/bulk`,
  },
} as const;

// App Routes
export const APP_ROUTES = {
  HOME: "/",
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  DASHBOARD: "/dashboard",
  PROFILE: "/profile",
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  TOKEN: "token",
  REFRESH_TOKEN: "refresh_token",
  USER: "user",
  THEME: "theme",
} as const;

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

// Common Constants
export const COMMON = {
  DEFAULT_PAGE_SIZE: 10,
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  SUPPORTED_IMAGE_TYPES: ["image/jpeg", "image/png", "image/webp"],
  PASSWORD_MIN_LENGTH: 8,
} as const;
