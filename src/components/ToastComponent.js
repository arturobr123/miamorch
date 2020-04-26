import React from 'react';
import { Toast } from 'react-materialize';

const ToastComponent = props => {
  return (
    <Toast options={{ html: props.toastMessageText }}>
      {props.toastButtonText}
    </Toast>
  );
};

export default ToastComponent;
