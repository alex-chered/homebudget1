import { useState, ChangeEvent } from 'react';

// mui
import {
  InputAdornment,
  IconButton,
  TextField,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';

// ==============================|| PROPS ||============================== //

interface PasswordProps {
  value: string;
  errorText?: string;
  newPassword?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

// ==============================|| COMPONENT ||============================== //

export const Password = (props: PasswordProps) => {
  const {
    value,
    errorText = '',
    newPassword = false,
    onChange,
  } = props;

  const [showPassword, setShowPassword] = useState<boolean>(false);

  // form the error text
  const text = errorText.trim().length > 0
    ? errorText
    : ' ';

  // function to toggle visibility
  const toggle = () => {
    setShowPassword((state) => !state);
  };

  // RENDER
  return (
    <TextField
      label="Password"
      name="password"
      value={value}
      required
      fullWidth
      variant="outlined"
      error={errorText.trim().length > 0}
      helperText={text}
      type={showPassword ? 'text' : 'password'}
      autoComplete={newPassword ? 'new-password' : 'current-password'}
      onChange={onChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={toggle}
              // onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
