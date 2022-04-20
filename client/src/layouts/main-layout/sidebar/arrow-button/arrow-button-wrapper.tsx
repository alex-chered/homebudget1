import { ReactNode } from 'react';

// mui
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// hooks
import { useMenu } from 'hooks/common';

// aux.
import { openedMixin, closedMixin } from 'layouts/main-layout/mixins';

// ==============================|| PROPS ||============================== //

interface ArrowButtonWrapperProps {
  children: ReactNode;
}

// ==============================|| COMPONENT ||============================== //

export const ArrowButtonWrapper = (props: ArrowButtonWrapperProps) => {
  const { children } = props;

  //
  const theme = useTheme();

  //
  const { isMenuOpen } = useMenu();

  // RENDER
  return (
    <Box
      sx={{
        position: 'fixed',
        top: theme.spacing(10),
        border: `1px solid ${theme.palette.divider}`,
        borderBottomRightRadius: '10px',
        borderTopRightRadius: '10px',
        borderLeft: 'none',
        bgcolor: 'common.white',
        ...(isMenuOpen && { ...openedMixin(theme, 'left') }),
        ...(!isMenuOpen && { ...closedMixin(theme, 'left') }),
      }}
    >
      {children}
    </Box>
  );
};
