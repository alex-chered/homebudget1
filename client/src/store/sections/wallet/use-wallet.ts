import { useCallback } from 'react';

// types
import { WalletModel } from 'types/models';

// store
import { useAppDispatch } from 'store';
import {
  getAllWalletsAction,
  getOneWalletAction,
  createWalletAction,
  updateWalletAction,
} from './actions';

// ==============================|| USE WALLET ||============================== //

export const useWallet = () => {
  const dispatch = useAppDispatch();

  //
  // GET ALL
  //
  const fetchAll = useCallback(async (): Promise<WalletModel[]> => {
    return dispatch(getAllWalletsAction()).unwrap();
  }, [dispatch]);

  //
  // GET ONE
  //
  const fetchOne = useCallback(async (id: string | number): Promise<WalletModel> => {
    return dispatch(getOneWalletAction(id)).unwrap();
  }, [dispatch]);

  //
  // CREATE
  //
  const create = useCallback(async (wallet: WalletModel): Promise<WalletModel | null> => {
    return dispatch(createWalletAction(wallet)).unwrap();
  }, [dispatch]);

  //
  // UPDATE
  //
  const update = useCallback(async (wallet: WalletModel): Promise<WalletModel> => {
    return dispatch(updateWalletAction(wallet)).unwrap();
  }, [dispatch]);

  // RETURN
  return {
    fetchAll,
    fetchOne,
    create,
    update,
  };
};
