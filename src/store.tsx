import { configureStore } from "@reduxjs/toolkit";
import touristReducer from "../src/features/tourist/touristSlice";

export const store = configureStore({
  reducer: {
    tourist: touristReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
