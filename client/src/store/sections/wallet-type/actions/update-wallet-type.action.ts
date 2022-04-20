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

// ==============================|| UPDATE WALLET TYPE -> ACTION ||============================== //

export const updateWalletTypeAction = createAsyncThunk<
  WalletTypeModel,
  WalletTypeModel,
  {
    rejectValue: { error: string }
  }
>(
  'wallet-type/update',
  async (paramWalletType, thunkApi) => {
    // <!-- Body --!>
    try {
      // Do the request
      const { data } = await axiosInstance.put<IGetOneWalletTypeResponse>(
        WALLET_TYPE_BASE_URL,
        {
          id: paramWalletType.id,
          name: paramWalletType.name,
        },
      );

      //
      return data.walletType;
    } catch (err: unknown) {
      // The default error message
      let msg = 'Ошибка при сохранении данных.';
      // If the error is AxiosError, get the message from the response
      if (axios.isAxiosError(err)) {
        const { message } = err.response?.data || '';
        if (message === 'The wallet type doesn\'t exist') {
          msg = 'Такой тип кошелька не существует.';
        }
      }

      return thunkApi.rejectWithValue({ error: msg });
    }
  },
);
