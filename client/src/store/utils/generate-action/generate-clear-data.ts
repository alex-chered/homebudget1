// redux
import { createAction } from '@reduxjs/toolkit';

// settings
import { ISectionOptions } from 'settings/section';

// =============================|| GENERATE -> CLEAR DATA ACTION ||============================= //

export const generateClearDataAction = (
  options: ISectionOptions,
) => createAction<void>(`${String(options.name)}/clear_data`);
