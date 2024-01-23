interface RadioButtonProps {
  name: string
  value: string
  label: React.ReactNode
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const RadioButton: React.FC<RadioButtonProps> = (props: RadioButtonProps): JSX.Element => {
    const { name, value, label, checked, onChange } = props

    return <>
        <label className="radio">
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <span className="radio__label">{label}</span>
        </label>
    </>
}

export default RadioButton
