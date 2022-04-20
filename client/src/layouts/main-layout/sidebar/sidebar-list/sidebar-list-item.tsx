import { forwardRef } from 'react';

// router
import { Link } from 'react-router-dom';

// mui
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

// hooks
import { useMenu } from 'hooks/common';

// menu-items
import { IMenuItem } from 'menu-items';

// ==============================|| PROPS ||============================== //

interface SidebarListItemProps {
  item: IMenuItem;
}

// ==============================|| SIDEBAR LIST ITEM ||============================== //

export const SidebarListItem = (props: SidebarListItemProps) => {
  const { item } = props;

  //
  const theme = useTheme();

  //
  const { isMenuOpen } = useMenu();

  //
  const tooltipText = isMenuOpen ? '' : (item.tooltipText || '');

  // RENDER
  return (
    <Tooltip title={tooltipText}>
      <ListItemButton
        // eslint-disable-next-line react/jsx-props-no-spreading
        component={forwardRef<HTMLAnchorElement>((props1, ref) => <Link ref={ref} {...props1} to={item.to || '/'} />)}
        sx={{
          borderRadius: '12px',
          mb: 0.5,
          alignItems: 'flex-start',
          backgroundColor: 'inherit',
          py: 1.25,
          pl: isMenuOpen ? '24px' : 0,
        }}
      >

        {/* Icon */}
        <ListItemIcon
          sx={{
            my: 'auto',
            display: 'flex',
            // alignItems: 'center',
            justifyContent: 'center',
            minWidth: isMenuOpen ? 'fit-content' : `calc(${theme.spacing(8)} + 1px)`,
          }}
        >
          {item.icon}
        </ListItemIcon>

        {/* Text */}
        <ListItemText sx={{ fontSize: '0.875rem', ml: 1 }}>
          {item.title}
        </ListItemText>

      </ListItemButton>
    </Tooltip>
  );
};
