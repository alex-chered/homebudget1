import { useState } from 'react';

// mui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// store
import { useAppSelector } from 'store';
import { useAuth, authSelectors } from 'store/auth';

// components
import { Arrow } from 'components/base';

// get selectors
const { userSelector } = authSelectors;

// ==============================|| COMPONENT ||============================== //

export const Header = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  // store
  const { user } = useAppSelector(userSelector);
  const { logout } = useAuth();

  // MENU -> OPEN
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  // MENU -> CLOSE
  const handleCloseMenu = () => {
    setAnchorElUser(null);
  };

  // MENU -> CLICK "CLOSE"
  const handleClickCloseMenu = () => {
    logout();
    setAnchorElUser(null);
  };

  // RENDER
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>

        <MonetizationOnIcon
          fontSize="large"
          sx={{ mr: 2 }}
        />

        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" color="inherit" noWrap>
            Control your money
          </Typography>
        </Box>
        {
          user && (
            <Box sx={{ display: 'flex' }}>
              <IconButton
                color="inherit"
                onClick={handleOpenMenu}
                sx={{ p: 0 }}
              >
                <AccountCircleIcon />
                <Box
                  sx={{
                    mx: 1,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Arrow />
                </Box>
              </IconButton>

              <Menu
                sx={{ mt: '30px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseMenu}
              >
                <Box sx={{ width: 300 }}>
                  <MenuItem onClick={handleClickCloseMenu}>
                    <LogoutIcon sx={{ mr: 1 }} />
                    <Typography textAlign="center">Выход</Typography>
                  </MenuItem>
                </Box>
              </Menu>
            </Box>
          )
        }

      </Toolbar>
    </AppBar>
  );
};
