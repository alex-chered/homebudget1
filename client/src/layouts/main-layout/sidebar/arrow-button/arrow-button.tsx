// mui
import { IconButton } from '@mui/material';
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';

// hooks
import { useMenu } from 'hooks/common';

// aux.
import { ArrowButtonWrapper } from './arrow-button-wrapper';

// ==============================|| PROPS ||============================== //

interface ArrowButtonProps {
  onClick?: () => void;
}

// ==============================|| COMPONENT ||============================== //

export const ArrowButton = (props: ArrowButtonProps) => {
  const { onClick } = props;

  //
  const { isMenuOpen } = useMenu();

  // RENDER
  return (
    <ArrowButtonWrapper>
      <IconButton sx={{ py: 1, px: 0 }} onClick={onClick}>
        { isMenuOpen ? <ChevronLeftIcon /> : <ChevronRightIcon /> }
      </IconButton>
    </ArrowButtonWrapper>
  );
};
