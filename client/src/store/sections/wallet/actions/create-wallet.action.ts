// redux
import { createAsyncThunk } from '@reduxjs/toolkit';

// 3rd-party
import axios from 'axios';

// services
import { axiosInstance } from 'services/axios';

// app-config
import { WALLET_BASE_URL } from 'app-config';

// types
import { WalletModel } from 'types/models';
import { IGetOneWalletResponse } from 'types/responses/wallet';

// ==============================|| CREATE WALLET -> ACTION ||============================== //

export const createWalletAction = createAsyncThunk<
  WalletModel,
  WalletModel,
  {
    rejectValue: { error: string }
  }
>(
  'wallet/create',
  async (paramWallet, thunkApi) => {
    // <!-- Body --!>
    try {
      // Do the request
      const { data } = await axiosInstance.post<IGetOneWalletResponse>(
        WALLET_BASE_URL,
        {
          name: paramWallet.name.trim(),
          comment: paramWallet.comment,
          walletTypeId: paramWallet.walletType.id,
          currencyId: paramWallet.currency.id,
        },
      );

      //
      return data.wallet;
    } catch (err: unknown) {
      // The default error message
      let msg = 'Ошибка при сохранении данных.';
      // If the error is AxiosError, get the message from the response
      if (axios.isAxiosError(err)) {
        const { message } = err.response?.data || '';
        if (message === 'The wallet already exists') {
          msg = 'Кошелек с таким наименованием уже существует.';
        }
      }

      return thunkApi.rejectWithValue({ error: msg });
    }
  },
);
