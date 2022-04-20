import { ReactNode } from 'react';

// mui
import { Box, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// store
import { useMenu } from 'hooks/common';

// const
import { DRAWER_WIDTH } from 'const';

// ==============================|| PROPS ||============================== //

interface MainProps {
  children: ReactNode;
}

// ==============================|| MAIN ||============================== //

export const Main = (props: MainProps) => {
  const { children } = props;

  //
  const { isMenuOpen } = useMenu();

  //
  const theme = useTheme();

  // RENDER
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        // mt: 1,
        py: 2,
        pr: 2,
        pl: 4,
        ml: isMenuOpen ? 0 : `calc(${theme.spacing(8)} + 1px - ${DRAWER_WIDTH}px)`,
      }}
    >
      <Toolbar />
      {children}
    </Box>
  );
};
