import { apiSlice } from "./apiSlice.js";

export const labsResultsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchSimpleIsoRes: builder.query({
      query: () => "/labs/simple-isomerization",
      keepUnusedDataFor: 5,
    }),
    fetchAmineTreatmentRes: builder.query({
      query: () => "/labs/amine-treatment",
      keepUnusedDataFor: 5,
    }),
    fetchLowTempDistillation: builder.query({
      query: () => "/labs/low-temp-distillation",
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useFetchSimpleIsoResQuery, useFetchAmineTreatmentResQuery, useFetchLowTempDistillationQuery } =
  labsResultsApiSlice;
