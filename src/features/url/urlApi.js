import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const urlApi = createApi({
  reducerPath: "urlApi",
  tagTypes: ["Url"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://url-shortner-backend-lyart.vercel.app",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUrls: builder.query({
      query: () => "/api/url",
      providesTags: ["Url"],
    }),
    createUrl: builder.mutation({
      query: (body) => ({
        url: "/api/url",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Url"],
    }),
    deleteUrl: builder.mutation({
      query: (id) => ({
        url: `/api/url/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Url"],
    }),
  }),
});

export const {
  useGetUrlsQuery,
  useCreateUrlMutation,
  useDeleteUrlMutation,
} = urlApi;
