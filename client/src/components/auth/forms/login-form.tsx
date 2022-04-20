import { useState, FormEvent, ChangeEvent } from 'react';

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
import { AuthForm, EmailInput } from './auxiliary';

// get the required selectors
const { loadingSelector } = authSelectors;

// ==============================|| VALIDATION RULES ||============================== //

const schema = yupObject({
  email: yupString().trim()
    .required('Необходимо заполнить E-Mail')
    .email('Необходимо ввести корректный E-Mail'),
  password: yupString().trim()
    .required('Необходимо заполнить пароль')
    .min(6, 'Минимальная длина пароля - 6')
    .max(15, 'Максимальная длина пароля - 15'),
});

// ==============================|| PROPS ||============================== //

interface LoginFormProps {
  sx?: SxProps,
  onCompleted?: () => void;
}

// ==============================|| STATE ||============================== //

interface LoginFormState {
  email: string;
  password: string;
}

// ==============================|| INITIAL STATE ||============================== //

const initialErrorState: LoginFormState = {
  email: '',
  password: '',
};

// ==============================|| AUX. TYPES ||============================== //

type StateKey = keyof LoginFormState;

// ==============================|| COMPONENT ||============================== //

export const LoginForm = (props: LoginFormProps) => {
  const { sx, onCompleted } = props;

  // store
  const { loading } = useAppSelector(loadingSelector);

  // The component state
  const [state, setState] = useState<LoginFormState>({ ...initialErrorState });
  // The error state
  const [errorState, setErrorState] = useState<LoginFormState>({ ...initialErrorState });

  // Get the required methods
  const { loginUser } = useAuth();
  const { toastError } = useToasts();

  // FORM -> SUBMIT
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // create a new user using the form data
    const { email, password } = state;
    const newUser: UserModel = {
      email,
      password,
    };

    try {
      // validate input
      await schema.validate(newUser, { abortEarly: false });

      // login user
      await loginUser(newUser);

      // if all is OK, run the "onCompleted"
      onCompleted && onCompleted();

    // CATCH ERRORS
    } catch (error: unknown) {
      // handle "ValidationError"
      if (ValidationError.isError(error)) {
        // create the "errors" object with empty messages
        const errors: LoginFormState = { ...initialErrorState };
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
  const handleChange = (prop: StateKey) => (event: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [prop]: event.target.value });
    clearErrors();
  };

  // RENDER
  return (
    <AuthForm
      sx={sx}
      onSubmit={onSubmit}
    >

      <EmailInput
        value={state.email}
        errorText={errorState.email}
        onChange={handleChange('email')}
      />

      <Password
        value={state.password}
        errorText={errorState.password}
        onChange={handleChange('password')}
      />

      <SubmitButton
        text="Войти"
        loading={loading}
      />

    </AuthForm>
  );
};
