import { useState, ReactNode } from 'react';

// router
import { Navigate } from 'react-router-dom';

// store
import { useAppSelector } from 'store';
import { authSelectors } from 'store/auth';

// types
import { UserModel } from 'types/models';

// get selectors
const { userSelector } = authSelectors;

// ==============================|| PROPS ||============================== //

interface NotForAuthProps {
  children: ReactNode;
}

// ==============================|| COMPONENT ||============================== //

export const NotForAuth = (props: NotForAuthProps) => {
  const { children } = props;

  // Get the current user
  const { user } = useAppSelector(userSelector);

  // state
  const [currentUser] = useState<UserModel | null>(user);

  if (currentUser) {
    return <Navigate to="/" replace />;
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children}
    </>
  );
};
