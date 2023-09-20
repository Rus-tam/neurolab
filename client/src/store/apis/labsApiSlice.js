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
  }),
});

export const { useSimpleIsoMutation } = labsApiSlice;
