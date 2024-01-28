export interface ButtonProps {
	variant?: 'blue' | 'orange'
	disabled?: boolean
	sx?: React.CSSProperties
	type?: 'button' | 'submit' | undefined
	onClick?: () => void
	children: React.ReactNode
}
