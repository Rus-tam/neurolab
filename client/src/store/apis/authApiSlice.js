import { apiSlice } from "./apiSlice.js";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credential) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...credential },
      }),
    }),
    register: builder.mutation({
      query: (registrationInfo) => ({
        url: "/auth/register",
        method: "POST",
        body: { ...registrationInfo },
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApiSlice;
