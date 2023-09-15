import { apiSlice } from "./apiSlice.js";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/all-users",
      // query: () => {
      //   return { url: "/all-users", credentials: "include" };
      // },
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetUsersQuery } = usersApiSlice;
