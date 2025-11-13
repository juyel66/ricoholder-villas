import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const API_BASE = import.meta.env.VITE_API_BASE_TOURIST



// ✅ GET: Fetch tourists
export const fetchTourists = createAsyncThunk(
  "tourist/fetchTourists",
  async () => {
    const response = await axios.get(
      `${API_BASE}`
    );
    return response.data;
  }
);

// ✅ DELETE: Delete a tourist by ID
export const deleteTourist = createAsyncThunk(
  "tourist/deleteTourist",
  async (id: string) => {
    await axios.delete(
      `{}/${id}`
    );
    return id; // return the deleted ID
  }
);

import type { TouristState } from "../../../types/tourist.types";

const initialState: TouristState = {
  tourists: [],
  loading: false,
  error: null,
};

const touristSlice = createSlice({
  name: "tourist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ✅ GET cases
    builder
      .addCase(fetchTourists.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTourists.fulfilled, (state, action) => {
        state.loading = false;
        state.tourists = Array.isArray(action.payload) ? action.payload : [];
        state.error = null;
      })
      .addCase(fetchTourists.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || "Failed to fetch data";
      });

    // ✅ DELETE cases
    builder
      .addCase(deleteTourist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTourist.fulfilled, (state, action) => {
        state.loading = false;
        // remove deleted tourist from state
        state.tourists = state.tourists.filter(
          (tourist) => tourist._id !== action.payload
        );
      })
      .addCase(deleteTourist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || "Failed to delete tourist";
      });
  },
});

export default touristSlice.reducer;
