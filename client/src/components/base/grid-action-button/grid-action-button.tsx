// mui
import { Chip, Tooltip } from '@mui/material';
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// ==============================|| PROPS ||============================== //

interface GridActionButtonProps {
  mode?: 'delete' | 'edit';
  tooltipText?: string;
  onClick?: () => void;
}

// ==============================|| STYLED CHIP ||============================== //

const StyledChip = styled(Chip)(({ theme }) => ({
  justifyContent: 'left',
  backgroundColor: 'transparent',
  '& .icon': {
    color: 'inherit',
  },
  '&.edit': {
    color: theme.palette.success.dark,
    border: `1px solid ${theme.palette.success.main}`,
  },
  '&.delete': {
    color: theme.palette.error.dark,
    border: `1px solid ${theme.palette.error.main}`,
  },
  '&:hover': {
    cursor: 'pointer',
  },
}));

// ==============================|| GRID ACTION BUTTON ||============================== //

export const GridActionButton = (props: GridActionButtonProps) => {
  const { mode = 'delete', tooltipText = '', onClick } = props;

  // Define an icon and label for the element
  let icon = <DeleteIcon className="icon" />;
  let label = 'Удалить';

  if (mode === 'edit') {
    icon = <EditIcon className="icon" />;
    label = 'Редактировать';
  }

  // RENDER
  return (
    <Tooltip title={tooltipText}>
      <StyledChip
        className={mode}
        icon={icon}
        size="small"
        label={label}
        onClick={onClick}
      />
    </Tooltip>
  );
};
