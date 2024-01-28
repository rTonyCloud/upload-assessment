import { ReactNode } from 'react'

export interface ModalType {
	children?: ReactNode | ReactNode[]
	isOpen: boolean
	toggle: () => void
}
