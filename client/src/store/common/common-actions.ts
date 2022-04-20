// redux
import { createAction } from '@reduxjs/toolkit';

// ==============================|| ACTIONS ||============================== //

export const setMenuAction = createAction<{ opened: boolean }>('SET_MENU');
