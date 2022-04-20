// redux
import { createAsyncThunk } from '@reduxjs/toolkit';

// services
import { axiosInstance } from 'services/axios';

// const
import { WALLET_TYPE_BASE_URL } from 'const';

// types
import { WalletTypeModel } from 'types/models';
import { IGetOneWalletTypeResponse } from 'types/responses/wallet-type';

// =============================|| GET ONE WALLET TYPE -> ACTION ||============================= //

export const getOneWalletTypeAction = createAsyncThunk<
  WalletTypeModel,
  number | string,
  {
    rejectValue: { error: string }
  }
>(
  'wallet-type/get',
  async (paramId, thunkApi) => {
    // <!-- Body --!>
    const url = `${WALLET_TYPE_BASE_URL}/${paramId}`;

    try {
      // Do the request
      const { data } = await axiosInstance.get<IGetOneWalletTypeResponse>(url);

      //
      return data.walletType;
    } catch (err: unknown) {
      // The default error message
      const msg = 'Произошла ошибка при получении данных.';

      return thunkApi.rejectWithValue({ error: msg });
    }
  },
);
