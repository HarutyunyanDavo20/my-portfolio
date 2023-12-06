import React from "react"
import "./EditRow.css"

type Props = {
  title: string
  placeholder: string
}

const EditRow = (props: Props) => {
  return (
    <div className="admin__edit_labels_component">
      <span className="admin__edit_labels_component_title">{props.title}:</span>
      <input
        className="admin__edit_labels_component_input"
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default EditRow
