// redux
import { createAsyncThunk } from '@reduxjs/toolkit';

// services
import { axiosInstance } from 'services/axios';

// settings
import { ISectionOptions } from 'settings/section';

// types
import { BaseModel } from 'types/models';
import { IGetOneResponse } from 'types/base';

// ==============================|| GENERATE -> GET ONE ACTION ||============================== //

export const generateGetOneAction = <T extends BaseModel>(
  options: ISectionOptions,
) => createAsyncThunk<
  T,
  number | string,
  { rejectValue: { error: string } }
>(`${String(options.name)}/get`, async (paramId, thunkApi) => {
  // <!-- Body --!>

  // form the url
  const url = `${options.url}/${paramId}`;
  try {
    // get data from the resposne
    const { data } = await axiosInstance.get<IGetOneResponse<T>>(url);
    // return
    return data.value;
  } catch (err: unknown) {
    // The default error message
    const msg = 'Произошла ошибка при получении данных.';
    return thunkApi.rejectWithValue({ error: msg });
  }
});
