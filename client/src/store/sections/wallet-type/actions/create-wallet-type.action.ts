// redux
import { createAsyncThunk } from '@reduxjs/toolkit';

// 3rd-party
import axios from 'axios';

// services
import { axiosInstance } from 'services/axios';

// const
import { WALLET_TYPE_BASE_URL } from 'const';

// types
import { WalletTypeModel } from 'types/models';
import { IGetOneWalletTypeResponse } from 'types/responses/wallet-type';

// ==============================|| CREATE WALLET TYPE -> ACTION ||============================== //

export const createWalletTypeAction = createAsyncThunk<
  WalletTypeModel,
  WalletTypeModel,
  {
    rejectValue: { error: string }
  }
>(
  'wallet-type/create',
  async (paramWalletType, thunkApi) => {
    // <!-- Body --!>
    try {
      // Do the request
      const { data } = await axiosInstance.post<IGetOneWalletTypeResponse>(
        WALLET_TYPE_BASE_URL,
        { name: paramWalletType.name },
      );

      //
      return data.walletType;
    } catch (err: unknown) {
      // The default error message
      let msg = 'Ошибка при сохранении данных.';
      // If the error is AxiosError, get the message from the response
      if (axios.isAxiosError(err)) {
        const { message } = err.response?.data || '';
        if (message === 'The wallet type already exists') {
          msg = 'Тип кошелька уже существует.';
        }
      }

      return thunkApi.rejectWithValue({ error: msg });
    }
  },
);
