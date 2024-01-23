import Toggle from './UI/toggle'
import clientData from '../mockData/clientData'
import useSelectClient from '../hooks/useSelectClient'

const SelectClientType: React.FC = (): JSX.Element => {
  const { selectClient, handleClientTypeChange } = useSelectClient()
  return (
    <div>
      <h3>Client:</h3>
      <label>
        <Toggle
          name="clientType"
          value="single"
          label="Single"
          checked={selectClient === 'single'}
          onChange={handleClientTypeChange}
        />
        <Toggle
          name="clientType"
          value="multiple"
          label="Multiple"
          checked={selectClient === 'multiple'}
          onChange={handleClientTypeChange}
        />
      </label>
      {selectClient === 'single' ? (
        <div>
          <label>
            <h4>Testing Center 1:</h4>
            <select>
              {clientData.map((client) => (
                <option key={client.id} value={client.id}>
                  {client.client}
                </option>
              ))}
            </select>
          </label>
        </div>
      ) : (
        <div>
          {[1, 2, 3, 4].map((centerNumber) => (
            <label key={centerNumber}>
              <h4>{`Testing Center ${centerNumber}:`}</h4>
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
            </label>
          ))}
        </div>
      )}
    </div>
  )
}

export default SelectClientType
