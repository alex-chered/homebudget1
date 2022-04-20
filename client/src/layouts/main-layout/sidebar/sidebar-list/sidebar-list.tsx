// mui
import Box from '@mui/material/Box';

// hooks
import { useMenu } from 'hooks/common';

// menu-items
import { menuItems } from 'menu-items';

// aux.
import { SidebarListGroup } from './sidebar-list-group';

// ==============================|| SIDEBAR LIST ||============================== //

export const SideberList = () => {
  //
  const { isMenuOpen } = useMenu();

  // RENDER
  return (
    <Box
      sx={{
        overflowX: 'hidden',
        overflowY: 'hidden',
        px: isMenuOpen ? 2 : 0,
        '&:hover': {
          overflowY: 'auto',
        },
      }}
    >
      {
        menuItems.map((item) => (
          <SidebarListGroup key={item.id} item={item} />
        ))
      }
    </Box>
  );
};
