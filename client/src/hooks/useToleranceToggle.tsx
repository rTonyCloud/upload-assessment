export default function useToleranceToggle() {
  const toleranceOptions = ['Low', 'Medium', 'High']

  const handleToggle = (isOn: boolean, toleranceLevel?: string) => {
    console.log(`Toggle is ${isOn ? 'ON' : 'OFF'}`)
    if (toleranceLevel) {
      console.log(`Selected tolerance level: ${toleranceLevel}`)
    }
  }
  return {
    toleranceOptions,
    handleToggle,
  }
}
