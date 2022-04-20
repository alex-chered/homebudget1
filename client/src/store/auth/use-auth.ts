import { useCallback } from 'react';

// types
import { UserModel } from 'types/models';
import { ActionRejectedError, IRejectedValue } from 'types/errors';

// services
import { removeToken } from 'services/token';

// store
import { useAppDispatch } from 'store';
import {
  registerAction,
  loginAction,
  getUserAction,
  getUserCountAction,
  logoutAction,
} from './actions';

// ==============================|| USE AUTH ||============================== //

export const useAuth = () => {
  const dispatch = useAppDispatch();

  //
  // REGISTER
  //
  const registerUser = useCallback(async (user: UserModel): Promise<UserModel> => {
    return dispatch(registerAction(user))
      .unwrap()
      .catch((err: unknown) => {
        const message = (err as IRejectedValue).error;
        throw new ActionRejectedError(message);
      });
  }, [dispatch]);

  //
  // LOGIN
  //
  const loginUser = useCallback(async (user: UserModel): Promise<UserModel> => {
    return dispatch(loginAction(user))
      .unwrap()
      .catch((err: unknown) => {
        const message = (err as IRejectedValue).error;
        throw new ActionRejectedError(message);
      });
  }, [dispatch]);

  //
  // GET USER
  //
  const getUser = useCallback(async (): Promise<UserModel> => {
    return dispatch(getUserAction())
      .unwrap()
      .catch((err: unknown) => {
        const message = (err as IRejectedValue).error;
        throw new ActionRejectedError(message);
      });
  }, [dispatch]);

  //
  // GET USER COUNT
  //
  const getUserCount = useCallback(async (): Promise<void> => {
    dispatch(getUserCountAction());
  }, [dispatch]);

  //
  // LOGOUT
  //
  const logout = useCallback((): void => {
    removeToken();
    dispatch(logoutAction());
  }, [dispatch]);

  // RETURN
  return {
    registerUser,
    loginUser,
    getUser,
    getUserCount,
    logout,
  };
};
