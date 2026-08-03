import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

import transactionService from "../services/transactionService";

export const fetchTransactions =
  createAsyncThunk(
    "transactions/fetchAll",

    async (
      filters = {},
      { rejectWithValue }
    ) => {

      try {

        const response =
          await transactionService.getAll(
            filters
          );

        return response.data;

      } catch (error) {

        return rejectWithValue(
          error.response?.data?.message ||
          error.message ||
          "Failed to fetch transactions."
        );

      }

    }
  );

export const fetchTransactionById =
  createAsyncThunk(
    "transactions/getById",

    async (
      id,
      { rejectWithValue }
    ) => {

      try {

        const response =
          await transactionService.getById(
            id
          );

        return response.data;

      } catch (error) {

        return rejectWithValue(
          error.response?.data?.message ||
          error.message ||
          "Failed to fetch transaction."
        );

      }

    }
  );

export const createTransaction =
  createAsyncThunk(
    "transactions/create",

    async (
      transactionData,
      { rejectWithValue }
    ) => {

      try {

        const response =
          await transactionService.create(
            transactionData
          );

        return response.data;

      } catch (error) {

        return rejectWithValue(
          error.response?.data?.message ||
          error.message ||
          "Failed to create transaction."
        );

      }

    }
  );

export const updateTransaction =
  createAsyncThunk(
    "transactions/update",

    async (
      {
        id,
        data,
      },
      { rejectWithValue }
    ) => {

      try {

        const response =
          await transactionService.update(
            id,
            data
          );

        return response.data;

      } catch (error) {

        return rejectWithValue(
          error.response?.data?.message ||
          error.message ||
          "Failed to update transaction."
        );

      }

    }
  );

export const deleteTransaction =
  createAsyncThunk(
    "transactions/delete",

    async (
      id,
      { rejectWithValue }
    ) => {

      try {

        await transactionService.remove(
          id
        );

        return id;

      } catch (error) {

        return rejectWithValue(
          error.response?.data?.message ||
          error.message ||
          "Failed to delete transaction."
        );

      }

    }
  );

const initialState = {

  transactions: [],

  currentTransaction: null,

  page: 0,

  size: 20,

  totalElements: 0,

  totalPages: 0,

  first: true,

  last: true,

  loading: false,

  error: null,

};

const transactionSlice =
  createSlice({

    name: "transactions",

    initialState,

    reducers: {

      clearTransactionError(state) {

        state.error = null;

      },

      clearCurrentTransaction(state) {

        state.currentTransaction = null;

      },

    },

    extraReducers: (builder) => {

      builder

        .addCase(
          fetchTransactions.pending,
          (state) => {

            state.loading = true;

            state.error = null;

          }
        )

        .addCase(
          fetchTransactions.fulfilled,
          (state, action) => {

            const pageData =
              action.payload;

            state.loading = false;

            state.transactions =
              pageData?.content ?? [];

            state.page =
              pageData?.number ?? 0;

            state.size =
              pageData?.size ?? 20;

            state.totalElements =
              pageData?.totalElements ?? 0;

            state.totalPages =
              pageData?.totalPages ?? 0;

            state.first =
              pageData?.first ?? true;

            state.last =
              pageData?.last ?? true;

            state.error = null;

          }
        )

        .addCase(
          fetchTransactions.rejected,
          (state, action) => {

            state.loading = false;

            state.error =
              action.payload;

          }
        )

        .addCase(
          fetchTransactionById.pending,
          (state) => {

            state.loading = true;

            state.error = null;

          }
        )

        .addCase(
          fetchTransactionById.fulfilled,
          (state, action) => {

            state.loading = false;

            state.currentTransaction =
              action.payload;

            state.error = null;

          }
        )

        .addCase(
          fetchTransactionById.rejected,
          (state, action) => {

            state.loading = false;

            state.error =
              action.payload;

          }
        )

        .addCase(
          createTransaction.pending,
          (state) => {

            state.loading = true;

            state.error = null;

          }
        )

        .addCase(
          createTransaction.fulfilled,
          (state) => {

            state.loading = false;

            state.error = null;

          }
        )

        .addCase(
          createTransaction.rejected,
          (state, action) => {

            state.loading = false;

            state.error =
              action.payload;

          }
        )

        .addCase(
          updateTransaction.pending,
          (state) => {

            state.loading = true;

            state.error = null;

          }
        )

        .addCase(
          updateTransaction.fulfilled,
          (state, action) => {

            state.loading = false;

            state.currentTransaction =
              action.payload;

            state.error = null;

          }
        )

        .addCase(
          updateTransaction.rejected,
          (state, action) => {

            state.loading = false;

            state.error =
              action.payload;

          }
        )

        .addCase(
          deleteTransaction.pending,
          (state) => {

            state.loading = true;

            state.error = null;

          }
        )

        .addCase(
          deleteTransaction.fulfilled,
          (state) => {

            state.loading = false;

            state.error = null;

          }
        )

        .addCase(
          deleteTransaction.rejected,
          (state, action) => {

            state.loading = false;

            state.error =
              action.payload;

          }
        );

    },

  });

export const {
  clearTransactionError,
  clearCurrentTransaction,
} = transactionSlice.actions;

export default transactionSlice.reducer;