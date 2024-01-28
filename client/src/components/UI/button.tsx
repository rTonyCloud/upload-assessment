import { ButtonProps } from '../../types/components/buttonInterface'

const Button: React.FC<ButtonProps> = (props: ButtonProps): JSX.Element => {
	const { children, variant, sx, onClick, disabled, type } = props

	const returnButtonStyles = (): {
		backgroundColor: string
		color: string
		border?: string
	} => {
		switch (variant) {
			case 'orange':
				return {
					backgroundColor: '#fff',
					color: '#FF8C00',
					border: '4px solid #FF8C00',
				}
			default:
				return { backgroundColor: 'hsl(215.12deg 59.42% 27.06%)', color: '#fff' }
		}
	}

	const { backgroundColor, color, border } = returnButtonStyles()

	return (
		<button
			onClick={onClick}
			type={type}
			disabled={disabled}
			style={{
				fontSize: '18px',
				fontWeight: 500,
				fontFamily: 'roboto',
				minWidth: '15vw',
				borderRadius: '10px',
				cursor: 'pointer',
				padding: '8px 12px',
				backgroundColor,
				color,
				border,
				...sx,
			}}
		>
			{children}
		</button>
	)
}

export default Button
