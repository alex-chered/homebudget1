// mui
import { LoadingButton } from '@mui/lab';
import { Send as SendIcon } from '@mui/icons-material';
import { SxProps } from '@mui/material';

// ==============================|| PROPS ||============================== //

interface SubmitButtonProps {
  text: string;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
}

// ==============================|| SUBMIT BUTTON ||============================== //

export const SubmitButton = (props: SubmitButtonProps) => {
  const {
    text,
    loading = false,
    disabled = false,
    fullWidth = true,
    sx = {},
  } = props;

  // RENDER
  return (
    <LoadingButton
      loading={loading}
      disabled={disabled}
      loadingPosition="end"
      endIcon={<SendIcon />}
      type="submit"
      fullWidth={fullWidth}
      variant="contained"
      sx={{ ...sx }}
    >
      {text}
    </LoadingButton>
  );
};
