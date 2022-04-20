// router
import { useLocation } from 'react-router-dom';

// ==============================|| USE FROM ||============================== //

export const useFrom = () => {
  const location = useLocation();

  let from = '/';
  const state = (location.state as { from: Location });
  if (state && state.from && state.from.pathname) {
    from = state.from.pathname;
  }

  // RETURN
  return {
    from,
  };
};
