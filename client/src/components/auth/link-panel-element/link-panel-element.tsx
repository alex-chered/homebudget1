// mui
import { Box, Typography } from '@mui/material';

// components
import { Link } from 'components/base';

// local
import { useSx } from './use-sx';

// ==============================|| PROPS ||============================== //

interface LinkPanelElementProps {
  question: string;
  linkText: string;
  to: string;
}

// ==============================|| COMPONENT ||============================== //

export const LinkPanelElement = (props: LinkPanelElementProps) => {
  const { question, linkText, to } = props;

  const { linkPanelElementProps } = useSx();

  // RENDER
  return (
    <Box sx={linkPanelElementProps}>

      {/* Question */}
      <Typography>
        {question}
      </Typography>

      {/* Link */}
      <Link
        text={linkText}
        to={to}
      />

    </Box>
  );
};
