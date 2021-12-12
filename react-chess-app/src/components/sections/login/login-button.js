import { useState } from 'react';
import Button from '@material-ui/core/Button';
import ModalDialog from './ModalDialog';

const LoginButton = () => {
  // declare a new state variable for modal open
  const [open, setOpen] = useState(false);

  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="login-container">
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Login
      </Button>
      <ModalDialog open={open} handleClose={handleClose} />
    </div>
  );
};
export default LoginButton;