// redux
import { AsyncThunk } from '@reduxjs/toolkit';

// ==============================|| BASE SECTION ||============================== //

export interface IBaseSection<T> {
  // create: (param: T) => AsyncThunk<T, T, { rejectValue: { error: string; } }>;
  create: AsyncThunk<T, T, { rejectValue: { error: string; } }>;
}
