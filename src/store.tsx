import { configureStore } from "@reduxjs/toolkit";
import touristReducer from "../src/features/tourist/touristSlice";
import authReducer from "../src/features/Auth/authSlice"

export const store = configureStore({
  reducer: {
    tourist: touristReducer,
    auth: authReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
