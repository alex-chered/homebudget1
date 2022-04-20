// redux
import { createAction } from '@reduxjs/toolkit';

// settings
import { ISectionOptions } from 'settings/section';

// ===========================|| GENERATE -> CLEAR CURRENT ACTION ||=========================== //

export const generateClearCurrentAction = (
  options: ISectionOptions,
) => createAction<void>(`${String(options.name)}/clear_current`);
