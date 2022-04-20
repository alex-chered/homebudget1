// mui
import { useTheme } from '@mui/material/styles';
import { SxProps } from '@mui/material';

// ==============================|| HOOK ||============================== //

export const useSx = () => {
  const theme = useTheme();

  const linkPanelprops: SxProps = {
    width: 1,
    display: 'grid',

    // extra-small
    [theme.breakpoints.down('sm')]: {
      rowGap: 2.5,
    },
    // small
    [theme.breakpoints.up('sm')]: {
      rowGap: 2,
    },
  };

  // RETURN
  return { linkPanelprops };
};
