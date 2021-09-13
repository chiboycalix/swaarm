/** @format */

import React from 'react';
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import './styles.scss';

interface Props {
  handleCloseModal(): void;
  setModal(value: boolean): void
  modal: boolean;
  children: React.ReactElement;
}

const Modal: React.FC<Props> = (props) => {
  return (
    <PureModal
      isOpen={props.modal}
      closeButtonPosition="header"
      className="modal"
      onClose={() => {
        props.setModal(false);
        return true;
      }}>
      {props.children}
    </PureModal>
  );
};
export default Modal;
