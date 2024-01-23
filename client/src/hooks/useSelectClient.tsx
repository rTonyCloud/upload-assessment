import React, { ChangeEvent } from 'react'

type ClientType = 'single' | 'multiple'

export default function useRadio() {
  const [selectClient, setSelectClient] = React.useState<ClientType>('single')

  const handleClientTypeChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectClient(event.target.value as ClientType)
  }

  return {
    selectClient,
    handleClientTypeChange,
  }
}
