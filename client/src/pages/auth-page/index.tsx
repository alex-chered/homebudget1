import { useEffect, useState } from 'react';

// router
import { useNavigate } from 'react-router-dom';

// mui
import { Container, Avatar } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';

// store
import { useAuth } from 'store/auth';

// hooks
import { useFrom } from 'hooks/common';

// components
import {
  LoginForm,
  RegisterForm,
  LoginMenu,
  LinkPanel,
  LinkPanelElement,
  LoginMenuItemDataType,
} from 'components/auth';

// aux.
import { useSx } from './use-sx';

// ==============================|| AUTH PAGE ||============================== //

export const AuthPage = () => {
  const {
    containerProps,
    avatarProps,
    lockIconProps,
    loginProps,
    linkPanelProps,
  } = useSx();

  // Get the path where an user comes from
  const { from } = useFrom();

  // store the current tab
  const [activeTab, setActiveTab] = useState<LoginMenuItemDataType>('login');

  // The flags that registration or login processes completed
  const [registrationCompleted, setRegistrationCompleted] = useState<boolean>(false);
  const [loginCompleted, setLoginCompleted] = useState<boolean>(false);

  // router
  const navigate = useNavigate();

  // store
  const { getUserCount } = useAuth();

  // Load count of users
  useEffect(() => {
    getUserCount();
  }, [getUserCount]);

  // If registration completed, go to the apt page
  //
  useEffect(() => {
    if (registrationCompleted) {
      navigate(from, { replace: true });
    }
  }, [registrationCompleted, navigate, from]);

  // If login completed, go to the "apt" page
  //
  useEffect(() => {
    if (loginCompleted) {
      navigate(from, { replace: true });
    }
  }, [loginCompleted, navigate, from]);

  // MENU -> ON CHANGE
  const loginMenuOnChange = (data: LoginMenuItemDataType) => {
    setActiveTab(data);
  };

  // RENDER
  return (
    <Container
      fixed
      maxWidth="sm"
      sx={containerProps}
    >
      {/* Avatar */}
      <Avatar sx={avatarProps}>
        <LockOutlined sx={lockIconProps} />
      </Avatar>

      {/* Menu */}
      <LoginMenu
        defaultTab="login"
        onChange={loginMenuOnChange}
      />

      {/* Login */}
      <LoginForm
        sx={loginProps(activeTab === 'login')}
        onCompleted={() => setLoginCompleted(true)}
      />

      {/* Register */}
      <RegisterForm
        sx={loginProps(activeTab === 'register')}
        onCompleted={() => setRegistrationCompleted(true)}
      />

      {/* Link Panel */}
      <LinkPanel sx={linkPanelProps}>
        <LinkPanelElement
          question="Забыли пароль?"
          linkText="Восстановить пароль"
          to="/register-completed"
        />
      </LinkPanel>

    </Container>
  );
};
