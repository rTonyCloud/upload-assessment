import React, { ChangeEvent } from 'react'
import { DropDownProps } from '../../types/components/dropDownInterface'
const DropDown: React.FC<DropDownProps> = (props: DropDownProps): JSX.Element => {
	const { onSelect, placeholder, options } = props
	const [dropDown, setDropDown] = React.useState<string>('')

	const handleDropdown = (event: ChangeEvent<HTMLSelectElement>) => {
		const { value } = event.target
		setDropDown(value)
		onSelect(value)
	}

	return (
		<div className="container">
			<select
				value={dropDown}
				onChange={handleDropdown}
				style={{
					display: 'flex',
					position: 'relative',
					width: '55%',
					height: '3vh',
					justifyContent: 'center',
					alignItems: 'center',
					borderRadius: '5px',
					top: '5px',
					left: '4vw',
					fontSize: '1.2rem',
					textAlign: 'left',
				}}
			>
				{placeholder && <option value="dropdown">{placeholder}</option>}
				{options.map((option, index) => (
					<option key={index} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	)
}

export default DropDown
