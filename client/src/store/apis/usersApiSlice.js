import { apiSlice } from "./apiSlice.js";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/all-users",
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetUsersQuery } = usersApiSlice;
