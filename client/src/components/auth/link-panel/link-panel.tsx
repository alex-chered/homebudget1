import { ReactNode } from 'react';

// mui
import { Box, SxProps } from '@mui/material';

// local
import { useSx } from './use-sx';

// ==============================|| PROPS ||============================== //

interface LinkPanelProps {
  children: ReactNode;
  sx?: SxProps;
}

// ==============================|| COMPONENT ||============================== //

export const LinkPanel = (props: LinkPanelProps) => {
  const { children, sx } = props;

  const { linkPanelprops } = useSx();

  // RENDER
  return (
    <Box
      sx={{
        ...linkPanelprops,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
