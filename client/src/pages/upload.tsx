import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import Modal from '../components/Modal'
import useModal from '../hooks/useModal'
import useRadio from '../hooks/useRadio'
import useToleranceToggle from '../hooks/useToleranceToggle'
import Button from '../components/UI/button'
import RadioButton from '../components/UI/radio'
import '../styling/upload.styling.scss'
import SelectClientType from '../components/ClientType'
import DropDown from '../components/UI/dropDown'
import { importOptions } from '../mockData/clientData'
import Toggle from '../components/toggleTolerance'
import HR from '../components/UI/hr'
export { importOptions } from '../mockData/clientData'

export default function Upload() {
  const { isOpen, toggle } = useModal()
  const { selectRadio, handleDistanceChange } = useRadio()
  const { toleranceOptions, handleToggle } = useToleranceToggle()

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
              <hr />
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
                      width: '25%',
                      height: '.5px',
                      backgroundColor: '#aebac5',
                    }}
                  />
                </div>
                <div className="uploadSection">
                  <h3>Select a manifest that you'd like to import</h3>
                </div>
                <hr />
                <div className="elapseData">
                  <h4>Elapse Data Checking:</h4>
                  <h4 id="greenFonts">No Elapsed Dates!</h4>
                </div>
                <hr />
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
                  <hr />
                </div>

                <div className="locationSection">
                  <h4>Location Checking</h4>
                  <h4 id="greenFonts">All Available!</h4>
                  <hr />
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
                  <Button>Continue Import</Button>

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
