import React from 'react';
import { Modal, Button } from 'react-materialize';

const ParallaxImage = props => {
  return (
    <Modal
      actions={[
        <Button flat modal="close" node="button" waves="green">
          Close
        </Button>,
      ]}
      bottomSheet={false}
      fixedFooter={false}
      header="Modal Header"
      id="Modal-0"
      open={false}
      options={{
        dismissible: true,
        endingTop: '10%',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        opacity: 0.5,
        outDuration: 250,
        preventScrolling: true,
        startingTop: '4%',
      }}
      trigger={<Button node="button">{props.buttonText}</Button>}
    >
      <p>{props.modalText}</p>
    </Modal>
  );
};

export default ParallaxImage;
