import { useState, ChangeEvent } from 'react'

import clientData from '../mockData/clientData'

type ClientType = 'single' | 'multiple'

const SelectClientType: React.FC = (): JSX.Element => {
  const [selectClient, setSelectClient] = useState<ClientType>('single')

  const handleClientTypeChange = (
    event: ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectClient(event.target.value as ClientType)
  }

  return (
    <div>
      <h3>Client Type:</h3>
      <label>
        Client Type:
        <select value={selectClient} onChange={handleClientTypeChange}>
          <option value="Single">Single</option>
          <option value="Multiple">Multiple</option>
        </select>
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
