import { FaFacebook, FaWhatsapp } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Davit Harutyunyan
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/Davo2015">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/harutyunyandavo20/">
          <FiInstagram />
        </a>
        <a href="https://api.whatsapp.com/send?phone=+37499001112">
          <FaWhatsapp />
        </a>
      </div>

      <div className="footer__copyright">
        <small> &copy; </small>
      </div>
    </footer>
  )
}

export default Footer
