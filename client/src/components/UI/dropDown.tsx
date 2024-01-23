import React, { ChangeEvent } from 'react'

interface DropDownProps {
  onSelect: (value: string) => void
  placeholder?: string
  options: DropdownOption[]
}

interface DropdownOption {
  value: string
  label: string
}

const DropDown: React.FC<DropDownProps> = (
  props: DropDownProps
): JSX.Element => {
  const { onSelect, placeholder, options } = props
  const [dropDown, setDropDown] = React.useState<string>('')

  const handleDropdown = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target
    setDropDown(value)
    onSelect(value)
  }

  return (
    <select
      value={dropDown}
      onChange={handleDropdown}
      style={{
        width: '200px',
        padding: '5px',
        margin: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
      }}>
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default DropDown
