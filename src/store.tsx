import { configureStore } from "@reduxjs/toolkit";
import touristReducer from "../src/features/tourist/touristSlice";

export const store = configureStore({
  reducer: {
    tourist: touristReducer,
  },
});
