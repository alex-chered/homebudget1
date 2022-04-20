// redux
import { createAsyncThunk } from '@reduxjs/toolkit';

// services
import { axiosInstance } from 'services/axios';

// settings
import { ISectionOptions } from 'settings/section';

// types
import { BaseModel } from 'types/models';
import { IGetOneResponse } from 'types/base';

// ==============================|| GENERATE -> UPDATE ACTION ||============================== //

export const generateUpdateAction = <T extends BaseModel>(
  options: ISectionOptions,
) => createAsyncThunk<
  T,
  T,
  { rejectValue: { error: string } }
>(`${String(options.name)}/update`, async (param, thunkApi) => {
  // <!-- Body --!>
  try {
    const { data } = await axiosInstance.put<IGetOneResponse<T>>(options.url, param.toDto());
    return data.value;
  } catch (err: unknown) {
    // The default error message
    const msg = 'Ошибка при сохранении данных.';
    return thunkApi.rejectWithValue({ error: msg });
  }
});
