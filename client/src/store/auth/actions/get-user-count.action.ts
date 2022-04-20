// redux
import { createAsyncThunk } from '@reduxjs/toolkit';

// services
import { axiosInstance } from 'services/axios';

// const
// import { USER_URL } from 'const';

// types
import { IGetUserCountResponse } from 'types/responses/auth';

// ==============================|| GET USER -> ACTION ||============================== //

export const getUserCountAction = createAsyncThunk<
  number,
  void,
  { rejectValue: { error: string } }
>(
  'auth/getUserCount',
  async (_, thunkApi) => {
    // <!-- Body --!>
    try {
      const { data } = await axiosInstance.get<IGetUserCountResponse>('count');
      return data.count;
    } catch (err) {
      const msg = (err as Error).message;
      return thunkApi.rejectWithValue({ error: msg });
    }
  },
);
