// redux
import { createAsyncThunk } from '@reduxjs/toolkit';

// services
import { axiosInstance } from 'services/axios';

// settings
import { ISectionOptions } from 'settings/section';

// types
import { BaseModel } from 'types/models';
import { IGetAllResponse } from 'types/base';

// ==============================|| GENERATE -> GET ALL ACTION ||============================== //

export const generateGetAllAction = <T extends BaseModel>(
  options: ISectionOptions,
) => createAsyncThunk<
  T[],
  void,
  { rejectValue: { error: string } }
>(`${String(options.name)}/get_all`, async (_, thunkApi) => {
  // <!-- Body --!>
  try {
    const { data } = await axiosInstance.get<IGetAllResponse<T>>(options.url);
    return data.values;
  } catch (err: unknown) {
    // The default error message
    const msg = 'Произошла ошибка при получении данных.';
    return thunkApi.rejectWithValue({ error: msg });
  }
});
