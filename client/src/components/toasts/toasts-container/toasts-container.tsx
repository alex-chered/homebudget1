// mui
import { Box, useTheme } from '@mui/material';

// hooks
import { useToasts } from 'hooks/toasts';

// components
import { Toast } from 'components/toasts';

// ==============================|| COMPONENT ||============================== //

export const ToastsContainer = () => {
  const { toasts, deleteToast } = useToasts();

  const theme = useTheme();

  // RENDER
  return (
    <Box
      sx={{
        position: 'fixed',
        display: 'flex',
        flexFlow: 'column wrap',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        gap: 2,
        zIndex: 200,

        [theme.breakpoints.down('lg')]: {
          top: 10,
          left: 0,
          width: 1,

          py: 0,
          px: 1,
        },
        [theme.breakpoints.up('lg')]: {
          top: 100,
          right: 50,
          width: 500,

          padding: 0,
        },
      }}
    >
      {
        toasts.map((item) => (
          <Toast
            key={item.id}
            toast={item}
            onClosed={deleteToast}
          />
        ))
      }
    </Box>
  );
};
