import { ReactNode } from 'react';

// mui
import { Box } from '@mui/material';

// ==============================|| PROPS ||============================== //

interface EditFormTopProps {
  children: ReactNode;
}

// ==============================|| EDIT FORM TOP ||============================== //

export const EditFormTop = (props: EditFormTopProps) => {
  const { children } = props;

  // RENDER
  return (
    <Box
      sx={{
        width: 1,
        display: 'flex',
        gap: 2,
      }}
    >
      {children}
    </Box>
  );
};
