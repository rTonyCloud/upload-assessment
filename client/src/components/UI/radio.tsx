import '../../styling/components/UI/radio.styling.scss'
interface RadioButtonProps {
  name: string
  value: string
  label: React.ReactNode
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const RadioButton: React.FC<RadioButtonProps> = (
  props: RadioButtonProps
): JSX.Element => {
  const { name, value, label, checked, onChange } = props

  return (
    <>
      <label className="radioContainer">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <span className="radioLabel">{label}</span>
      </label>
    </>
  )
}

export default RadioButton
