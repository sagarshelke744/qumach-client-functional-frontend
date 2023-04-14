  import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../components/common/api";

const createProfile = (token) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({});

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://127.0.0.1:8000/api/createprofile", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export const userSignup = createAsyncThunk(
  "user/login",
  async ({ username, password, email }, thunkAPI) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${url}/auth/users`,
        { username, password, email },
        config
      );
      // store user's token in local storage
      const { dispatch } = thunkAPI;
      localStorage.setItem("userToken", data.access);
      localStorage.setItem("refreshToken", data.refresh);
      dispatch(getUser());
      createProfile(data.access);
      return { data, userToken: data.access };
    } catch (err) {
      // return custom error message from API if any
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "user/resetpass",
  async ({ uid, token, new_password, re_new_password }, thunkAPI) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${url}/auth/users/set_password/`,
        { uid, token, new_password, re_new_password },
        config
      );
      // store user's token in local storage
      const { dispatch } = thunkAPI;
      return { data };
    } catch (err) {
      // return custom error message from API if any
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
export const userLogin = createAsyncThunk(
  "user/login",
  async ({ username, password }, thunkAPI) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${url}/api/gettoken/`,
        { username, password },
        config
      );
      // store user's token in local storage
      const { dispatch } = thunkAPI;
      localStorage.setItem("userToken", data.access);
      localStorage.setItem("refreshToken", data.refresh);
      dispatch(getUser());
      return { data, userToken: data.access };
    } catch (err) {
      // return custom error message from API if any
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const getUser = createAsyncThunk(
  "api/account/me",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`${url}/api/current_user/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          Accept: "application/json",
        },
      });
      const data = await res.json();
      localStorage.setItem("user", JSON.stringify({ ...data }));
      if (res.status === 200) {
        return { ...data };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const checkAuth = createAsyncThunk(
  "api/account/verify",
  async (_, thunkAPI) => {
    const access = localStorage.getItem("userToken");
    if (!access) return thunkAPI.rejectWithValue("No token");

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      token: access,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    try {
      const res = await fetch(`${url}/auth/jwt/verify`, requestOptions);

      const data = await res.json();

      if (res.status === 200) {
        const { dispatch } = thunkAPI;

        dispatch(getUser());
        // localStorage.getItem("userToken", access);
        return data;
      } else {
        localStorage.removeItem("userToken");
        localStorage.removeItem("refreshToken");
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
