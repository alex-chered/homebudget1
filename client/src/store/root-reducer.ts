// redux
import { combineReducers } from '@reduxjs/toolkit';

// reducers
import { authReducer } from './auth';
import { toastsReducer } from './toasts';
import { commonReducer } from './common';
import { sectionsReducer } from './sections';

// ==============================|| ROOT REDUCER ||============================== //

export const rootReducer = combineReducers({
  auth: authReducer,
  toasts: toastsReducer,
  common: commonReducer,
  sections: sectionsReducer,
});
