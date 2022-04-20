// router
import { Outlet } from 'react-router-dom';

// mui
import { Box } from '@mui/material';

// aux.
import { Header } from './header';
import { Sidebar } from './sidebar';
import { Main } from './main';

// ==============================|| MAIN LAYOUT ||============================== //

export const MainLayout = () => {
  // RENDER
  return (
    <Box sx={{ display: 'flex' }}>

      {/* Header */}
      <Header />

      {/* Sidebar */}
      <Sidebar />

      {/* Children */}
      <Main>
        <Outlet />
      </Main>

    </Box>
  );
};
