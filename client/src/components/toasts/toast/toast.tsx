import { useEffect, useState } from 'react';

// mui
import { Alert, Collapse, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

// hooks
import { useTimer } from 'hooks/common';

// types
import { ToastModel } from 'types/models';

// ==============================|| PROPS ||============================== //

interface ToastProps {
  toast: ToastModel;
  onClosed: (id: string) => void;
}

// ==============================|| COMPONENT ||============================== //

export const Toast = (props: ToastProps) => {
  const {
    toast: { id, text, type },
    onClosed,
  } = props;

  const [open, setOpen] = useState<boolean>(true);

  // After 5 seconds delete the toast
  const { finished } = useTimer(5);

  useEffect(() => {
    if (!finished) {
      return;
    }

    // If the timer is finished,
    // run "onRemoved" from the props
    setOpen(false);
    onClosed(id);
  }, [finished, id, onClosed]);

  // When an user clicks on the "Close" button
  const onClickCloseHandler = () => {
    onClosed(id);
  };

  // RENDER
  return (
    <Collapse
      in={open}
      sx={{ width: 1 }}
    >
      <Alert
        severity={type}
        action={(
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={onClickCloseHandler}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        )}
      >
        {text}
      </Alert>
    </Collapse>
  );
};
