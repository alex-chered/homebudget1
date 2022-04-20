import { FormEvent, ReactNode } from 'react';

// mui
import { Box, SxProps } from '@mui/material';

// ==============================|| PROPS ||============================== //

interface AuthFormProps {
  children: ReactNode;
  sx?: SxProps;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

// ==============================|| COMPONENT ||============================== //

export const AuthForm = (props: AuthFormProps) => {
  const { children, sx = {}, onSubmit } = props;

  // RENDER
  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      noValidate
      sx={{
        width: 1,
        display: 'grid',
        rowGap: 1,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
