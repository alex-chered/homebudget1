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

// settings
import { currencyOptions } from 'settings/section';

// types
import { CurrencyModel } from 'types/models';

// aux.
import { EditCurrencyForm } from '../edit-currency-form';

// ==============================|| EDIT CURRENCY PAGE ||============================== //

export const EditCurrencyPage = () => {
  // router
  const navigate = useNavigate();
  const { id = '' } = useParams<{ id?: string }>();

  // hooks
  const { getOne, clearCurrent } = useSection<CurrencyModel>(currencyOptions);
  const { currentSelector } = useSectionSelectors<CurrencyModel>(currencyOptions);

  // store
  const { current: currentCurrency } = useAppSelector(currentSelector);

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
    navigate('/currencies');
  };

  // RENDER
  return (
    <>
      <PageCaption
        text="Редактировать валюту"
      />

      {/* Currency */}
      {
        currentCurrency && (
          <EditCurrencyForm
            mode="edit"
            currency={currentCurrency}
            onCompleted={navigateToList}
            onClose={navigateToList}
          />
        )
      }

      {/* No currency */}
      {
        !currentCurrency && (
          <Typography variant="body1" sx={{ mt: 3 }}>
            По вашему запросу ничего не найдено.
          </Typography>
        )
      }

    </>
  );
};
