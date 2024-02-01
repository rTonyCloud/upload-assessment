import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import '../styles/toggleTolerance.styling.scss'
import { ToggleProps } from '../types/toggleInterface'

const Toggle: React.FC<ToggleProps> = (props: ToggleProps): JSX.Element => {
	const { onToggle, toleranceOptions } = props
	const [isToggle, setIsToggle] = React.useState<boolean>(false)
	const [selectedTolerance, setSelectedTolerance] = React.useState<string>(
		toleranceOptions ? toleranceOptions[0] : '',
	)

	const handleToggle = () => {
		const newState = !isToggle
		setIsToggle(newState)
		onToggle(newState, newState ? selectedTolerance : '')
	}

	const handleToleranceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = event.target
		setSelectedTolerance(value)
		if (isToggle) {
			onToggle(isToggle, value)
		}
	}

	return (
		<>
			<div className="toggleContainer">
				<div className="toggleWrapper">
					<div className="toggleLabel">
						<label className="switch">
							<input type="checkbox" checked={isToggle} onChange={handleToggle} />
							<span className="slider"></span>
						</label>
						{isToggle ? (
							<>
								{' '}
								Toggle ON &nbsp;&nbsp; | &nbsp;&nbsp;
								<FontAwesomeIcon icon={faClock} />
								&nbsp;&nbsp;Select Tolerance Level:{' '}
							</>
						) : (
							'Toggle OFF'
						)}

						{isToggle && (
							<select value={selectedTolerance} onChange={handleToleranceChange}>
								{toleranceOptions?.map((option, index) => (
									<option key={index} value={option}>
										{option}
									</option>
								))}
							</select>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default Toggle
