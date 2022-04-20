import { useCallback } from 'react';

// types
import { WalletTypeModel } from 'types/models';

// store
import { useAppDispatch } from 'store';
import {
  getAllWalletTypesAction,
  getWalletWithFilterAction,
  getOneWalletTypeAction,
  createWalletTypeAction,
  updateWalletTypeAction,
} from './actions';

// ==============================|| USE WALLET TYPE ||============================== //

export const useWalletType = () => {
  const dispatch = useAppDispatch();

  //
  // GET ALL
  //
  const fetchAll = useCallback(async (): Promise<WalletTypeModel[]> => {
    return dispatch(getAllWalletTypesAction()).unwrap();
  }, [dispatch]);

  //
  // GET WITH FILTER
  //
  const fetchWithFilter = useCallback(async (name: string): Promise<WalletTypeModel[]> => {
    return dispatch(getWalletWithFilterAction(name)).unwrap();
  }, [dispatch]);

  //
  // GET ONE
  //
  const fetchOne = useCallback(async (id: string | number): Promise<WalletTypeModel> => {
    return dispatch(getOneWalletTypeAction(id)).unwrap();
  }, [dispatch]);

  //
  // CREATE
  //
  const create = useCallback(async (walletType: WalletTypeModel): Promise<WalletTypeModel> => {
    return dispatch(createWalletTypeAction(walletType)).unwrap();
  }, [dispatch]);

  //
  // UPDATE
  //
  const update = useCallback(async (walletType: WalletTypeModel): Promise<WalletTypeModel> => {
    return dispatch(updateWalletTypeAction(walletType)).unwrap();
  }, [dispatch]);

  // RETURN
  return {
    fetchAll,
    fetchWithFilter,
    fetchOne,
    create,
    update,
  };
};
