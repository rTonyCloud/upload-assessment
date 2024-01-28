export interface RadioButtonProps {
	name: string
	value: string
	label: React.ReactNode
	checked: boolean
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
