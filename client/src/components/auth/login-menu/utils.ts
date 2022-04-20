import { LoginMenuItemDataType } from './login-menu-item-data.type';

// ==============================|| UTILS ||============================== //

export const computeActiveTab = (tabNumber: number): LoginMenuItemDataType => {
  if (tabNumber === 1) {
    return 'register';
  }
  return 'login';
};

export const computeActiveTabNumber = (tab: LoginMenuItemDataType): number => {
  if (tab === 'register') {
    return 1;
  }
  return 0;
};
