import { ChangeEvent } from 'react';

// mui
import { TextField } from '@mui/material';

// ==============================|| PROPS ||============================== //

interface FullNameInputProps {
  value: string;
  errorText?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

// ==============================|| FULL NAME INPUT ||============================== //

export const FullNameInput = (props: FullNameInputProps) => {
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
      name="fullname"
      label="Полное наименование"
      error={errorText.trim().length > 0}
      helperText={text}
      required
      fullWidth
      value={value}
      onChange={onChange}
    />
  );
};
