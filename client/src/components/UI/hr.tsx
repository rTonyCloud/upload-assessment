interface HRProps {
	className?: string
	style?: React.CSSProperties
}

const HR: React.FC<HRProps> = (props: HRProps): JSX.Element => {
	const { className, style } = props

	return <hr className={className} style={style} />
}

export default HR
