import '../styling/upload.styling.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import Modal from '../components/Modal'
import useModal from '../hooks/useModal'
import useRadio from '../hooks/useRadio'
import useToleranceToggle from '../hooks/useToleranceToggle'
import Button from '../components/UI/button'
import RadioButton from '../components/UI/radio'
import SelectClientType from '../components/ClientType'
import DropDown from '../components/UI/dropDown'
import { importOptions } from '../mockData/Data'
import Toggle from '../components/toggleTolerance'
import HR from '../components/UI/hr'
import FileUpload from '../components/FileUpload'
import useUpload from '../hooks/useUpload'

export default function Upload() {
  const { isOpen, toggle } = useModal()
  const { selectRadio, handleDistanceChange } = useRadio()
  const { toleranceOptions, handleToggle } = useToleranceToggle()
  const { inputRef, file, uploadFileHandler, handleDrop, handleDrag } =
    useUpload()
  return (
    <>
      <Button onClick={toggle}>Upload Now</Button>
      <Modal toggle={toggle} isOpen={isOpen}>
        <button onClick={toggle} className="uploadBtn">
          <FontAwesomeIcon icon={faX} />
        </button>
        <div className="modalContainer">
          <div className="modalWrapper">
            <div className="modalHeader">
              <h1>Document Upload</h1>
              <HR
                style={{
                  width: '30%',
                  height: '.5px',
                  left: '.1vw',
                  backgroundColor: '#aebac5',
                }}
              />
            </div>
            <div className="modalBody">
              <section className="modalBodyLeft">
                <div className="dropdownImport">
                  <DropDown
                    placeholder="Select Import Name:"
                    onSelect={() => {}}
                    options={importOptions}
                  />
                  <HR
                    style={{
                      width: '53%',
                      height: '.5px',
                      backgroundColor: '#aebac5',
                    }}
                  />
                </div>
                <div className="uploadSection">
                  <div className="uploadSectionText">
                    <h3>Select a manifest that you'd like to import</h3>
                  </div>
                  <FileUpload
                    selectedFile={file}
                    handleFileChange={uploadFileHandler}
                    handleDragOver={handleDrag}
                    handleDrop={handleDrop}
                    uploadRef={inputRef}
                  />
                </div>
                <HR
                  style={{
                    width: '40%',
                    top: '1.5vh',
                    right: '9.5vw',
                    backgroundColor: '#e0e8eff5',
                  }}
                />
                <div className="elapseData">
                  <h4>Elapse Data Checking:</h4>
                  <h5 id="greenFonts">No Elapsed Dates!</h5>
                </div>
                <HR
                  style={{
                    width: '40%',
                    bottom: '1.5vh',
                    right: '9.5vw',
                    backgroundColor: '#e0e8eff5',
                  }}
                />
                <div className="toleranceSection">
                  <h4>Tolerance Window:</h4>
                  <Toggle
                    onToggle={handleToggle}
                    toleranceOptions={toleranceOptions}
                  />
                </div>
              </section>
              <section className="modalBodyRight">
                <div className="socialDistancingSection">
                  <h4>Split schedule using social distancing</h4>
                  <div className="socialDistancingRadio">
                    <RadioButton
                      name="socialDistancing"
                      value="yes"
                      label="Yes"
                      checked={selectRadio === 'yes'}
                      onChange={handleDistanceChange}
                    />
                    <RadioButton
                      name="socialDistancing"
                      value="no"
                      label="No"
                      checked={selectRadio === 'no'}
                      onChange={handleDistanceChange}
                    />
                  </div>
                  <HR
                    style={{
                      width: '60%',
                      top: '1.5vh',
                      right: '6.6vw',
                      backgroundColor: '#e0e8eff5',
                    }}
                  />
                </div>
                <div className="locationSection">
                  <h4>Location Checking</h4>
                  <h4 id="greenFonts">All Available!</h4>
                  <HR
                    style={{
                      width: '60%',
                      bottom: '1.5vh',
                      right: '6.6vw',
                      backgroundColor: '#e0e8eff5',
                    }}
                  />
                </div>
                <div className="clientSection">
                  <SelectClientType />
                </div>
              </section>
              <section className="modalFooter">
                <div className="modalFooterText">
                  <h3>
                    Data in the import file is correct. Please press Continue to
                    import.
                  </h3>
                </div>
                <div className="footerBtn">
                  <Button sx={{ width: '30px', height: '50px' }}>
                    Continue Import
                  </Button>
                  <Button variant="orange">Cancel</Button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
