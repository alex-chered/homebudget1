// redux
import { createSelector } from '@reduxjs/toolkit';

// store
import { AppState } from 'store';

// ==============================|| SELECTORS ||============================== //

export const commonSelector = createSelector(
  (state: AppState) => state.common.drawerWidth,
  (state: AppState) => state.common.isMenuOpen,
  (drawerWidth, isMenuOpen) => ({
    drawerWidth,
    isMenuOpen,
  }),
);
