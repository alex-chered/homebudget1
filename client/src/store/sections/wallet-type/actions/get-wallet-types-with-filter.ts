// redux
import { createAsyncThunk } from '@reduxjs/toolkit';

// services
import { axiosInstance } from 'services/axios';

// const
import { WALLET_TYPE_BASE_URL } from 'const';

// types
import { WalletTypeModel } from 'types/models';
import { IGetAllWalletTypesResponse } from 'types/responses/wallet-type';

// =========================|| GET WALLET TYPES WITH FILTER -> ACTION ||========================= //

export const getWalletWithFilterAction = createAsyncThunk<
  WalletTypeModel[],
  string,
  {
    rejectValue: { error: string }
  }
>(
  'wallet_type/get_with_filter',
  async (paramWalletType, thunkApi) => {
    // <!-- Body --!>

    // form the url
    const url = `${WALLET_TYPE_BASE_URL}/?name=${paramWalletType}`;

    try {
      // do the request
      const { data } = await axiosInstance.get<IGetAllWalletTypesResponse>(url);
      // result
      return data.walletTypes;
    } catch (err: unknown) {
      // The default error message
      const msg = 'Произошла ошибка при получении данных.';

      return thunkApi.rejectWithValue({ error: msg });
    }
  },
);
