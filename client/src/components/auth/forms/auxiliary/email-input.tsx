import { ChangeEvent } from 'react';

// mui
import { TextField } from '@mui/material';

// ==============================|| PROPS ||============================== //

interface EmailInputProps {
  value: string;
  errorText?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

// ==============================|| COMPONENT ||============================== //

export const EmailInput = (props: EmailInputProps) => {
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
      name="email"
      label="E-Mail"
      error={errorText.trim().length > 0}
      helperText={text}
      required
      fullWidth
      autoComplete="email"
      value={value}
      onChange={onChange}
    />
  );
};
