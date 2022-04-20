// router
import { Routes, Route } from 'react-router-dom';

// routes
import { RequireAuth } from 'routes';

// pages
import { ListPage } from './list-page';
import { CreatePage } from './create-page';
import { EditPage } from './edit-page';

// ==============================|| WALLET TYPE -> ROUTING ||============================== //

export const WalletType = () => (
  <Routes>

    {/* LIST */}
    <Route
      path="/"
      element={(
        <RequireAuth key="wallet-type-list">
          <ListPage />
        </RequireAuth>
      )}
    />

    {/* CREATE */}
    <Route
      path="/new"
      element={(
        <RequireAuth key="wallet-type-create">
          <CreatePage />
        </RequireAuth>
      )}
    />

    {/* EDIT */}
    <Route
      path="/:id"
      element={(
        <RequireAuth key="wallet-type-edit">
          <EditPage />
        </RequireAuth>
      )}
    />

  </Routes>
);
