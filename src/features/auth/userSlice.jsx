import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { userLogin, getUser, checkAuth, userSignup } from "features/thunks/FetchUsers";
import { userLogin,  getUser, checkAuth, userSignup  } from "../thunks/FetchUsers";
// initialize userToken from local storage
const userToken = localStorage.getItem("userToken", "role")
  ? localStorage.getItem("userToken", "role")
  : null;

const initialState = {
  loading: true,
  user: null,
  userToken: localStorage.getItem("userToken"),
  success: false,
  isAuthenticated: false,
  error: null,
  loginStatus: "",
  loginError: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state, action) {
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("userToken");
      localStorage.removeItem("user");
      return {
        ...state,
        userToken: "",
        user: "",
        loading: false,
      };
    },
  },
  extraReducers: (builder) => {
    // login user
    builder
      .addCase(userLogin.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userToken = payload.userToken;
        state.isAuthenticated = true;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      //   get user
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        // state.user = action.payload;
      })
      .addCase(getUser.rejected, (state) => {
        state.loading = false;
      })
      //   check authenticated or not authenticated
      .addCase(checkAuth.pending, (state) => {
        state.checkAuthLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state) => {
        state.checkAuthLoading = false;
        state.isAuthenticated = true;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.checkAuthLoading = false;
        state.loading = false;
        state = action.payload;
      });
  },
});
// export default userSlice.reducer;

export const { logout } = userSlice.actions;

// export default userSlice.reducer;
export default userSlice.reducer;
