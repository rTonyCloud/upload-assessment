export interface ButtonProps {
	variant?: 'blue' | 'orange'
	disabled?: boolean
	sx?: React.CSSProperties
	type?: 'button' | 'submit' | undefined
	onClick?: React.MouseEventHandler<HTMLButtonElement>
	children: React.ReactNode
}
