import { configureStore } from "@reduxjs/toolkit";
import { allApi } from "./apis/AllApi";
import userReducer from "./auth/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    [allApi.reducerPath]: allApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(allApi.middleware);
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

// export {
  
//   useFetchBlogsQuery,
//   useGetBlogQuery,
//   useGetIndustriesQuery,
//   useGetIndustryQuery,
//   useUpdateBlogMutation,
//   useGetServicesQuery,
//   useGetServiceQuery,
//   useContactPostMutation
// } from "./apis/AllApi1";

export {
  useFetchClientsQuery
} from './apis/AllApi'