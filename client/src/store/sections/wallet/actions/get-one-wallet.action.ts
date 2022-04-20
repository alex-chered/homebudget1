// redux
import { createAsyncThunk } from '@reduxjs/toolkit';

// services
import { axiosInstance } from 'services/axios';

// const
import { WALLET_BASE_URL } from 'const';

// types
import { WalletModel } from 'types/models';
import { IGetOneWalletResponse } from 'types/responses/wallet';

// =============================|| GET ONE WALLET -> ACTION ||============================= //

export const getOneWalletAction = createAsyncThunk<
  WalletModel,
  number | string,
  {
    rejectValue: { error: string }
  }
>(
  'wallet/get',
  async (paramId, thunkApi) => {
    // <!-- Body --!>
    const url = `${WALLET_BASE_URL}/${paramId}`;

    try {
      // Do the request
      const { data } = await axiosInstance.get<IGetOneWalletResponse>(url);

      // result
      return data.wallet;
    } catch (err: unknown) {
      // The default error message
      const msg = 'Произошла ошибка при получении данных.';

      return thunkApi.rejectWithValue({ error: msg });
    }
  },
);
