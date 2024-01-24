import { clientData } from '../mockData/Data'
import useSelectClient from '../hooks/useSelectClient'
import RadioButton from './UI/radio'
import '../styling/components/clientType.styling.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const SelectClientType: React.FC = (): JSX.Element => {
  const { selectClient, handleClientTypeChange } = useSelectClient()
  return (
    <div className="container">
      <h4 id="client">Client:</h4>
      <label>
        <RadioButton
          name="clientType"
          value="single"
          label="Single"
          checked={selectClient === 'single'}
          onChange={handleClientTypeChange}
        />
        <RadioButton
          name="clientType"
          value="multiple"
          label="Multiple"
          checked={selectClient === 'multiple'}
          onChange={handleClientTypeChange}
        />
      </label>
      {selectClient === 'single' ? (
        <div className="testCenterSelection">
          <label>
            <h4 className="centerHeader">Testing Center 1:</h4>
            <select defaultValue="">
              <option value="" disabled>
                Select Client
              </option>
              {clientData.map((client) => (
                <option key={client.id} value={client.id}>
                  {client.client}
                </option>
              ))}
            </select>
            <FontAwesomeIcon
              icon={faClock}
              size="lg"
              style={{ position: 'relative', left: '10px', bottom: '.5px' }}
            />
          </label>
        </div>
      ) : (
        <div className="testCenterSelection">
          {[1, 2, 3, 4].map((centerNumber) => (
            <label key={centerNumber}>
              <h4 className="centerHeader">{`Testing Center ${centerNumber}:`}</h4>
              <select defaultValue="">
                <option value="" disabled>
                  Select Client
                </option>
                {clientData.map((client) => (
                  <option key={client.id} value={client.id}>
                    {client.client}
                  </option>
                ))}
              </select>
              <FontAwesomeIcon
                icon={faClock}
                size="lg"
                style={{ position: 'relative', left: '10px', bottom: '.5px' }}
              />
            </label>
          ))}
        </div>
      )}
    </div>
  )
}

export default SelectClientType
