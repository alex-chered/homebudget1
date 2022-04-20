/* eslint-disable no-param-reassign */

// redux
import { createReducer } from '@reduxjs/toolkit';

// types
import { ISectionState } from 'types/base';
import { CurrencyModel } from 'types/models';

// actions
import {
  getAllAction,
  getWithFilterAction,
  getOneAction,
  createAction,
  updateAction,
  clearFilteredAction,
  clearCurrentAction,
  clearDataAction,
} from './currency.actions';

// ==============================|| INITIAL STATE ||============================== //

const initialState: ISectionState<CurrencyModel> = {
  data: [],
  filtered: [],
  current: null,

  loading: false,
  errorText: '',
};

// ==============================|| CURRENCY -> REDUCER ||============================== //

export const currencyReducer = createReducer<
  ISectionState<CurrencyModel>
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
      state.errorText = action.payload?.error || '';
    })

    // GET WITH FILTER
    .addCase(getWithFilterAction.pending, (state) => {
      state.filtered = [];
      state.loading = true;
      state.errorText = '';
    })
    .addCase(getWithFilterAction.fulfilled, (state, action) => {
      state.filtered = action.payload;
      state.loading = false;
    })
    .addCase(getWithFilterAction.rejected, (state, action) => {
      state.loading = false;
      state.errorText = action.payload?.error || '';
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
      state.errorText = action.payload?.error || '';
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
