// redux
import { createAsyncThunk } from '@reduxjs/toolkit';

// services
import { axiosInstance } from 'services/axios';

// const
import { WALLET_TYPE_BASE_URL } from 'const';

// types
import { WalletTypeModel } from 'types/models';
import { IGetAllWalletTypesResponse } from 'types/responses/wallet-type';

// =============================|| GET ALL WALLET TYPES -> ACTION ||============================= //

export const getAllWalletTypesAction = createAsyncThunk<
  WalletTypeModel[],
  void,
  {
    rejectValue: { error: string }
  }
>(
  'wallet_type/get_all',
  async (_, thunkApi) => {
    // <!-- Body --!>
    try {
      // Do the request
      const { data } = await axiosInstance.get<IGetAllWalletTypesResponse>(WALLET_TYPE_BASE_URL);

      //
      return data.walletTypes;
    } catch (err: unknown) {
      // The default error message
      const msg = 'Произошла ошибка при получении данных.';

      return thunkApi.rejectWithValue({ error: msg });
    }
  },
);
