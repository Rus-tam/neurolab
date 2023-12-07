import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice.js";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "./apis/apiSlice.js";
import { simpleIsoReducer } from "./slices/simpleIsoSlice.js";
import { amineTreatmentReducer } from "./slices/amineTreatmentSlice.js";
import { lowTempDistReducer } from "./slices/lowTempDistSlice.js";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    simpleIso: simpleIsoReducer,
    amineTreatment: amineTreatmentReducer,
    lowTempDist: lowTempDistReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

setupListeners(store.dispatch);
