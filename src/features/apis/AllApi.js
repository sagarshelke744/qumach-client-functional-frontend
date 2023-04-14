import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "../../components/common/api";

const allApi = createApi({
  reducerPath: "allapis",
  baseQuery: fetchBaseQuery({ baseUrl: `${url}` }),
  tagTypes: ["Client", "Industry", "Service"],
  endpoints(build) {
    return {
      fetchClients: build.query({
        query: () => {
          return {
            url: "/clients",
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          };
        },
        providesTags: (result = [], error, arg) =>
          result?.length
            ? [...result.map(({ _id }) => ({ type: "Client", _id })), "Client"]
            : ["Client"],
      }),

      createClient: build.mutation({
        query: (createClientData) => {
          const { ...data } = createClientData;
          return {
            url: `/clients`,
            method: "POST",
            body: data,
            headers: {
              Accept: "application/json",
            //   Authorization: `Bearer ${localStorage.getItem("userToken")}`,
              // ...formdata.getHeaders(),
            },
          };
        },
        invalidatesTags: (result, error, arg) => [
          { type: "Client", id: arg.id },
        ],
      }),



      fetchProductCategory: build.query({
        query: (searchData) => {
          return {
            url: "/product-category",
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            params: {
              ...searchData
            }
          };
        },
        providesTags: (result = [], error, arg) =>
          result?.length
            ? [...result.map(({ id }) => ({ type: "productCategory", id })), "productCategory"]
            : ["productCategory"],
      }),

      createProduct: build.mutation({
        query: (createData) => {
          const { ...data } = createData;
          return {
            url: `/products`,
            method: "POST",
            body: data,
            headers: {
              Accept: "application/json",
            //   Authorization: `Bearer ${localStorage.getItem("userToken")}`,
              // ...formdata.getHeaders(),
            },
          };
        },
        invalidatesTags: (result, error, arg) => [
          { type: "Product", id: arg._id },
        ],
      }),

      fetchProductDetails: build.query({
        query: (searchData) => {
          return {
            url: '/products',
            method:'GET',
            headers: {
              Accept: "application/json",

            },
            params: searchData
          }
        }
      }),

      fetchQuotationDetails: build.query({
        query: (searchData) => {
          return {
            url: '/quatations',
            method:'GET',
            headers: {
              Accept: "application/json",

            },
            params: searchData
          }
        }
      }),
      createQuotations: build.mutation({
        query: (createData) => {
          const { ...data } = createData;
          return {
            url: `/quatations`,
            method: "POST",
            body: data,
            headers: {
              Accept: "application/json",
            //   Authorization: `Bearer ${localStorage.getItem("userToken")}`,
              // ...formdata.getHeaders(),
            },
          };
        },
        invalidatesTags: (result, error, arg) => [
          { type: "Quotation", id: arg._id },
        ],
      }),

      createProductCategory: build.mutation({
        query: (createData) => {
          const { ...data } = createData;
          return {
            url: `/product-category`,
            method: "POST",
            body: data,
            headers: {
              Accept: "application/json",
            //   Authorization: `Bearer ${localStorage.getItem("userToken")}`,
              // ...formdata.getHeaders(),
            },
          };
        },
        invalidatesTags: (result, error, arg) => [
          { type: "Category", id: arg._id },
        ],
      }),
      
      createCategoryDescription: build.mutation({
        query: (createData) => {
          const { ...data } = createData;
          return {
            url: `/product-category-description`,
            method: "POST",
            body: data,
            headers: {
              Accept: "application/json",
            //   Authorization: `Bearer ${localStorage.getItem("userToken")}`,
              // ...formdata.getHeaders(),
            },
          };
        },
        invalidatesTags: (result, error, arg) => [
          { type: "CategoryDescription", id: arg._id },
        ],
      }),
      fetchCategoryDescriptions: build.query({
        query: (searchData) => {
          return {
            url: '/product-category-description/by-category',
            method:'GET',
            headers: {
              Accept: "application/json",

            },
            params:searchData
          }
        }
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
  useFetchClientsQuery,
  useCreateClientMutation,
  useGetBlogQuery,
  useGetIndustriesQuery,
  useGetIndustryQuery,
  useGetServicesQuery,
  useGetServiceQuery,
  useUpdateBlogMutation,
  useContactPostMutation,
  useFetchProductCategoryQuery,
  useCreateProductCategoryMutation,
  useCreateProductMutation,
  useFetchProductDetailsQuery,
  useCreateQuotationsMutation,
  useFetchQuotationDetailsQuery,
  useCreateCategoryDescriptionMutation,
  useFetchCategoryDescriptionsQuery
} = allApi;
export { allApi };
