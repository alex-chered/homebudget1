// redux
import { createAsyncThunk } from '@reduxjs/toolkit';

// services
import { axiosInstance } from 'services/axios';

// const
import { USER_URL } from 'const';

// types
import { UserModel } from 'types/models';
import { IGetUserResponse } from 'types/responses';

// ==============================|| GET USER -> ACTION ||============================== //

export const getUserAction = createAsyncThunk<
  UserModel,
  void,
  {
    rejectValue: { error: string }
  }
>(
  'auth/getUser',
  async (_, thunkApi) => {
    // <!-- Body --!>
    try {
      const { data } = await axiosInstance.get<IGetUserResponse>(USER_URL);
      return data.user;
    } catch (err) {
      const msg = (err as Error).message;
      return thunkApi.rejectWithValue({ error: msg });
    }
  },
);
