import { useCallback, useRef, useState } from 'react'

export default function useToleranceToggle() {
	const inputRef = useRef<HTMLInputElement | null>(null)
	const [file, setFile] = useState<File | null>(null)
	const [, setDrag] = useState(false)

	const uploadFileHandler: React.ChangeEventHandler = () => {
		if (inputRef.current?.files && inputRef.current.files[0]) {
			const f = inputRef.current?.files[0]
			setFile(f)
		}
	}

	const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		e.stopPropagation()
		setDrag(false)
		if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
			setFile(e.dataTransfer.files[0])
			e.dataTransfer.clearData()
		}
	}, [])

	const handleDrag = useCallback((e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		e.stopPropagation()
	}, [])

	return {
		inputRef,
		file,
		uploadFileHandler,
		handleDrop,
		handleDrag,
	}
}
