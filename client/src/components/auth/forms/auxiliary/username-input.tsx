import { ChangeEvent } from 'react';

// mui
import { TextField } from '@mui/material';

// ==============================|| PROPS ||============================== //

interface UsernameInputProps {
  value: string;
  errorText?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

// ==============================|| COMPONENT ||============================== //

export const UsernameInput = (props: UsernameInputProps) => {
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
      name="username"
      label="Имя пользователя"
      error={errorText.trim().length > 0}
      helperText={text}
      required
      fullWidth
      autoComplete="username"
      value={value}
      onChange={onChange}
    />
  );
};
