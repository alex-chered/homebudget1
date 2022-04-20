// mui
import { TextField } from '@mui/material';

// ==============================|| PROPS ||============================== //

interface IdInputProps {
  value: string;
}

// ==============================|| ID INPUT ||============================== //

export const IdInput = (props: IdInputProps) => {
  const { value } = props;

  // RENDER
  return (
    <TextField
      name="id"
      label="ID"
      disabled
      value={value}
      sx={{
        bgcolor: 'grey.200',
      }}
    />
  );
};
