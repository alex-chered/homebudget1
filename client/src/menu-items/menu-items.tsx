// mui
import {
  SpeedOutlined,
  EuroOutlined,
  FolderOpenOutlined,
  AccountBalanceWalletOutlined,
  TrendingDownOutlined,
  TrendingUpOutlined,
  AssessmentOutlined,
  CurrencyExchangeOutlined,
} from '@mui/icons-material';

// types
import { IMenuItemGroup } from './menu-item-types';

// ==============================|| MENU ITEMS ||============================== //

export const menuItems: IMenuItemGroup[] = [
  // 1. GENERAL
  {
    id: 'general',
    title: 'Основной раздел',
    children: [
      // 1.1. DESKTOP
      {
        id: 'desktop',
        title: 'Рабочий стол',
        to: '/',
        tooltipText: 'Рабочий стол',
        icon: <SpeedOutlined />,
      },
      // 1.2. TRANSACTIONS
      {
        id: 'transactions',
        title: 'Транзакции',
        to: '/transactions',
        tooltipText: 'Транзакции',
        icon: <CurrencyExchangeOutlined />,
      },
    ],
  },
  // 2. REFERENCES
  {
    id: 'references',
    title: 'Справочники',
    children: [
      // 2.1. CURRENCIES
      {
        id: 'currencies',
        title: 'Валюты',
        to: '/currencies',
        tooltipText: 'Валюты',
        icon: <EuroOutlined />,
      },
      // 2.2. WALLET TYPES
      {
        id: 'wallet_types',
        title: 'Типы кошельков',
        to: '/wallet_types',
        tooltipText: 'Типы кошельков',
        icon: <FolderOpenOutlined />,
      },
      // 2.3. WALLETS
      {
        id: 'wallets',
        title: 'Кошельки',
        to: '/wallets',
        tooltipText: 'Кошельки',
        icon: <AccountBalanceWalletOutlined />,
      },
      // 2.4. INCOMES
      {
        id: 'incomes',
        title: 'Статьи доходов',
        to: '/incomes',
        tooltipText: 'Статьи доходов',
        icon: <TrendingUpOutlined />,
      },
      // 2.5. EXPENSES
      {
        id: 'expenses',
        title: 'Статьи расходов',
        to: '/expenses',
        tooltipText: 'Статьи расходов',
        icon: <TrendingDownOutlined />,
      },
    ],
  },
  // 3. REPORTS
  {
    id: 'reports',
    title: 'Отчеты',
    children: [
      // 3.1. INCOMES REPORT
      {
        id: 'incomes_report',
        title: 'Отчет по доходам',
        to: '/incomesReport',
        tooltipText: 'Отчет по доходам',
        icon: <AssessmentOutlined />,
      },
      // 3.2. EXPENSES REPORT
      {
        id: 'expenses_report',
        title: 'Отчет по расходам',
        to: '/expensesReport',
        tooltipText: 'Отчет по расходам',
        icon: <AssessmentOutlined />,
      },
    ],
  },
];
