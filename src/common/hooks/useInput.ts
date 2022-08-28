import { useState } from "react"

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue)

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }
  const resetValue = () => setValue(initialValue)

  return [{ value, onChange }, resetValue] as const
}
