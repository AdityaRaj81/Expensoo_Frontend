import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import dashboardService from "../services/dashboardService";

/*
============================================================
Dashboard
============================================================
*/
export const fetchDashboard = createAsyncThunk(
  "dashboard/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await dashboardService.getDashboard();
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
        "Failed to load dashboard."
      );
    }
  }
);

const initialState = {

  dashboard: null,

  loading: false,

  error: null

};

const dashboardSlice = createSlice({

  name: "dashboard",

  initialState,

  reducers: {

    clearDashboardError(state) {

      state.error = null;

    }

  },

  extraReducers: (builder) => {

    builder

      .addCase(fetchDashboard.pending, (state) => {

        state.loading = true;

        state.error = null;

      })

      .addCase(fetchDashboard.fulfilled, (state, action) => {

        state.loading = false;

        state.dashboard = action.payload;

      })

      .addCase(fetchDashboard.rejected, (state, action) => {

        state.loading = false;

        state.error = action.payload;

      });

  }

});

export const {

  clearDashboardError

} = dashboardSlice.actions;

export default dashboardSlice.reducer;