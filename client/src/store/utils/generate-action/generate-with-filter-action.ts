// redux
import { createAsyncThunk } from '@reduxjs/toolkit';

// services
import { axiosInstance } from 'services/axios';

// settings
import { ISectionOptions } from 'settings/section';

// types
import { BaseModel } from 'types/models';
import { IGetAllResponse } from 'types/base';

// ===========================|| GENERATE -> GET WITH FILTER ACTION ||=========================== //

export const generateGetWithFilterAction = <T extends BaseModel>(
  options: ISectionOptions,
) => createAsyncThunk<
  T[],
  string,
  { rejectValue: { error: string } }
>(`${String(options.name)}/get_with_filter`, async (paramName, thunkApi) => {
  // <!-- Body --!>

  // form the url
  const url = `${options.url}/?name=${paramName}`;
  try {
    // Do the request
    const { data } = await axiosInstance.get<IGetAllResponse<T>>(url);
    // return
    return data.values;
  } catch (err: unknown) {
    // The default error message
    const msg = 'Произошла ошибка при получении данных.';
    // return an error
    return thunkApi.rejectWithValue({ error: msg });
  }
});
