import { ReactNode } from 'react';

// ==============================|| MENU ITEM -> INTERFACE ||============================== //

export interface IMenuItem {
  id: string;
  title: string;
  icon?: ReactNode;
  to: string;
  tooltipText?: string;
}

// ==============================|| MENU ITEM GROUP -> INTERFACE ||============================== //

export interface IMenuItemGroup {
  id: string;
  title: string;
  children: IMenuItem[];
}
