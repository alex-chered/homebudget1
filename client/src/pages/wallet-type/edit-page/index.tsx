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
import { WalletTypeModel } from 'types/models';

// settings
import { walletTypeOptions } from 'settings/section';

// aux.
import { EditForm } from '../edit-form';

// ==============================|| EDIT (WALLET TYPE) -> PAGE ||============================== //

export const EditPage = () => {
  // router
  const navigate = useNavigate();
  const { id = '' } = useParams<{ id?: string }>();

  // hooks
  const { getOne, clearCurrent } = useSection<WalletTypeModel>(walletTypeOptions);
  const { currentSelector } = useSectionSelectors<WalletTypeModel>(walletTypeOptions);

  // store
  const { current: currentWalletType } = useAppSelector(currentSelector);

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
    navigate('/wallet_types');
  };

  // RENDER
  return (
    <>
      <PageCaption
        text="Редактировать тип кошелька"
      />

      {/* Wallet Type */}
      {
        currentWalletType && (
          <EditForm
            mode="edit"
            walletType={currentWalletType}
            onCompleted={navigateToList}
            onClose={navigateToList}
          />
        )
      }

      {/* No currency */}
      {
        !currentWalletType && (
          <Typography variant="body1" sx={{ mt: 3 }}>
            По вашему запросу ничего не найдено.
          </Typography>
        )
      }

    </>
  );
};
