import { ReactNode } from 'react';

// mui
import { Toolbar, Drawer as MuiDrawer } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// hooks
import { useMenu } from 'hooks/common';

// const
import { DRAWER_WIDTH } from 'const';

// aux.
import { openedMixin, closedMixin } from 'layouts/main-layout/mixins';

// ==============================|| PROPS ||============================== //

interface DrawerProps {
  children: ReactNode;
}

// ==============================|| COMPONENT ||============================== //

export const Drawer = (props: DrawerProps) => {
  const { children } = props;

  //
  const theme = useTheme();

  //
  const { isMenuOpen } = useMenu();

  // RENDER
  return (
    <MuiDrawer
      variant="permanent"
      sx={{
        position: 'relative',
        width: DRAWER_WIDTH,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(isMenuOpen && {
          ...openedMixin(theme, 'width'),
          '& .MuiDrawer-paper': openedMixin(theme, 'width'),
        }),
        ...(!isMenuOpen && {
          ...closedMixin(theme, 'width'),
          '& .MuiDrawer-paper': closedMixin(theme, 'width'),
        }),
      }}
    >
      {/* Empty space */}
      <Toolbar />

      {/* Children */}
      {children}
    </MuiDrawer>
  );
};
