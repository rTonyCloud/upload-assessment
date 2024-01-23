import React from 'react'

export default function useRadio() {
  const [selectRadio, setSelectRadio] = React.useState<string>('null')

  const handleDistanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectRadio(event.target.value)
  }

  return {
    selectRadio,
    handleDistanceChange,
  }
}
