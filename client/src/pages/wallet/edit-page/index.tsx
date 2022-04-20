import { useEffect } from 'react';

// react router
import { useNavigate, useParams } from 'react-router-dom';

// mui
import { Typography } from '@mui/material';

// components
import { PageCaption } from 'components/base';

// store
import { useAppSelector } from 'store';

// hooks
import { useSection, useSectionSelectors } from 'hooks/section';

// types
import { WalletModel } from 'types/models';

// settings
import { walletOptions } from 'settings/section';

// aux.
import { EditForm } from '../edit-form';

// ==============================|| EDIT (WALLET) -> PAGE ||============================== //

export const EditPage = () => {
  // router
  const navigate = useNavigate();
  const { id = '' } = useParams<{ id?: string }>();

  // hooks
  const { getOne, clearCurrent } = useSection<WalletModel>(walletOptions);
  const { currentSelector } = useSectionSelectors<WalletModel>(walletOptions);

  // store
  const { current: currentWallet } = useAppSelector(currentSelector);

  // Try to fetch the required currency
  useEffect(() => {
    getOne(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // on unmounting clear current
  useEffect(() => {
    return () => clearCurrent();
  }, [clearCurrent]);

  //
  const navigateToList = () => {
    navigate('/wallets');
  };

  // RENDER
  return (
    <>
      <PageCaption
        text="Редактировать кошелек"
      />

      {/* WALLET */}
      {
        currentWallet && (
          <EditForm
            mode="edit"
            wallet={currentWallet}
            onCompleted={navigateToList}
            onClose={navigateToList}
          />
        )
      }

      {/* NO WALLET */}
      {
        !currentWallet && (
          <Typography variant="body1" sx={{ mt: 3 }}>
            По вашему запросу ничего не найдено.
          </Typography>
        )
      }

    </>
  );
};
