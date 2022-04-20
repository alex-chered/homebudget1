import { useCallback } from 'react';

// store
import { useAppDispatch, useAppSelector } from 'store';
import { setMenuAction, commonSelector } from 'store/common';

// ==============================|| USE MENU ||============================== //

export const useMenu = () => {
  const dispatch = useAppDispatch();

  const { isMenuOpen } = useAppSelector(commonSelector);

  // -> SET MENU
  const setMenu = useCallback((opened: boolean) => {
    dispatch(setMenuAction({ opened }));
  }, [dispatch]);

  // -> TOGGLE MENU
  const toggleMenu = useCallback(() => {
    dispatch(setMenuAction({ opened: !isMenuOpen }));
  }, [dispatch, isMenuOpen]);

  // RETURN
  return {
    isMenuOpen,
    setMenu,
    toggleMenu,
  };
};
