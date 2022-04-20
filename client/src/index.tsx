import React from 'react';
import ReactDOM from 'react-dom';

// redux
import { Provider } from 'react-redux';

// router
import { BrowserRouter as Router } from 'react-router-dom';

// mui
import { CssBaseline, useMediaQuery, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

// store
import { store } from 'store';

// components
import { ToastsContainer } from 'components/toasts';
import { Preloader } from 'components/auth';

// theme
import { theme } from 'mui-theme';

// routes
import { AllRoutes } from './routes';

// css
import './index.css';

const App = () => {
  const isDesktop = useMediaQuery('(min-width:1100px)');

  // RENDER
  return (
    <>
      {
        isDesktop && (
          <Preloader>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <AllRoutes />
              <ToastsContainer />
            </ThemeProvider>
          </Preloader>
        )
      }
      {
        !isDesktop && (
          <Typography variant="h6">
            Для данного устройства программа не поддерживается
          </Typography>
        )
      }
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
