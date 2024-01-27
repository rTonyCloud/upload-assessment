import React, { ReactNode } from 'react'
import '../styling/components/modal.styling.scss'

interface ModalType {
	children?: ReactNode | ReactNode[]
	isOpen: boolean
	toggle: () => void
}

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
