// react router
import { useNavigate } from 'react-router-dom';

// components
import { PageCaption } from 'components/base';

// aux.
import { EditForm } from '../edit-form';

// ==============================|| CREATE (WALLET) -> PAGE ||============================== //

export const CreatePage = () => {
  // router
  const navigate = useNavigate();

  //
  const navigateToList = () => {
    navigate('/wallets');
  };

  // RENDER
  return (
    <>
      <PageCaption
        text="Создать кошелек"
      />

      <EditForm
        mode="new"
        onCompleted={navigateToList}
        onClose={navigateToList}
      />
    </>
  );
};
