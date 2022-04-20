/* eslint-disable no-param-reassign */

// redux
import { createReducer } from '@reduxjs/toolkit';

// actions
import { setMenuAction } from './common-actions';

// ==============================|| STATE TYPE ||============================== //

interface CommonState {
  drawerWidth: number;
  isMenuOpen: boolean;
}

// ==============================|| INITIAL STATE ||============================== //

const initialState: CommonState = {
  drawerWidth: 260,
  isMenuOpen: true,
};

// ==============================|| REDUCER ||============================== //

export const commonReducer = createReducer<CommonState>(initialState, (builder) => {
  builder
    .addCase(
      setMenuAction,
      (state, action) => {
        state.isMenuOpen = action.payload.opened;
      },
    );
});
