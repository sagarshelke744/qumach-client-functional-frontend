import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "../../components/common/api";

const blogApi = createApi({
  reducerPath: "blogs",
  baseQuery: fetchBaseQuery({ baseUrl: `${url}` }),
  tagTypes: ["Blog", "Industry", "Service"],
  endpoints(build) {
    return {
      fetchBlogs: build.query({
        query: () => {
          return {
            url: "/posts",
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          };
        },
        providesTags: (result = [], error, arg) =>
          result?.length
            ? [...result.map(({ id }) => ({ type: "Blog", id })), "Blog"]
            : ["Blog"],
      }),
      getBlog: build.query({
        query: (slug) => {
          return {
            url: `/v1/blog/${slug}/`,
            method: "GET",
            headers: {
              Accept: "application/json",
              "content-Type": "application/json",
            },
          };
        },
        providesTags: ["Blog"],
      }),
      updateBlog: build.mutation({
        query: initialPost => ({
          url: `/v1/blog/${initialPost.slug}/`,
          method: 'PUT',
          body: {
              ...initialPost,
              // date: new Date().toISOString()
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
      }),
      invalidatesTags: (result, error, arg) => [
          { type: 'Blog', slug: arg.slug }
      ]
      }),
      contactPost: build.mutation({
        query: initialPost => ({
          url: `/v1/contact-forms/`,
          method: 'POST',
          body: {
              ...initialPost,
              // date: new Date().toISOString()
          },
          headers: {
            Accept: "application/json",
          },
      }),
      invalidatesTags: (result, error, arg) => [
          { type: 'Blog', slug: arg.slug }
      ]
      }),
      getIndustries: build.query({
        query: () => {
          return {
            url: `/v1/industry/`,
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          };
        },
        providesTags: ["Industry"],
      }),
      getIndustry: build.query({
        query: (id) => {
          return {
            url: `/v1/industry/${id}`,
            method: "GET",
          };
        },
        providesTags: ["Industry"],
      }),
      getServices: build.query({
        query: () => {
          return {
            url: `/v1/services/`,
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          };
        },
        providesTags: ["Service"],
      }),
      getService: build.query({
        query: (id) => {
          return {
            url: `/v1/services/${id}/`,
            method: "GET",
            headers: {
              Accept: "application/json",
              "content-Type": "application/json",
            },
          };
        },
        providesTags: ["Service"],
      }),
    };
  },
});

export const {
  useFetchBlogsQuery,
  useGetBlogQuery,
  useGetIndustriesQuery,
  useGetIndustryQuery,
  useGetServicesQuery,
  useGetServiceQuery,
  useUpdateBlogMutation,
  useContactPostMutation
} = blogApi;
export { blogApi };
