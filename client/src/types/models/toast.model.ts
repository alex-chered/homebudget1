// mui
import { AlertColor } from '@mui/material';

// ==============================|| TOAST -> MODEL ||============================== //

export interface ToastModel {
  id: string;
  text: string;
  type: AlertColor;
}
