// react-router
import { Outlet } from 'react-router-dom';

// mui
import { Container, Avatar } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';

// ==============================|| AUTH LAYOUT ||============================== //

export const AuthLayout = () => {
  // RENDER
  return (
    // RENDER
    <Container
      fixed
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 8,
      }}
    >
      {/* Avatar */}
      <Avatar
        sx={{
          bgcolor: 'primary.main',
          width: 56,
          height: 56,
        }}
      >
        <LockOutlined
          sx={{
            fontSize: 36,
          }}
        />
      </Avatar>

      <Outlet />

    </Container>
  );
};
