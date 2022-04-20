// mui
import { Box } from '@mui/material';

// hooks
import { useMenu } from 'hooks/common';

// const
import { DRAWER_WIDTH } from 'const';

// aux.
import { ArrowButton } from './arrow-button';
import { Drawer } from './drawer';
import { SideberList } from './sidebar-list';

// ==============================|| COMPONENT ||============================== //

export const Sidebar = () => {
  const { toggleMenu } = useMenu();

  // RENDER
  return (
    <Box sx={{ width: DRAWER_WIDTH }}>

      {/* The button to show / hide the drawer */}
      <ArrowButton onClick={toggleMenu} />

      {/* Drawer */}
      <Drawer>
        <SideberList />
      </Drawer>

    </Box>
  );
};
