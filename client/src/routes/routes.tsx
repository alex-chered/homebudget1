// router
import { Routes, Route } from 'react-router-dom';

// layouts
import { MainLayout } from 'layouts';

// pages
import {
  HomePage,
  TransactionsPage,
  IncomesPage,
  ExpensesPage,
  AuthPage,
} from 'pages';
import { Currency } from 'pages/currency';
import { WalletType } from 'pages/wallet-type';
import { Wallet } from 'pages/wallet';

// aux.
import { RequireAuth } from './require-auth';
import { NotForAuth } from './not-for-auth';

// ==============================|| ROUTES ||============================== //

export const AllRoutes = () => {
  // RENDER
  return (
    <Routes>

      {/* MAIN */}
      <Route path="/" element={<MainLayout />}>

        {/* -> Home */}
        <Route
          index
          element={(
            <RequireAuth>
              <HomePage />
            </RequireAuth>
          )}
        />

        {/* -> Transactions */}
        <Route
          path="/transactions"
          element={(
            <RequireAuth>
              <TransactionsPage />
            </RequireAuth>
          )}
        />

        {/* -> Currency */}
        <Route
          path="/currencies/*"
          element={<Currency />}
        />

        {/* -> Wallet Types */}
        <Route
          path="/wallet_types/*"
          element={<WalletType />}
        />

        {/* -> Wallets */}
        <Route
          path="/wallets/*"
          element={<Wallet />}
        />

        {/* -> Incomes */}
        <Route
          path="/incomes"
          element={(
            <RequireAuth>
              <IncomesPage />
            </RequireAuth>
          )}
        />

        {/* -> Expenses */}
        <Route
          path="/expenses"
          element={(
            <RequireAuth>
              <ExpensesPage />
            </RequireAuth>
          )}
        />

      </Route>

      {/* AUTH */}
      <Route
        path="/auth"
        element={(
          <NotForAuth>
            <AuthPage />
          </NotForAuth>
        )}
      />

    </Routes>
  );
};
