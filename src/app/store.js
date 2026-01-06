import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../features/auth/authApi";
import { urlApi } from "../features/url/urlApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [urlApi.reducerPath]: urlApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      urlApi.middleware
    ),
});
