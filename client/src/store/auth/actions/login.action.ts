// redux
import { createAsyncThunk } from '@reduxjs/toolkit';

// 3rd-party libraries
import axios from 'axios';

// services
import { axiosInstance } from 'services/axios';
import { setToken } from 'services/token';

// const
import { LOGIN_URL } from 'const';

// types
import { UserModel } from 'types/models';
import { ILoginResponse } from 'types/responses';
import { IRejectedValue } from 'types/errors';

// ==============================|| LOGIN -> ACTION ||============================== //

export const loginAction = createAsyncThunk<
  UserModel,
  UserModel,
  { rejectValue: IRejectedValue }
>(
  'auth/login',
  async (paramUser, thunkApi) => {
    // <!-- Body --!>
    try {
      // Do the request
      const { data } = await axiosInstance.post<ILoginResponse>(
        LOGIN_URL,
        JSON.stringify({
          email: paramUser.email,
          password: paramUser.password,
        }),
      );

      // save token in local storage
      setToken(data.token);

      // return a user
      return data.user;
    } catch (err: unknown) {
      // The default error message
      let msg = 'Произошла ошибка при входе.';
      // If the error is AxiosError, get the message from the response
      if (axios.isAxiosError(err)) {
        const { message } = err.response?.data || '';
        if (message === 'The credentials are not valid') {
          msg = 'Введены неверные данные.';
        }
      }

      return thunkApi.rejectWithValue({ error: msg });
    }
  },
);
