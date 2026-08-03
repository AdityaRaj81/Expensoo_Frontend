import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import categoryService from "../services/categoryService";

/*
============================================================
Fetch Categories
============================================================
*/

export const fetchCategories = createAsyncThunk(

  "categories/fetch",

  async (_, { rejectWithValue }) => {

    try {

      const response = await categoryService.getAll();

      return response.data;

    } catch (error) {

      return rejectWithValue(

        error.response?.data?.message ||

        "Failed to fetch categories."

      );

    }

  }

);

const initialState = {

  categories: [],

  loading: false,

  error: null

};

const categorySlice = createSlice({

  name: "categories",

  initialState,

  reducers: {

    clearCategoryError(state) {

      state.error = null;

    }

  },

  extraReducers: (builder) => {

    builder

      .addCase(fetchCategories.pending, (state) => {

        state.loading = true;

        state.error = null;

      })

      .addCase(fetchCategories.fulfilled, (state, action) => {

        state.loading = false;

        state.categories = action.payload;

      })

      .addCase(fetchCategories.rejected, (state, action) => {

        state.loading = false;

        state.error = action.payload;

      });

  }

});

export const {

  clearCategoryError

} = categorySlice.actions;

export default categorySlice.reducer;