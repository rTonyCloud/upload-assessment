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

const FileUpload: React.FC<FileUploadProps> = (
  props: FileUploadProps
): JSX.Element => {
  const {
    selectedFile,
    handleFileChange,
    handleDragOver,
    handleDrop,
    uploadRef,
  } = props

  return (
    <section className="fileUpload">
      <div
        className="fileUploadContainer"
        onDragOver={handleDragOver}
        onDrop={handleDrop}>
        <div className="fileUploadContainerText">
          <FontAwesomeIcon
            icon={faFile}
            size="2xl"
            style={{ color: '#FFD43B' }}
            className="fileIcon"
          />
          <h5>
            Drag & drop here or{' '}
            <span className="browse" ref={uploadRef} onClick={() => handleFileChange}>
              browse
            </span>
          </h5>
          {/* <div>
            <input
              type="file"
              name="file"
              id="file"
              ref={uploadRef}
              onChange={handleFileChange}
              style={{ width: '300px', height: '100px' }}
            />
          </div> */}
        </div>
        <Button
          onClick={() => {
            handleFileChange
          }}
          sx={{ height: '40px' }}>
          Upload Manifest
        </Button>
      </div>
      <div className="fileUploadResult">
        <HR />
        <div className="fileUploadResultText">
          {selectedFile && (
            <>
              <span className="file-name">{selectedFile.name}</span>
              <span className="file-size">
                {(selectedFile.size / 1024 / 1024).toFixed(2)}MB
              </span>
            </>
          )}
        </div>
        <HR />
      </div>
    </section>
  )
}

export default FileUpload
