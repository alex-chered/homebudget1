import { useMemo } from 'react';

// react router
import { useNavigate } from 'react-router-dom';

// mui
import { Stack } from '@mui/material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

// components
import { GridActionButton } from 'components/base';

// store
import { useAppSelector } from 'store';
import { authSelectors } from 'store/auth';

// hooks
import { useToasts } from 'hooks/toasts';

// const
import { DATA_GRID_COLUMN_ACTIONS_WIDTH } from 'const';

// selectors
const { userSelector } = authSelectors;

// ==============================|| CURRENCIES -> COLUMNS ||============================== //

export const useGridColumns = () => {
  // router
  const navigate = useNavigate();

  // hooks
  const { toastInformation } = useToasts();

  // store
  const { user } = useAppSelector(userSelector);

  //
  // FORM COLUMNS
  //
  const columns: GridColDef[] = useMemo((): GridColDef[] => {
    // define function to render the column with actions
    const renderActions = (props: GridRenderCellParams) => {
      const { id } = props;

      return (
        <Stack direction="row" spacing={1}>
          <GridActionButton
            mode="edit"
            tooltipText="Редактировать"
            onClick={() => navigate(`/currencies/${id}`)}
          />

          <GridActionButton
            mode="delete"
            tooltipText="Удалить"
            onClick={() => toastInformation('Пока не реализовано')}
          />
        </Stack>
      );
    };

    // define "base" columns
    const data: GridColDef[] = [
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
        width: 200,
      },
      // FULL NAME
      {
        field: 'fullName',
        headerName: 'Полное наименование',
        hideable: false,
        flex: 1,
      },
    ];

    // add "actions" columns, if it is allowed
    if (user?.isAdmin) {
      data.push({
        field: 'actions',
        headerName: '',
        type: 'singleSelect',
        width: DATA_GRID_COLUMN_ACTIONS_WIDTH,
        renderCell: renderActions,
      });
    }

    // return
    return data;
  }, [navigate, toastInformation, user?.isAdmin]);

  // RETURN
  return { columns };
};
