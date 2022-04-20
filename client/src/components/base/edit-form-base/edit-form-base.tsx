import { FormEvent, ReactNode } from 'react';

// mui
import { Box, Button, Stack } from '@mui/material';

// components
import { SubmitButton } from 'components/base';

// ==============================|| PROPS ||============================== //

interface EditFormBaseProps {
  children: ReactNode;
  loading?: boolean;
  onSubmit?: () => void;
  onClose?: () => void;
}

// ==============================|| EDIT FORM BASE ||============================== //

export const EditFormBase = (props: EditFormBaseProps) => {
  const {
    children,
    loading = false,
    onSubmit,
    onClose,
  } = props;

  // FORM -> ON SUBMIT
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit && onSubmit();
  };

  // RENDER
  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={{
        width: 600,
        display: 'grid',
        rowGap: 1,
        mt: 3,
      }}
    >

      {/* CONTENT */}
      { children }

      {/* Actions */}
      <Stack spacing={1} direction="row">

        {/* "Save" button */}
        <SubmitButton
          text="Сохранить"
          loading={loading}
          sx={{ width: 'fit-content' }}
        />

        {/* "Close" button */}
        <Button
          variant="outlined"
          onClick={onClose}
        >
          Закрыть
        </Button>

      </Stack>

    </Box>
  );
};
