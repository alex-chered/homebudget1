// redux
import { createAsyncThunk } from '@reduxjs/toolkit';

// 3rd-party libraries
import axios from 'axios';

// services
import { axiosInstance } from 'services/axios';
import { setToken } from 'services/token';

// const
import { REGISTER_URL } from 'const';

// types
import { UserModel } from 'types/models';
import { IRegisterResponse } from 'types/responses';

// ==============================|| REGISTER -> ACTION ||============================== //

export const registerAction = createAsyncThunk<
  UserModel,
  UserModel,
  {
    rejectValue: { error: string }
  }
>(
  'auth/register',
  async (paramUser, thunkApi) => {
    // <!-- Body --!>

    try {
      // Do the request
      const { data } = await axiosInstance.post<IRegisterResponse>(
        REGISTER_URL,
        JSON.stringify({
          email: paramUser.email,
          password: paramUser.password,
          username: paramUser.username,
        }),
      );

      // save token in local storage
      setToken(data.token);

      // return a user
      return data.user;
    } catch (err: unknown) {
      // The default error message
      let msg = 'Произошла ошибка при регистрации.';
      // If the error is AxiosError, get the message from the response
      if (axios.isAxiosError(err)) {
        const { message } = err.response?.data || '';
        if (message === 'The user already exists') {
          msg = 'Пользователь уже существует.';
        }
      }

      return thunkApi.rejectWithValue({ error: msg });
    }
  },
);
