// router
import { useNavigate } from 'react-router-dom';

// components
import { GridToolbar } from 'components/base';

// store
import { useAppSelector } from 'store';
import { authSelectors } from 'store/auth';

// hooks
import { useSection, useSectionSelectors } from 'hooks/section';

// types
import { CurrencyModel } from 'types/models';

// settings
import { currencyOptions } from 'settings/section';

// selectors
const { userSelector } = authSelectors;

// ==============================|| TOOLBAR CURRENCY ||============================== //

export const ToolbarCurrency = () => {
  // router
  const navigate = useNavigate();

  // hooks
  const { getAll } = useSection<CurrencyModel>(currencyOptions);
  const { loadingSelector } = useSectionSelectors<CurrencyModel>(currencyOptions);

  // store
  const { loading } = useAppSelector(loadingSelector);
  const { user } = useAppSelector(userSelector);

  // EVENT HANDLER => CLICK "ADD"
  const onClickAddHandler = () => {
    navigate('/currencies/new');
  };

  // EVENT HANDLER => CLICK "UPDATE"
  const onClickUpdateHandler = () => {
    if (loading) {
      return;
    }
    getAll();
  };

  // RENDER
  return (
    <GridToolbar
      addTooltipText="Добавить валюту"
      addAvailable={user?.isAdmin || false}
      onClickAdd={onClickAddHandler}
      onClickUpdate={onClickUpdateHandler}
    />
  );
};
