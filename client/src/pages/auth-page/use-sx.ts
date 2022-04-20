// mui
import { SxProps } from '@mui/material';

// ==============================|| HOOK ||============================== //

export const useSx = () => {
  // const theme = useTheme();

  // Container
  const containerProps: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 8,
  };

  // Avatar
  const avatarProps: SxProps = {
    bgcolor: 'primary.main',
    width: 56,
    height: 56,
  };

  // Lock icon
  const lockIconProps: SxProps = {
    fontSize: 36,
  };

  // Login (or register)
  const loginProps = (show: boolean): SxProps => {
    const props: SxProps = {
      mt: 3,
    };

    if (!show) {
      props.display = 'none';
    }

    return props;
  };

  // Link panel
  const linkPanelProps: SxProps = {
    mt: 3,
  };

  // RETURN
  return {
    containerProps,
    avatarProps,
    lockIconProps,
    loginProps,
    linkPanelProps,
  };
};
