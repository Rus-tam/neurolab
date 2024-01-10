/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "../slices/authSlice.js";
import { toast } from "react-toastify";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  console.log("RESULT", result);

  if (result?.error?.status !== 401) {
    toast.error(result?.error?.data?.message);
  }

  if (result?.error?.status === 401) {
    console.log("Sending refresh token");
    const refreshResult = await baseQuery("/auth/refresh", api, extraOptions);
    console.log("REFRESH_RESULT", refreshResult);
    if (refreshResult?.data) {
      // store new token
      api.dispatch(setCredentials(refreshResult.data.accessToken));
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
