// mui
import { SxProps } from '@mui/material';

// ==============================|| HOOK ||============================== //

export const useSx = () => {
  const menuProps: SxProps = {
    width: 1,
    mt: 2,
  };

  const tabsProps: SxProps = {
    width: 1,
  };

  const tabProps: SxProps = {
    width: 0.5,
    borderBottom: 1,
    borderColor: 'divider',
  };

  // RETURN
  return {
    menuProps,
    tabsProps,
    tabProps,
  };
};
