import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/";

// Define a service using a base URL and expected endpoints
export const backendApi = createApi({
  reducerPath: "backendApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  endpoints: (builder) => ({}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {} = backendApi;
