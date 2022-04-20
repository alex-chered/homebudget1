// router
import { useNavigate } from 'react-router-dom';

// app-config
import { WALLET_BASE_URL } from 'app-config';

// components
import { GridToolbar } from 'components/base';

// hooks
import { useSection } from 'hooks/section';

// types
import { WalletModel } from 'types/models';

// settings
import { walletOptions } from 'settings/section';

// ==============================|| TOOLBAR WALLET ||============================== //

export const ToolbarWallet = () => {
  // router
  const navigate = useNavigate();

  // hooks
  const { getAll } = useSection<WalletModel>(walletOptions);

  // EVENT HANDLER => CLICK "ADD"
  const onClickAddHandler = () => {
    navigate(`/${WALLET_BASE_URL}/new`);
  };

  // EVENT HANDLER => CLICK "UPDATE"
  const onClickUpdateHandler = () => {
    getAll();
  };

  // RENDER
  return (
    <GridToolbar
      addTooltipText="Добавить кошелек"
      onClickAdd={onClickAddHandler}
      onClickUpdate={onClickUpdateHandler}
    />
  );
};
