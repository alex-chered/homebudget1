/* eslint-disable no-param-reassign */

// redux
import { createReducer } from '@reduxjs/toolkit';

// models
import { UserModel } from 'types/models';

// actions
import {
  registerAction,
  loginAction,
  getUserAction,
  getUserCountAction,
  logoutAction,
} from './actions';

// ==============================|| STATE TYPE ||============================== //

interface AuthState {
  user: UserModel | null; // in the store we don't save password for an user
  count: number;
  loading: boolean;
  errorText: string;
}

// ==============================|| INITIAL STATE ||============================== //

const initialState: AuthState = {
  user: null,
  count: 0,

  loading: false,
  errorText: '',
};

// ==============================|| AUTH -> REDUCER ||============================== //

export const authReducer = createReducer<AuthState>(initialState, (builder) => {
  builder
    // REGISTER
    .addCase(registerAction.pending, (state) => {
      state.user = null;
      state.loading = true;
      state.errorText = '';
    })
    .addCase(registerAction.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    })
    .addCase(registerAction.rejected, (state, payload) => {
      state.loading = false;
      state.errorText = payload.error?.message || '';
    })

    // LOGIN
    .addCase(loginAction.pending, (state) => {
      state.user = null;
      state.loading = true;
      state.errorText = '';
    })
    .addCase(loginAction.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    })
    .addCase(loginAction.rejected, (state, action) => {
      state.loading = false;
      state.errorText = action.error?.message || '';
    })

    // GET USER
    .addCase(getUserAction.pending, (state) => {
      state.user = null;
      state.loading = true;
      state.errorText = '';
    })
    .addCase(getUserAction.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    })
    .addCase(getUserAction.rejected, (state, action) => {
      state.loading = false;
      state.errorText = action.error?.message || '';
    })

    // GET USER COUNT
    .addCase(getUserCountAction.pending, (state) => {
      state.loading = true;
      state.errorText = '';
    })
    .addCase(getUserCountAction.fulfilled, (state, action) => {
      state.count = action.payload;
      state.loading = false;
    })
    .addCase(getUserCountAction.rejected, (state, action) => {
      state.loading = false;
      state.errorText = action.error?.message || '';
    })

    // LOGOUT
    .addCase(logoutAction, (state) => {
      state.user = null;
    });
});
