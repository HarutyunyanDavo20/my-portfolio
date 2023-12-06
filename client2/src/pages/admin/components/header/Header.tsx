import React, { useState } from "react"
import { ISkill } from "../../../../app/slices/User/userSlice"
import { GrAdd } from "react-icons/gr"
import EditRow from "../editRow/EditRow"
import Skill from "../skills/skill/Skill"
import "./Header.css"

const Header = () => {
  const name = "Davo"
  const position = "CEO"
  const experience = "10 years"
  const [skills, setSkills] = useState<ISkill[]>([
    {
      uuid: "1",
      name: "Frontend",
      branches: [
        { uuid: "1", name: "HTML" },
        { uuid: "2", name: "CSS" },
        { uuid: "3", name: "React JS" },
        { uuid: "4", name: "Redux JS" },
        { uuid: "5", name: "React Native" },
      ],
    },
    {
      uuid: "2",
      name: "Backend",
      branches: [
        { uuid: "1", name: "Node JS" },
        { uuid: "2", name: "Express JS" },
        { uuid: "3", name: "Mongo DB" },
      ],
    },
  ])

  const handleAddNewSkill = () => {
   
  }

  return (
    <div>
      <h3 className="admin__header_title">
        Hi {name}. You can edit your information here
      </h3>
      <div className="admin__edit_labels_components">
        <EditRow title="name" placeholder={name} />
        <EditRow title="position" placeholder={position} />
        <EditRow title="experience" placeholder={experience} />

        <div className="admin__skills">
          <h1 className="admin__skills_title">Skills</h1>
          {skills.map((skill) => (
            <Skill
              key={skill.uuid}
              uuid={skill.uuid}
              name={skill.name}
              branches={skill.branches}
            />
          ))}
          <div
            className="admin__skills_add_new_btn"
            onClick={handleAddNewSkill}
          >
            <GrAdd size={40} color="orange" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
