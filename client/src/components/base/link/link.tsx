// router
import { Link as RouterLink } from 'react-router-dom';

// mui
import { Link as MuiLink } from '@mui/material';

// ==============================|| PROPS ||============================== //

interface LinkProps {
  text: string;
  to: string;
}

// ==============================|| COMPONENT ||============================== //

export const Link = (props: LinkProps) => {
  const { text, to } = props;

  // RENDER
  return (
    <MuiLink
      underline="none"
      variant="body1"
      component={RouterLink}
      to={to}
    >
      {text}
    </MuiLink>
  );
};
