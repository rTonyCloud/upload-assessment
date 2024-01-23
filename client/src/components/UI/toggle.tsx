

interface ToggleProps {
    name: string
    value: string
    label: React.ReactNode
    checked: boolean
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Toggle: React.FC<ToggleProps> = (props: ToggleProps): JSX.Element => {
    const { name, value, label, checked, onChange } = props

    return <>
        <label className="toggle">
            <input
                type="checkbox"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <span className="toggle__label">{label}</span>
        </label>
    </>
}

export default Toggle