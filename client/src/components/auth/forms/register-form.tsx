/* eslint-disable */

import { useState, ChangeEvent, FormEvent } from 'react';

// 3-rd party
import {
  string as yupString,
  object as yupObject,
  ValidationError,
} from 'yup';

// mui
import { SxProps } from '@mui/material';

// components
import { Password, SubmitButton } from 'components/base';

// store
import { useAppSelector } from 'store';
import { authSelectors, useAuth } from 'store/auth';

// hooks
import { useToasts } from 'hooks/toasts';

// types
import { UserModel } from 'types/models';
import { ActionRejectedError } from 'types/errors';

// aux.
import {
  AuthForm,
  EmailInput,
  UsernameInput,
} from './auxiliary';

// get the required selectors
const { loadingSelector, userCountSelector } = authSelectors;

// ==============================|| VALIDATION RULES ||============================== //

const schema = yupObject({
  username: yupString().trim()
    .required('Необходимо заполнить имя пользователя'),
  email: yupString().trim()
    .required('Необходимо заполнить E-Mail')
    .email('Необходимо ввести корректный E-Mail'),
  password: yupString().trim()
    .required('Необходимо заполнить пароль')
    .min(6, 'Минимальная длина пароля - 6')
    .max(15, 'Максимальная длина пароля - 15'),
});

// ==============================|| PROPS ||============================== //

interface RegisterFormProps {
  sx?: SxProps;
  onCompleted?: () => void;
}
interface RegisterFormState {
  email: string;
  password: string;
  username: string;
}

type StateKey = keyof RegisterFormState;

const initialErrorState: RegisterFormState = {
  email: '',
  password: '',
  username: '',
};

// ==============================|| COMPONENT ||============================== //

export const RegisterForm = (props: RegisterFormProps) => {
  const { sx, onCompleted } = props;

  // The component state
  const [state, setState] = useState<RegisterFormState>({ ...initialErrorState });
  // The error state
  const [errorState, setErrorState] = useState<RegisterFormState>({ ...initialErrorState });

  // store - auth
  const { loading } = useAppSelector(loadingSelector);
  const { count } = useAppSelector(userCountSelector);

  // Get the required methods
  const { registerUser } = useAuth();
  const { toastError } = useToasts();

  // FORM -> SUBMIT
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // temp
    if (count > 1) {
      toastError('Регистрация отключена');
      return;
    }

    // create a new user using the form data
    const { email, password, username } = state;
    const newUser: UserModel = {
      email,
      password,
      username,
    };

    try {
      // validate input
      await schema.validate(newUser, { abortEarly: false });

      // login user
      await registerUser(newUser);

      // if all is OK, run the "onCompleted"
      onCompleted && onCompleted();

    // CATCH ERRORS
    } catch (error: unknown) {
      // handle "ValidationError"
      if (ValidationError.isError(error)) {
        // create the "errors" object with empty messages
        const errors: RegisterFormState = { ...initialErrorState };
        // fill the errors
        error.inner.forEach((err: ValidationError) => {
          const key = err.path as StateKey;
          errors[key] = err.message;
        });
        // set the "errors" state
        setErrorState(errors);

      // handle "ActionRejectError"
      } else if (ActionRejectedError.isError(error)) {
        toastError(error.message);
      }
    }
  };

  const clearErrors = () => {
    setErrorState(initialErrorState);
  };

  // INPUTS -> ON CHANGE
  const handleChange = (
    prop: keyof RegisterFormState,
  ) => (event: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [prop]: event.target.value });
    clearErrors();
  };

  // RENDER
  return (
    <AuthForm
      sx={sx}
      onSubmit={onSubmit}
    >

      {/* Username */}
      <UsernameInput
        value={state.username}
        errorText={errorState.username}
        onChange={handleChange('username')}
      />

      {/* E-Mail */}
      <EmailInput
        value={state.email}
        errorText={errorState.email}
        onChange={handleChange('email')}
      />

      {/* Password */}
      <Password
        value={state.password}
        errorText={errorState.password}
        newPassword
        onChange={handleChange('password')}
      />

      {/* Submit */}
      <SubmitButton
        text="Зарегистрироваться"
        loading={loading}
        disabled={count>1}
      />

    </AuthForm>
  );
};
