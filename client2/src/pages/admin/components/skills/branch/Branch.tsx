import React from "react"
import { FaRegEdit } from "react-icons/fa"
import { IoMdRemoveCircle } from "react-icons/io"

type Props = {
  uuid: string
  name: string
}

const Branch = (props: Props) => {
  const [isEditing, setIsEditing] = React.useState<boolean>(false)

  const handleEditBranch = () => setIsEditing(!isEditing)

  return (
    <div className="admin__skill_branch">
      <div className="admin__skill_branch_input">
        {isEditing ? <input placeholder={props.name} /> : props.name}
      </div>
      <FaRegEdit
        onClick={handleEditBranch}
        size={25}
        className="admin__action_btn"
      />
      <IoMdRemoveCircle size={25} className="admin__action_btn" />
    </div>
  )
}

export default Branch
