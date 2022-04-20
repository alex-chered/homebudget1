// react router
import { useNavigate } from 'react-router-dom';

// components
import { PageCaption } from 'components/base';

// aux.
import { EditForm } from '../edit-form';

// ==============================|| CREATE (WALLET TYPE) -> PAGE ||============================== //

export const CreatePage = () => {
  // router
  const navigate = useNavigate();

  //
  const navigateToList = () => {
    navigate('/wallet_types');
  };

  // RENDER
  return (
    <>
      <PageCaption
        text="Создать тип кошелька"
      />

      <EditForm
        mode="new"
        onCompleted={navigateToList}
        onClose={navigateToList}
      />
    </>
  );
};
