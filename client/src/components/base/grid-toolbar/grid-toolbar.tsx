// mui
import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid';
import {
  Divider,
  Tooltip,
} from '@mui/material';
import {
  AddCircle as AddCircleIcon,
  Cached as CachedIcon,
} from '@mui/icons-material';

// const
import { DATA_GRID_TOOLBAR_HEIGHT } from 'const';

// aux.
import { GridToolbarButton } from './grid-toolbar-button';

// ==============================|| PROPS ||============================== //

interface GridToolbarProps {
  addAvailable?: boolean;
  addTooltipText?: string;
  updateTooltipText?: string;
  onClickAdd?: () => void;
  onClickUpdate?: () => void;
}

// ==============================|| GRID TOOLBAR ||============================== //

export const GridToolbar = (props: GridToolbarProps) => {
  const {
    addAvailable = true,
    addTooltipText = 'Добавить',
    updateTooltipText = 'Обновить',
    onClickAdd,
    onClickUpdate,
  } = props;

  // RENDER
  return (
    <>
      <GridToolbarContainer
        style={{
          height: DATA_GRID_TOOLBAR_HEIGHT,
          gap: 8,
        }}
      >

        {/* Add */}
        {
          addAvailable && (
            <Tooltip title={addTooltipText}>
              <GridToolbarButton
                text="Добавить"
                icon={<AddCircleIcon />}
                onClick={onClickAdd}
              />
            </Tooltip>
          )
        }

        {
          addAvailable && (
            <Divider orientation="vertical" flexItem />
          )
        }

        {/* Columns */}
        <Tooltip title="Настроить колонки">
          <GridToolbarColumnsButton />
        </Tooltip>

        {/* Filters */}
        <GridToolbarFilterButton />

        {/* Rows size */}
        <Tooltip title="Размер строк">
          <GridToolbarDensitySelector />
        </Tooltip>

        <Divider orientation="vertical" flexItem />

        {/* Update */}
        <Tooltip title={updateTooltipText}>
          <GridToolbarButton
            text="Обновить"
            icon={<CachedIcon />}
            onClick={onClickUpdate}
          />
        </Tooltip>

      </GridToolbarContainer>

      <Divider sx={{ borderColor: 'grey.500' }} />
    </>
  );
};
