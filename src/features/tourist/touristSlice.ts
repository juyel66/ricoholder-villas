import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ✅ GET: Fetch tourists
export const fetchTourists = createAsyncThunk(
  "tourist/fetchTourists",
  async () => {
    const response = await axios.get(
      "https://southeast-asia-server-three.vercel.app/addTourist"
    );
    return response.data;
  }
);

// ✅ DELETE: Delete a tourist by ID
export const deleteTourist = createAsyncThunk(
  "tourist/deleteTourist",
  async (id: string) => {
    await axios.delete(
      `https://southeast-asia-server-three.vercel.app/addTourist/${id}`
    );
    return id; // return the deleted ID
  }
);

interface TouristState {
  tourists: any[];
  loading: boolean;
  error: string | null;
}

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
