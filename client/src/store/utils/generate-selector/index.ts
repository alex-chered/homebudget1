/* eslint-disable @typescript-eslint/no-non-null-assertion */
// redux
import { createSelector } from '@reduxjs/toolkit';

// store
import { AppState } from 'store';

// types
import { BaseModel } from 'types/models';

// settings
import { ISectionOptions } from 'settings/section';

// ==============================|| GENERATE -> DATA SELECTOR ||============================== //

export const generateDataSelector = <T extends BaseModel>(
  options: ISectionOptions,
) => createSelector(
    (state: AppState) => state.sections[options.name]!.data,
    (data) => ({ data: data as T[] }),
  );

// =============================|| GENERATE -> FILTERED SELECTOR ||============================= //

export const generateFilteredSelector = <T extends BaseModel>(
  options: ISectionOptions,
) => createSelector(
    (state: AppState) => state.sections[options.name]!.filtered,
    (filtered) => ({ filtered: filtered as T[] }),
  );

// =============================|| GENERATE -> FILTERED SELECTOR ||============================= //

export const generateCurrentSelector = <T extends BaseModel>(
  options: ISectionOptions,
) => createSelector(
    (state: AppState) => state.sections[options.name]!.current,
    (current) => {
      if (!current) {
        return { current: null };
      }
      return { current: current as T };
    },
  );

// ==============================|| GENERATE -> LOADING SELECTOR ||============================== //

export const generateLoadingSelector = (options: ISectionOptions) => createSelector(
  (state: AppState) => state.sections[options.name]!.loading,
  (loading) => ({ loading }),
);
