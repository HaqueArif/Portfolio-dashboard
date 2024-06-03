import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://portfolio-server-2h6e.vercel.app/api/auth",
    credentials: "include",
  }),
  endpoints: () => ({}),
  tagTypes: ["projects"],
});
