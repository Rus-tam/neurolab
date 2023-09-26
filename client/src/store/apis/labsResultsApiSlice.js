import { apiSlice } from "./apiSlice.js";

export const labsResultsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchSimpleIsoRes: builder.query({
      query: () => "/labs/simple-isomerization",
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useFetchSimpleIsoResQuery } = labsResultsApiSlice;
