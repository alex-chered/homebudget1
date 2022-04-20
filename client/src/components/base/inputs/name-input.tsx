import { ChangeEvent } from 'react';

// mui
import { TextField } from '@mui/material';

// ==============================|| PROPS ||============================== //

interface NameInputProps {
  value: string;
  errorText?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

// ==============================|| NAME INPUT ||============================== //

export const NameInput = (props: NameInputProps) => {
  const {
    value,
    errorText = '',
    onChange,
  } = props;

  const text = errorText.trim().length > 0
    ? errorText
    : ' ';

  // RENDER
  return (
    <TextField
      name="name"
      label="Наименование"
      error={errorText.trim().length > 0}
      helperText={text}
      required
      fullWidth
      value={value}
      onChange={onChange}
    />
  );
};
