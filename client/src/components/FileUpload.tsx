import React from 'react'

type FileUploadProps = {
  selectedFile: File | null
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void
}

const FileUpload: React.FC<FileUploadProps> = (
  props: FileUploadProps
): JSX.Element => {
  const { selectedFile, handleFileChange, handleDragOver, handleDrop } = props
  const [selectFile, setSelectFile] = React.useState<File | null>(null)

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0])
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }
  return (
    <div>
      <h1>File Upload</h1>
    </div>
  )
}

export default FileUpload
