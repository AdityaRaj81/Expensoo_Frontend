import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../services/authService";

export const loginUser = createAsyncThunk("auth/login", async (credentials, { rejectWithValue }) => {
  try {
    return await authService.login(credentials);
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || error.message || "Login failed.");
  }
});

export const registerUser = createAsyncThunk("auth/register", async (userData, { rejectWithValue }) => {
  try {
    return await authService.register(userData);
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || error.message || "Registration failed.");
  }
});

export const restoreSession = createAsyncThunk("auth/restoreSession", async (_, { rejectWithValue }) => {
  const token = authService.getToken();
  if (!token) return rejectWithValue("NO_TOKEN");

  try {
    const user = await authService.getCurrentUser();
    return { token, user };
  } catch (error) {
    authService.logout();
    return rejectWithValue(error.response?.data?.message || "SESSION_INVALID");
  }
});

export const logoutUser = createAsyncThunk("auth/logout", async () => {
  authService.logout();
  return true;
});

const initialState = {
  user: authService.getStoredUser(),
  token: authService.getToken(),
  isAuthenticated: false,
  initialized: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
    clearAuth(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.initialized = true;
      state.loading = false;
      state.error = null;
      authService.logout();
    },
    updateUser(state, action) {
      state.user = { ...state.user, ...action.payload };
      authService.updateStoredUser(state.user);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(restoreSession.pending, (state) => {
        state.initialized = false;
      })
      .addCase(restoreSession.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.initialized = true;
        state.error = null;
        authService.saveAuth(action.payload.token, action.payload.user);
      })
      .addCase(restoreSession.rejected, (state) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.initialized = true;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.initialized = true;
        state.error = null;
        authService.saveAuth(action.payload.token, action.payload.user);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.initialized = true;
        state.error = null;
        authService.saveAuth(action.payload.token, action.payload.user);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.initialized = true;
        state.loading = false;
        state.error = null;
      });
  },
});

export const { clearError, clearAuth, updateUser } = authSlice.actions;
export default authSlice.reducer;