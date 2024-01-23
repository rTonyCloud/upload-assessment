import React, { ReactNode } from 'react'
import '../styling/components/modal.styling.scss'

interface ModalProps {
  children?: ReactNode
  isOpen: boolean
}

const Modal: React.FC<ModalProps> = (props: ModalProps): JSX.Element => {
  const { children, isOpen } = props

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-box">{children}</div>
        </div>
      )}
    </>
  )
}

export default Modal
