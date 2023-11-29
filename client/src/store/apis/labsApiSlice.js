import { apiSlice } from "./apiSlice.js";

export const labsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    simpleIso: builder.mutation({
      query: (dataToAI) => ({
        url: "/labs/simple-isomerization",
        method: "POST",
        body: { ...dataToAI },
      }),
    }),
    amineTreatment: builder.mutation({
      query: (dataToAI) => ({
        url: "/labs/amine-treatment",
        method: "POST",
        body: { ...dataToAI },
      }),
    }),
  }),
});

export const { useSimpleIsoMutation, useAmineTreatmentMutation } = labsApiSlice;
