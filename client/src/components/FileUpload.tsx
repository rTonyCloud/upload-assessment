import React from 'react'
import Button from './UI/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import '../styling/components/fileUpload.styling.scss'
import HR from './UI/hr'
import { useMutation } from '@apollo/client'
import { gql } from '@apollo/client'
type FileUploadProps = {
	isDrag: boolean
	selectedFile: File | null
	handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void
	handleDrop: (e: React.DragEvent<HTMLDivElement>) => void
	uploadRef?: React.RefObject<HTMLInputElement>
	handleDragLeave: (e: React.DragEvent<HTMLDivElement>) => void
}

const uploadFiles = gql`
	mutation SingleUpload($file: Upload!) {
		singleUpload(file: $file) {
			filename
			mimetype
			encoding
			createdAt
		}
	}
`

const FileUpload: React.FC<FileUploadProps> = (props: FileUploadProps): JSX.Element => {
	const {
		selectedFile,
		handleFileChange,
		handleDrop,
		uploadRef,
		isDrag,
		handleDragLeave,
		handleDragOver,
	} = props

	const [uploadFile] = useMutation(uploadFiles)

	const handleBrowse = () => {
		console.log("handleBrowse called")
		uploadRef?.current?.click()
	}


	const handleUploadButtonClick = async () => {
		if (!selectedFile) {
			console.log('No file selected')
			return
		}

		try {
			const response = await uploadFile({
				variables: {
					file: selectedFile,
				},
			})
			console.log('file upload response', response)
		} catch (error) {
			console.error('Error uploading file', error)
		}
	}

	return (
		<section className="fileUpload">
			<div
				className="fileUploadContainer"
				onDragOver={handleDragOver}
				onDrop={handleDrop}
				onDragLeave={handleDragLeave}
			>
				{selectedFile ? (
					<div className="fileUploadContainerAfterDrag">
						<h1>{selectedFile.name}</h1>
						<br />
						<div>
							Drag again here or{' '}
							<span className="browse" onClick={handleBrowse}>
								browse
							</span>
						</div>
					</div>
				) : isDrag ? (
					<div className="fileUploadContainerDrag">
						<h1>Drop here</h1>
					</div>
				) : (
					<div className="fileUploadContainerBeforeDrag">
						<FontAwesomeIcon
							icon={faFile}
							size="2xl"
							style={{ color: '#FFD43B' }}
							className="FileIcon"
						/>
						<h5>
							Drag & drop here or{' '}
							<span className="browse" onClick={handleBrowse}>
								browse
							</span>
						</h5>
						<div>
							<input
								type="file"
								name="file"
								id="file"
								ref={uploadRef}
								onChange={handleFileChange}
								style={{ display: 'none' }}
							/>
						</div>
					</div>
				)}
				<Button onClick={handleUploadButtonClick} sx={{ height: '40px' }}>
					Upload Manifest
				</Button>
			</div>
			<div className="fileUploadResult">
				<HR
					style={{
						width: '80%',
						backgroundColor: '#aebac5',
						position: 'relative',
						right: '0',
					}}
				/>
				<div className="fileUploadResultText">
					{selectedFile && (
						<>
							<span className="uploadFileIcon">
								<FontAwesomeIcon icon={faFile} size="2x" className="uploadIconSize" />
							</span>
							<span className="fileName">{selectedFile.name}</span>
							<span className="fileSize">
								{(selectedFile.size / 1024 / 1024).toFixed(2)}MB / 16MB
							</span>
						</>
					)}
				</div>
				<HR
					style={{
						width: '80%',
						backgroundColor: '#aebac5',
						position: 'relative',
						right: '0',
					}}
				/>
			</div>
		</section>
	)
}

export default FileUpload
