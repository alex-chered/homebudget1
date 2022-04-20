// router
import { Routes, Route } from 'react-router-dom';

// routes
import { RequireAuth } from 'routes';

// pages
import { CurrenciesPage } from './currencies-page';
import { CreateCurrencyPage } from './create-currency-page';
import { EditCurrencyPage } from './edit-currency-page';

// ==============================|| CURRENCY -> ROUTING ||============================== //

export const Currency = () => (
  <Routes>

    {/* LIST */}
    <Route
      path="/"
      element={(
        <RequireAuth key="currency-list">
          <CurrenciesPage />
        </RequireAuth>
      )}
    />

    {/* CREATE */}
    <Route
      path="/new"
      element={(
        <RequireAuth key="currency-create">
          <CreateCurrencyPage />
        </RequireAuth>
      )}
    />

    {/* EDIT */}
    <Route
      path="/:id"
      element={(
        <RequireAuth key="currency-edit">
          <EditCurrencyPage />
        </RequireAuth>
      )}
    />

  </Routes>
);
