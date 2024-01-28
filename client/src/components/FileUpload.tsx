import React from 'react'
import Button from './UI/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import '../styling/components/fileUpload.styling.scss'
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
	const [uploadSuccess, setUploadSuccess] = React.useState<boolean>(false)
	const [uploadFile] = useMutation(uploadFiles)

	const handleBrowse = () => {
		console.log('handleBrowse called')
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
			setUploadSuccess(true)
			console.log('file upload response', response)
		} catch (error) {
			console.error('Error uploading file', error)
			setUploadSuccess(false)
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
					style={{ width: '80%', backgroundColor: '#aebac5', position: 'relative', right: '0' }}
				/>
				<div className="fileUploadResultText">
					{uploadSuccess ? (
						<div className="uploadSuccess">
							<FontAwesomeIcon icon={faCheckCircle} size="lg" style={{ color: 'green' }} />
							<span>Upload Successful!</span>
						</div>
					) : (
						selectedFile && (
							<>
								<span className="uploadFileIcon">
									<FontAwesomeIcon icon={faFile} size="2x" className="uploadIconSize" />
								</span>
								<span className="fileName">{selectedFile.name}</span>
								<span className="fileSize">
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
