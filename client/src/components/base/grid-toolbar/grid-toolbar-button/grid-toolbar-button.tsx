/* eslint-disable react/jsx-props-no-spreading */

// I did it by analogy with the source (GridToolbarColumnsButton )

import { forwardRef } from 'react';

// mui
import { ButtonProps } from '@mui/material/Button';

// mui => x-data-grid
import { useGridRootProps } from '@mui/x-data-grid/hooks/utils/useGridRootProps';

// ==============================|| PROPS ||============================== //

interface GridToolbarButtonProps extends ButtonProps {
  text: string;
  icon: JSX.Element;
  onClick?: () => void;
}

// ==============================|| GRID TOOLBAR ADD BUTTON ||============================== //

export const GridToolbarButton = forwardRef<HTMLButtonElement, GridToolbarButtonProps>(
  (props, ref) => {
    const {
      onClick,
      text,
      icon,
      ...other
    } = props;
    const rootProps = useGridRootProps();

    // Disable the button if the corresponding is disabled
    if (rootProps.disableColumnSelector) {
      return null;
    }

    return (
      <rootProps.components.BaseButton
        ref={ref}
        size="small"
        color="primary"
        aria-label="Update"
        startIcon={icon}
        {...other}
        onClick={onClick}
        {...rootProps.componentsProps?.baseButton}
      >
        {text}
      </rootProps.components.BaseButton>
    );
  },
);
