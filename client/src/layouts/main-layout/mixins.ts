// mui
import { Theme, CSSObject } from '@mui/material/styles';

// const
import { DRAWER_WIDTH } from 'const';

type MixinParameter = 'width' | 'left' | 'marginLeft';

// ==============================|| MIXIN ||============================== //

export const openedMixin = (theme: Theme, parameter: MixinParameter): CSSObject => ({
  [parameter]: DRAWER_WIDTH,
  transition: theme.transitions.create(parameter, {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

export const closedMixin = (theme: Theme, parameter: MixinParameter): CSSObject => ({
  transition: theme.transitions.create(parameter, {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  [parameter]: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    [parameter]: `calc(${theme.spacing(8)} + 1px)`,
  },
});
