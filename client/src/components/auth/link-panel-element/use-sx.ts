// mui
import { SxProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// ==============================|| HOOK ||============================== //

export const useSx = () => {
  const theme = useTheme();

  const linkPanelElementProps: SxProps = {

    display: 'flex',
    justifyContent: 'center',

    // extra-small
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    // small
    [theme.breakpoints.up('sm')]: {
      gap: 1,
    },
  };

  // RETURN
  return { linkPanelElementProps };
};
