import React, { useState } from "react"

type Props = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}

const Input = (props: Props) => {

  const [inputValue, setInputValue] = useState<string>(props.value)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    props.onChange(e)
  }

  return (
    <input
      className="admin__edit_labels_component_input"
      value={inputValue}
      onChange={handleOnChange}
      placeholder={props.placeholder}
    />
  )
}

export default Input
