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
import { WalletTypeModel } from 'types/models';

// settings
import { walletTypeOptions } from 'settings/section';

// selectors
const { userSelector } = authSelectors;

// ==============================|| TOOLBAR WALLET TYPE ||============================== //

export const ToolbarWalletType = () => {
  // router
  const navigate = useNavigate();

  // hooks
  const { getAll } = useSection<WalletTypeModel>(walletTypeOptions);
  const { loadingSelector } = useSectionSelectors<WalletTypeModel>(walletTypeOptions);

  // store
  const { loading } = useAppSelector(loadingSelector);
  const { user } = useAppSelector(userSelector);

  // EVENT HANDLER => CLICK "ADD"
  const onClickAddHandler = () => {
    navigate('/wallet_types/new');
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
      addTooltipText="Добавить тип кошелька"
      addAvailable={user?.isAdmin || false}
      onClickAdd={onClickAddHandler}
      onClickUpdate={onClickUpdateHandler}
    />
  );
};
