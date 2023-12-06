import React, { ChangeEvent, useState } from "react"
import { GrAdd } from "react-icons/gr"
import Branch from "../branch/Branch"
import { IBranch } from "../../../../../app/slices/User/userSlice"

type Props = {
  uuid: string
  name: string
  branches: IBranch[]
}

const Skill = (props: Props) => {
  const [isAddingNewBranch, setIsAddingNewBranch] = useState<boolean>(false)
  const [newBranch, setNewBranch] = useState<string>("")

  const changeNewBranch = (e: ChangeEvent<HTMLInputElement>) =>
    setNewBranch(e.target.value)
  const handleAddNewBranch = () => setIsAddingNewBranch(!isAddingNewBranch)

  return (
    <>
      <div className="admin__skill">{props.name}</div>
      <div className="admin__skill_branches">
        {props.branches.map((branch) => (
          <Branch key={branch.uuid} uuid={props.uuid} name={branch.name} />
        ))}
        {isAddingNewBranch ? (
          <div className="admin__adding_new_branch_btn">
            <div className="admin__skill_branch_input">
              <input
                placeholder="New branch"
                value={newBranch}
                onChange={changeNewBranch}
              />
            </div>
            <div className="admin__skills_add_new_brach_btn">
              <GrAdd onClick={handleAddNewBranch} size={25} color="orange" />
            </div>
          </div>
        ) : null}
        <div className="admin__skills_open_input_adding_branch">
          <GrAdd onClick={handleAddNewBranch} size={25} color="greenyellow" />
        </div>
      </div>
    </>
  )
}

export default Skill
