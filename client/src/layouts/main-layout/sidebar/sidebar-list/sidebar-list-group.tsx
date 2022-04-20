// mui
import {
  List,
  ListSubheader,
  Divider,
} from '@mui/material';

// menu-items
import { IMenuItemGroup } from 'menu-items';

// hooks
import { useMenu } from 'hooks/common';

// aux.
import { SidebarListItem } from './sidebar-list-item';

// ==============================|| PROPS ||============================== //

interface SidebarListGroupProps {
  item: IMenuItemGroup;
}

// ==============================|| SIDEBAR LIST GROUP ||============================== //

export const SidebarListGroup = (props: SidebarListGroupProps) => {
  const { item } = props;

  //
  const { isMenuOpen } = useMenu();

  // RENDER
  return (
    <>
      <List>

        {/* List header */}
        <ListSubheader
          sx={{
            fontSize: '1rem',
            letterSpacing: '0.1rem',
            color: '#212121',
          }}
        >
          { isMenuOpen ? item.title : '' }
        </ListSubheader>

        {/* List items */}
        {
          item.children?.map((subItem) => (
            <SidebarListItem key={subItem.id} item={subItem} />
          ))
        }

      </List>

      <Divider />
    </>
  );
};
