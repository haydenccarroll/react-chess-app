import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Form from './form';

const ModalDialog = ({ open, handleClose }) => {
  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      <h1 style={{textAlign: 'center'}}>Sign Up</h1>
      <Form handleClose={handleClose} />
    </Dialog>
  );
};

export default ModalDialog;