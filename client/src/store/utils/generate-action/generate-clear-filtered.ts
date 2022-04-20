// redux
import { createAction } from '@reduxjs/toolkit';

// settings
import { ISectionOptions } from 'settings/section';

// ===========================|| GENERATE -> CLEAR FILTERED ACTION ||=========================== //

export const generateClearFilteredAction = (
  options: ISectionOptions,
) => createAction<void>(`${String(options.name)}/clear_filtered`);
