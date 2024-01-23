// Modal.tsx

import React, { ReactNode } from "react";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

const Modal: React.FC<ModalType> = (props: ModalType): JSX.Element => {
    const { children, isOpen, toggle } = props

  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={toggle}>
          <div  className="modal-box">
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;