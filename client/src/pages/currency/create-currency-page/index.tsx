// react router
import { useNavigate } from 'react-router-dom';

// components
import { PageCaption } from 'components/base';

// aux.
import { EditCurrencyForm } from '../edit-currency-form';

// ==============================|| CREATE CURRENCY PAGE ||============================== //

export const CreateCurrencyPage = () => {
  // router
  const navigate = useNavigate();

  //
  const navigateToList = () => {
    navigate('/currencies');
  };

  // RENDER
  return (
    <>
      <PageCaption
        text="Создать валюту"
      />

      <EditCurrencyForm
        mode="new"
        onCompleted={navigateToList}
        onClose={navigateToList}
      />
    </>
  );
};
