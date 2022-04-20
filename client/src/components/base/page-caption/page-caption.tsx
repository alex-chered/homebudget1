// mui
import { Typography } from '@mui/material';

// ==============================|| PROPS ||============================== //

interface PageCaptionProps {
  text: string;
}

// ==============================|| PAGE CAPTION ||============================== //

export const PageCaption = (props: PageCaptionProps) => {
  const { text } = props;

  // RENDER
  return (
    <Typography
      variant="h1"
      sx={{
        fontSize: '2rem',
        textTransform: 'uppercase',
      }}
    >
      {text}
    </Typography>
  );
};
