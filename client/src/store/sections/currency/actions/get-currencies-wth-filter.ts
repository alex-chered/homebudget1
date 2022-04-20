// redux
import { createAsyncThunk } from '@reduxjs/toolkit';

// services
import { axiosInstance } from 'services/axios';

// const
import { CURRENCY_BASE_URL } from 'const';

// types
import { CurrencyModel } from 'types/models';
import { IGetCurrenciesResponse } from 'types/responses/currency';

// ==========================|| GET CURRENCIES WITH FILTER -> ACTION ||========================== //

export const getCurrenciesWithFilterAction = createAsyncThunk<
  CurrencyModel[],
  string,
  {
    rejectValue: { error: string }
  }
>(
  'currency/get_with_filter',
  async (paramName, thunkApi) => {
    // <!-- Body --!>

    // form the url
    const url = `${CURRENCY_BASE_URL}/?name=${paramName}`;

    try {
      // Do the request
      const { data } = await axiosInstance.get<IGetCurrenciesResponse>(url);

      //
      return data.currencies;
    } catch (err: unknown) {
      // The default error message
      const msg = 'Произошла ошибка при получении данных.';

      return thunkApi.rejectWithValue({ error: msg });
    }
  },
);
