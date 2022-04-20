// redux
import { createAsyncThunk } from '@reduxjs/toolkit';

// 3rd-party
import axios from 'axios';

// services
import { axiosInstance } from 'services/axios';

// const
import { CURRENCY_BASE_URL } from 'const';

// types
import { CurrencyModel } from 'types/models';
import { ICreateCurrencyResponse } from 'types/responses/currency';

// ==============================|| UPDATE CURRENCY -> ACTION ||============================== //

export const updateCurrencyAction = createAsyncThunk<
  CurrencyModel,
  CurrencyModel,
  {
    rejectValue: { error: string }
  }
>(
  'currency/update',
  async (paramCurrency, thunkApi) => {
    // <!-- Body --!>
    try {
      // Do the request
      const { data } = await axiosInstance.put<ICreateCurrencyResponse>(
        CURRENCY_BASE_URL,
        {
          id: paramCurrency.id,
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
        if (message === 'The currency doesn\'t exist') {
          msg = 'Валюта с таким наименованием не существует.';
        }
      }

      return thunkApi.rejectWithValue({ error: msg });
    }
  },
);
