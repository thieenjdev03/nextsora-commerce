import { createApiClient } from "@nextsora/utils";

// Create API client for NextSora API
export const api = createApiClient(
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api"
);

export default api;
