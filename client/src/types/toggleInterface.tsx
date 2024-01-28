export interface ToggleProps {
	onToggle: (isOn: boolean, toleranceLevel?: string) => void
	toleranceOptions?: string[]
}
