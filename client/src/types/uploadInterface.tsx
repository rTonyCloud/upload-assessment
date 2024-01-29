export interface FileUploadProps extends React.HTMLAttributes<HTMLDivElement> {
	isDrag: boolean
	selectedFile: File | null
	handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void
	handleDrop: (e: React.DragEvent<HTMLDivElement>) => void
	uploadRef?: React.RefObject<HTMLInputElement>
	handleDragLeave: (e: React.DragEvent<HTMLDivElement>) => void
}
