import '../../styling/components/UI/radio.styling.scss'
import { RadioButtonProps } from '../../types/components/radioButtonInterface'

const RadioButton: React.FC<RadioButtonProps> = (props: RadioButtonProps): JSX.Element => {
	const { name, value, label, checked, onChange } = props

	return (
		<>
			<label className="radioContainer">
				<input type="radio" name={name} value={value} checked={checked} onChange={onChange} />
				<span className="radioLabel">{label}</span>
			</label>
		</>
	)
}

export default RadioButton
