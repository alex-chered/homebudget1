// redux
import { createAsyncThunk } from '@reduxjs/toolkit';

// services
import { axiosInstance } from 'services/axios';

// const
import { CURRENCY_BASE_URL } from 'const';

// types
import { CurrencyModel } from 'types/models';
import { IGetCurrencyResponse } from 'types/responses/currency';

// ==============================|| GET ONE CURRENCY -> ACTION ||============================== //

export const getOneCurrencyAction = createAsyncThunk<
  CurrencyModel,
  number | string,
  {
    rejectValue: { error: string }
  }
>(
  'currency/get',
  async (paramId, thunkApi) => {
    // <!-- Body --!>
    const url = `${CURRENCY_BASE_URL}/${paramId}`;

    try {
      // Do the request
      const { data } = await axiosInstance.get<IGetCurrencyResponse>(url);

      //
      return data.currency;
    } catch (err: unknown) {
      // The default error message
      const msg = 'Произошла ошибка при получении данных.';

      return thunkApi.rejectWithValue({ error: msg });
    }
  },
);
