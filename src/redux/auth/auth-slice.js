import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  fetchCurrentUser,
  logOut,
} from '../auth/auth-operation';

const initialState = {
  user: {},
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: state => {
      state.isLoading = true;
    },

    [register.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [login.pending]: state => {
      state.isLoading = true;
    },

    [login.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [login.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },

    [logOut.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [logOut.fulfilled]: (state, action) => {
      state.user = {};
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = null;
    },

    [logOut.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [fetchCurrentUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },

    [fetchCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
    },
    [fetchCurrentUser.rejected]: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
