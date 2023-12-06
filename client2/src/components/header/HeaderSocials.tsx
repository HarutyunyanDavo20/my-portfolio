import React from "react"
import { BsLinkedin } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"

type Props = {}

const HeaderSocials = (props: Props) => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/davit-harutyunyan-748bb5239"
        target="blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/HarutyunyanDavo20" target="blank">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/harutyunyandavo20/" target="blank">
        <BsInstagram />
      </a>
    </div>
  )
}

export default HeaderSocials
