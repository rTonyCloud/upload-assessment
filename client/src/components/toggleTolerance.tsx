import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import '../styling/toggleTolerance.styling.scss'
interface ToggleProps {
  onToggle: (isOn: boolean, toleranceLevel?: string) => void
  toleranceOptions?: string[]
}

const Toggle: React.FC<ToggleProps> = (props: ToggleProps): JSX.Element => {
  const { onToggle, toleranceOptions } = props
  const [isToggle, setIsToggle] = React.useState<boolean>(false)
  const [selectedTolerance, setSelectedTolerance] = React.useState<string>(
    toleranceOptions ? toleranceOptions[0] : ''
  )

  const handleToggle = () => {
    const newState = !isToggle
    setIsToggle(newState)
    onToggle(newState, newState ? selectedTolerance : '')
  }

  const handleToleranceChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
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
          <label>
            <input type="checkbox" checked={isToggle} onChange={handleToggle} />
            {isToggle ? (
              <>
                {' '}
                Toggle ON | <FontAwesomeIcon icon={faClock} /> Select Tolerance
                Level:{' '}
              </>
            ) : (
              'Toggle OFF'
            )}
          </label>
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
    </>
  )
}

export default Toggle
