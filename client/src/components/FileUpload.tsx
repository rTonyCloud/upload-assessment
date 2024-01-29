import '../styles/components/fileUpload.styling.scss'
import React from 'react'
import Button from './UI/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import HR from './UI/hr'
import { useMutation } from '@apollo/client'
import { uploadFiles } from '../graphql/singleUpload'
import { FileUploadProps } from '../types/uploadInterface'

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
	const [uploadStatus, setUploadStatus] = React.useState({
		success: false,
		error: false,
		message: '',
	})
	const [uploadFile] = useMutation(uploadFiles)

	// max file size in MB && styles for file upload
	const MAX_FILE_SIZE_MB = 16
	const getUploadFileStyle = (fileSize: number) => {
		return {
			color: fileSize > MAX_FILE_SIZE_MB * 1024 * 1024 ? 'red' : 'inherit',
		}
	}

	// browse button
	const handleBrowse = () => uploadRef?.current?.click()

	//upload handler with error handling
	const handleUploadButtonClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		if (!selectedFile) {
			console.log('No file selected')
			return
		}

		const fileSizeMB = selectedFile.size / 1024 / 1024
		if (fileSizeMB > MAX_FILE_SIZE_MB) {
			setUploadStatus({
				success: false,
				error: true,
				message: `File size (${fileSizeMB.toFixed(2)}MB) exceeds the limit of ${MAX_FILE_SIZE_MB}MB`,
			})
			return
		}

		try {
			const response = await uploadFile({
				variables: {
					file: selectedFile,
				},
			})
			setUploadStatus({ success: true, error: false, message: 'Upload Successful!' })
			console.log('file upload response', response)
		} catch (error) {
			console.error('Error uploading file', error)
			setUploadStatus({ success: false, error: true, message: 'Upload Failed!' })
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
						<h2>{selectedFile.name}</h2>
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
				<Button
					type="button"
					onClick={handleUploadButtonClick}
					className="uploadButton"
					sx={{ height: '40px', top: '10px', position: 'relative' }}
				>
					Upload Manifest
				</Button>
			</div>
			<div className="fileUploadResult">
				<HR
					style={{ width: '80%', backgroundColor: '#aebac5', position: 'relative', right: '0' }}
				/>
				<div className="fileUploadResultText">
					{uploadStatus.success ? (
						<div className="uploadSuccess">
							<FontAwesomeIcon icon={faCheckCircle} size="lg" style={{ color: 'green' }} />
							<span>{uploadStatus.message}</span>
						</div>
					) : uploadStatus.error ? (
						<div className="uploadSuccess">
							<FontAwesomeIcon icon={faTimesCircle} size="lg" style={{ color: 'red' }} />
							<span>{uploadStatus.message}</span>
						</div>
					) : (
						selectedFile && (
							<>
								<span className="uploadFileIcon">
									<FontAwesomeIcon icon={faFile} size="1x" className="uploadIconSize" />
								</span>
								<span className="fileName">{selectedFile.name}</span>
								<span className="fileSize" style={getUploadFileStyle(selectedFile.size)}>
									{(selectedFile.size / 1024 / 1024).toFixed(2)}MB / 16MB
								</span>
							</>
						)
					)}
				</div>
				<HR
					style={{ width: '80%', backgroundColor: '#aebac5', position: 'relative', right: '0' }}
				/>
			</div>
		</section>
	)
}

export default FileUpload
