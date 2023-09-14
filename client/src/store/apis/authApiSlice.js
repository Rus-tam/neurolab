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
  }),
});

export const { useLoginMutation } = authApiSlice;
