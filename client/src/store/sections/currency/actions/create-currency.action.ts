// redux
import { createAsyncThunk } from '@reduxjs/toolkit';

// 3rd-party
import axios from 'axios';

// const
import { CURRENCY_BASE_URL } from 'const';

// services
import { axiosInstance } from 'services/axios';

// types
import { CurrencyModel } from 'types/models';
import { ICreateCurrencyResponse } from 'types/responses/currency';

// ==============================|| CREATE CURRENCY -> ACTION ||============================== //

export const createCurrencyAction = createAsyncThunk<
  CurrencyModel,
  CurrencyModel,
  {
    rejectValue: { error: string }
  }
>(
  'currency/create',
  async (paramCurrency, thunkApi) => {
    // <!-- Body --!>
    try {
      // Do the request
      const { data } = await axiosInstance.post<ICreateCurrencyResponse>(
        CURRENCY_BASE_URL,
        {
          name: paramCurrency.name,
          fullName: paramCurrency.fullName,
        },
      );

      //
      return data.currency;
    } catch (err: unknown) {
      // The default error message
      let msg = 'Ошибка при сохранении данных.';
      // If the error is AxiosError, get the message from the response
      if (axios.isAxiosError(err)) {
        const { message } = err.response?.data || '';
        if (message === 'The currency already exists') {
          msg = 'Валюта с таким наименованием уже существует.';
        }
      }

      return thunkApi.rejectWithValue({ error: msg });
    }
  },
);
