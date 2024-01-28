import React from 'react'
import '../styling/components/modal.styling.scss'
import { ModalType } from '../types/modaInterface'

const Modal: React.FC<ModalType> = (props: ModalType): JSX.Element => {
	const { children, isOpen, toggle } = props

	return (
		<>
			{isOpen && (
				<div className="modalOverlay" onClick={toggle}>
					<div className="modalContent" onClick={(e) => e.stopPropagation()}>
						{children}
					</div>
				</div>
			)}
		</>
	)
}

export default Modal
