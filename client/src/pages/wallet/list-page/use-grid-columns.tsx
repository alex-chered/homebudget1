// react router
import { useNavigate } from 'react-router-dom';

// mui
import { Stack } from '@mui/material';
import { GridColDef, GridRenderCellParams, GridValueGetterParams } from '@mui/x-data-grid';

// components
import { GridActionButton } from 'components/base';

// hooks
import { useToasts } from 'hooks/toasts';

// ==============================|| HOOK ||============================== //

export const useGridColumns = () => {
  // router
  const navigate = useNavigate();

  // hooks
  const { toastInformation } = useToasts();

  //
  const renderActions = (props: GridRenderCellParams) => {
    const { id } = props;

    return (
      <Stack direction="row" spacing={1}>

        <GridActionButton
          mode="edit"
          tooltipText="Редактировать"
          onClick={() => navigate(`/wallets/${id}`)}
        />

        <GridActionButton
          mode="delete"
          tooltipText="Удалить"
          onClick={() => toastInformation('Пока не реализовано')}
        />

      </Stack>
    );
  };

  const getWalletType = (params: GridValueGetterParams): string => {
    return params.row.walletType.name;
  };

  const getCurrency = (params: GridValueGetterParams): string => {
    return params.row.currency.name;
  };

  // Define columns
  const columns: GridColDef[] = [
    // ID
    {
      field: 'id',
      headerName: 'ID',
      type: 'number',
    },
    // NAME
    {
      field: 'name',
      headerName: 'Наименование',
      hideable: false,
      flex: 1,
    },
    // WALLET TYPE
    {
      field: 'walletType',
      headerName: 'Тип кошелька',
      hideable: false,
      flex: 1,
      valueGetter: getWalletType,
    },
    // CURRENCY
    {
      field: 'currency',
      headerName: 'Валюта',
      hideable: false,
      flex: 1,
      valueGetter: getCurrency,
    },
    // ACTIONS
    {
      field: 'actions',
      headerName: '',
      type: 'singleSelect',
      width: 250,
      renderCell: renderActions,
    },
  ];

  // RETURN
  return { columns };
};
