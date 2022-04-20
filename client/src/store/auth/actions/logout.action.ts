// redux
import { createAction } from '@reduxjs/toolkit';

// ==============================|| LOGOUT -> ACTION ||============================== //

export const logoutAction = createAction<void>('auth/logout');
