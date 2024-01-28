import { useCallback, useRef, useState } from 'react'

export default function useUpload() {
	const inputRef = useRef<HTMLInputElement | null>(null)
	const [file, setFile] = useState<File | null>(null)
	const [isDrag, setIsDrag] = useState(false)

	const uploadFileHandler: React.ChangeEventHandler = () => {
		if (inputRef.current?.files && inputRef.current.files[0]) {
			const f = inputRef.current?.files[0]
			setFile(f)
		}
	}

	const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		e.stopPropagation()
		setIsDrag(true)
	}, [])

	const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		e.stopPropagation()
		setIsDrag(false)
	}, [])

	const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		e.stopPropagation()
		setIsDrag(false)
		if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
			setFile(e.dataTransfer.files[0])
			e.dataTransfer.clearData()
		}
	}, [])

	const handleDrag = useCallback((e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		e.stopPropagation()
		setIsDrag(true)
	}, [])

	return {
		inputRef,
		file,
		uploadFileHandler,
		handleDrop,
		handleDrag,
		isDrag,
		handleDragLeave,
		handleDragOver
	}
}
