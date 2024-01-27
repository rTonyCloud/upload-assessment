import React from 'react'
import Button from './UI/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import '../styling/components/fileUpload.styling.scss'
import HR from './UI/hr'

type FileUploadProps = {
	selectedFile: File | null
	handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void
	handleDrop: (e: React.DragEvent<HTMLDivElement>) => void
	uploadRef?: React.RefObject<HTMLInputElement>
}

const FileUpload: React.FC<FileUploadProps> = (props: FileUploadProps): JSX.Element => {
	const { selectedFile, handleFileChange, handleDragOver, handleDrop, uploadRef } = props

	const handleBrowse = () => {
		uploadRef?.current?.click()
	}

	return (
		<section className="fileUpload">
			<div className="fileUploadContainer" onDragOver={handleDragOver} onDrop={handleDrop}>
				<div className="fileUploadContainerText">
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
				<Button
					onClick={() => {
						uploadRef?.current?.click()
					}}
					sx={{ height: '40px' }}
				>
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
							<span className="fileSize">{(selectedFile.size / 1024 / 1024).toFixed(2)}MB</span>
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
