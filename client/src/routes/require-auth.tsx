import { useState, useEffect, ReactNode } from 'react';

// router
import { Navigate, useLocation } from 'react-router-dom';

// store
import { useAppSelector } from 'store';
import { authSelectors, useAuth } from 'store/auth';

// get selectors
const { userSelector } = authSelectors;

// ==============================|| PROPS ||============================== //

interface RequireAuthProps {
  children: ReactNode;
}

// ==============================|| COMPONENT ||============================== //

export const RequireAuth = (props: RequireAuthProps) => {
  const { children } = props;

  const location = useLocation();

  // Here we store the flag that all prep actions completed
  const [preCompleted, setPreCompleted] = useState<boolean>(false);

  // Get the current user
  const { user: currentUser } = useAppSelector(userSelector);

  // Function to get user by token
  const { getUser } = useAuth();

  // Method to load all the data before rendering the component
  const preLoadData = async () => {
    try {
      // Fetch user
      await getUser();
    } catch {
      //
    } finally {
      // complete prep
      setPreCompleted(true);
    }
  };

  useEffect(() => {
    preLoadData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // LOADER
  if (!preCompleted) {
    return null;
  }

  // If prep actions completed and there is not the current user,
  // redirect to the "Login" page
  if (!currentUser) {
    return (
      <Navigate
        to="/auth"
        state={{ from: location }}
        replace
      />
    );
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children}
    </>
  );
};
