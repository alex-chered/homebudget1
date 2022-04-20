// redux
import { createAsyncThunk } from '@reduxjs/toolkit';

// services
import { axiosInstance } from 'services/axios';

// app-config
import { WALLET_BASE_URL } from 'app-config';

// types
import { WalletModel } from 'types/models';
import { IGetAllWalletsResponse } from 'types/responses/wallet';

// ==============================|| GET ALL WALLETS -> ACTION ||============================== //

export const getAllWalletsAction = createAsyncThunk<
  WalletModel[],
  void,
  {
    rejectValue: { error: string }
  }
>(
  'wallet/get_all',
  async (_, thunkApi) => {
    // <!-- Body --!>
    try {
      // Do the request
      const { data } = await axiosInstance.get<IGetAllWalletsResponse>(WALLET_BASE_URL);

      //
      return data.wallets;
    } catch (err: unknown) {
      // The default error message
      const msg = 'Произошла ошибка при получении данных.';

      return thunkApi.rejectWithValue({ error: msg });
    }
  },
);
