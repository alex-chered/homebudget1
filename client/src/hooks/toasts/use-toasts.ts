import { useCallback } from 'react';
// 3rd-party libraries
import { v4 as uuid } from 'uuid';
// mui
import { useMediaQuery, useTheme, AlertColor } from '@mui/material';
// store
import { useAppSelector, useAppDispatch } from 'store';
import {
  addToastAction,
  replaceToastAction,
  removeToastAction,
  dataSelector,
} from 'store/toasts';
// types
import { ToastModel } from 'types/models';

// HOOK
export const useToasts = () => {
  const dispatch = useAppDispatch();

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  // Get the toasts from the store
  const { toasts } = useAppSelector(dataSelector);

  // Function to add a toast with information type
  const toastInformation = useCallback((text: string) => {
    const toast: ToastModel = {
      id: uuid(),
      text,
      type: 'info',
    };

    if (isDesktop) {
      dispatch(addToastAction({ toast }));
    } else {
      dispatch(replaceToastAction({ toast }));
    }
  }, [dispatch, isDesktop]);

  // Function to add a toast with error type
  const toastError = useCallback((text: string) => {
    const toast: ToastModel = {
      id: uuid(),
      text,
      type: 'error',
    };

    if (isDesktop) {
      dispatch(addToastAction({ toast }));
    } else {
      dispatch(replaceToastAction({ toast }));
    }
  }, [dispatch, isDesktop]);

  // Function to add a toast with error type
  const toastSuccess = useCallback((text: string) => {
    const toast: ToastModel = {
      id: uuid(),
      text,
      type: 'success',
    };

    if (isDesktop) {
      dispatch(addToastAction({ toast }));
    } else {
      dispatch(replaceToastAction({ toast }));
    }
  }, [dispatch, isDesktop]);

  // Function to add a toast
  const toastAny = useCallback((text: string, type: AlertColor) => {
    const toast: ToastModel = {
      id: uuid(),
      text,
      type,
    };

    if (isDesktop) {
      dispatch(addToastAction({ toast }));
    } else {
      dispatch(replaceToastAction({ toast }));
    }
  }, [dispatch, isDesktop]);

  // Function to remove a toast by id
  const deleteToast = useCallback((id: string) => {
    dispatch(removeToastAction({ id }));
  }, [dispatch]);

  return {
    toasts,
    toastAny,
    toastInformation,
    toastError,
    toastSuccess,
    deleteToast,
  };
};
