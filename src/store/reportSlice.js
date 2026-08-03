import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import reportService from "../services/reportService";

/*
============================================================
Monthly Report
============================================================
*/

export const fetchMonthlyReport = createAsyncThunk(

  "reports/monthly",

  async (month, { rejectWithValue }) => {

    try {

      const response = await reportService.getMonthlyReport(

        month

      );

      return response.data;

    } catch (error) {

      return rejectWithValue(

        error.response?.data?.message ||

        "Failed to load monthly report."

      );

    }

  }

);

/*
============================================================
Custom Report
============================================================
*/

export const fetchCustomReport = createAsyncThunk(

  "reports/custom",

  async (filters, { rejectWithValue }) => {

    try {

      const response = await reportService.getCustomReport(

        filters

      );

      return response.data;

    } catch (error) {

      return rejectWithValue(

        error.response?.data?.message ||

        "Failed to load report."

      );

    }

  }

);

const initialState = {

  report: null,

  loading: false,

  error: null

};

const reportSlice = createSlice({

  name: "reports",

  initialState,

  reducers: {

    clearReportError(state) {

      state.error = null;

    }

  },

  extraReducers: (builder) => {

    builder

      .addCase(fetchMonthlyReport.pending, (state) => {

        state.loading = true;

        state.error = null;

      })

      .addCase(fetchMonthlyReport.fulfilled, (state, action) => {

        state.loading = false;

        state.report = action.payload;

      })

      .addCase(fetchMonthlyReport.rejected, (state, action) => {

        state.loading = false;

        state.error = action.payload;

      })

      .addCase(fetchCustomReport.pending, (state) => {

        state.loading = true;

        state.error = null;

      })

      .addCase(fetchCustomReport.fulfilled, (state, action) => {

        state.loading = false;

        state.report = action.payload;

      })

      .addCase(fetchCustomReport.rejected, (state, action) => {

        state.loading = false;

        state.error = action.payload;

      });

  }

});

export const {

  clearReportError

} = reportSlice.actions;

export default reportSlice.reducer;