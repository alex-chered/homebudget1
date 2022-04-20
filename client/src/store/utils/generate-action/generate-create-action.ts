// redux
import { createAsyncThunk } from '@reduxjs/toolkit';

// services
import { axiosInstance } from 'services/axios';

// settings
import { ISectionOptions } from 'settings/section';

// types
import { BaseModel } from 'types/models';
import { IGetOneResponse } from 'types/base';

// ==============================|| GENERATE -> CREATE ACTION ||============================== //

export const generateCreateAction = <T extends BaseModel>(
  options: ISectionOptions,
) => createAsyncThunk<
  T,
  T,
  { rejectValue: { error: string } }
>(`${String(options.name)}/create`, async (param, thunkApi) => {
  // <!-- Body --!>
  try {
    const { data } = await axiosInstance.post<IGetOneResponse<T>>(options.url, param.toDto());
    return data.value;
  } catch (err: unknown) {
    // The default error message
    const msg = 'Ошибка при сохранении данных.';
    return thunkApi.rejectWithValue({ error: msg });
  }
});
