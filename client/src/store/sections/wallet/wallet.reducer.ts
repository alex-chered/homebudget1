/* eslint-disable no-param-reassign */

// redux
import { createReducer } from '@reduxjs/toolkit';

// types
import { ISectionState } from 'types/base';
import { WalletModel } from 'types/models';

// actions
import {
  getAllAction,
  getOneAction,
  createAction,
  updateAction,
  clearDataAction,
  clearCurrentAction,
  clearFilteredAction,
} from './wallet.actions';

// ==============================|| INITIAL STATE ||============================== //

const initialState: ISectionState<WalletModel> = {
  data: [],
  filtered: [],
  current: null,

  loading: false,
  errorText: '',
};

// ==============================|| WALLET -> REDUCER ||============================== //

export const walletReducer = createReducer<
  ISectionState<WalletModel>
>(initialState, (builder) => {
  // <!-- Body --!>
  builder
    // GET ALL
    .addCase(getAllAction.pending, (state) => {
      state.data = [];
      state.loading = true;
      state.errorText = '';
    })
    .addCase(getAllAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    })
    .addCase(getAllAction.rejected, (state, action) => {
      state.loading = false;
      state.errorText = action.error.message || '';
    })

    // GET ONE
    .addCase(getOneAction.pending, (state) => {
      state.current = null;
      state.loading = true;
      state.errorText = '';
    })
    .addCase(getOneAction.fulfilled, (state, action) => {
      state.current = action.payload;
      state.loading = false;
    })
    .addCase(getOneAction.rejected, (state, action) => {
      state.loading = false;
      state.errorText = action.error.message || '';
    })

    // CREATE
    .addCase(createAction.pending, (state) => {
      state.loading = true;
      state.errorText = '';
    })
    .addCase(createAction.fulfilled, (state) => {
      state.loading = false;
    })
    .addCase(createAction.rejected, (state, action) => {
      state.loading = false;
      state.errorText = action.payload?.error || '';
    })

    // UPDATE
    .addCase(updateAction.pending, (state) => {
      state.loading = true;
      state.errorText = '';
    })
    .addCase(updateAction.fulfilled, (state) => {
      state.loading = false;
    })
    .addCase(updateAction.rejected, (state, action) => {
      state.loading = false;
      state.errorText = action.payload?.error || '';
    })

    // CLEAR FILTERED
    .addCase(clearFilteredAction, (state) => {
      state.filtered = [];
    })

    // CLEAR CURRENT
    .addCase(clearCurrentAction, (state) => {
      state.current = null;
    })

    // CLEAR DATA
    .addCase(clearDataAction, (state) => {
      state.data = [];
    });
});
