import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import Modal from '../components/Modal'
import useModal from '../hooks/useModal'
import Button from '../components/UI/button'
import RadioButton from '../components/UI/radio'
import useRadio from '../hooks/useRadio'
import '../styling/upload.styling.scss'
import SelectClientType from '../components/ClientType'

export default function Upload() {
  const { isOpen, toggle } = useModal()
  const { selectRadio, handleDistanceChange } = useRadio()

  return (
    <>
      <Button onClick={toggle}>Upload Now</Button>

      <Modal isOpen={isOpen}>
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
              <section className="modalBodyLeft"></section>

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
