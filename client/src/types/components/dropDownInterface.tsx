export interface DropDownProps {
	onSelect: (value: string) => void
	placeholder?: string
	options: DropdownOption[]
}

interface DropdownOption {
	value: string
	label: string
}
