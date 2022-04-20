// router
import { Routes, Route } from 'react-router-dom';

// routes
import { RequireAuth } from 'routes';

// pages
import { ListPage } from './list-page';
import { CreatePage } from './create-page';
import { EditPage } from './edit-page';

// ==============================|| WALLET -> ROUTING ||============================== //

export const Wallet = () => (
  <Routes>

    {/* LIST */}
    <Route
      path="/"
      element={(
        <RequireAuth key="wallet-list">
          <ListPage />
        </RequireAuth>
      )}
    />

    {/* CREATE */}
    <Route
      path="/new"
      element={(
        <RequireAuth key="wallet-create">
          <CreatePage />
        </RequireAuth>
      )}
    />

    {/* EDIT */}
    <Route
      path="/:id"
      element={(
        <RequireAuth key="wallet-edit">
          <EditPage />
        </RequireAuth>
      )}
    />

  </Routes>
);
