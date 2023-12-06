import React, { useRef } from "react"
import emailjs from "emailjs-com"
import { MdOutlineEmail } from "react-icons/md"
import { RiMessage2Line } from "react-icons/ri"
import { BsWhatsapp } from "react-icons/bs"
import "./Contact.css"

const Contact = () => {
  const form = useRef(null)

  const sendEmail = (e: any) => {
    e.preventDefault()

    if (form.current) {
      emailjs.sendForm(
        "service_84x97eo",
        "template_5m53t6f",
        form.current,
        "7uOwW-hoPa0by4AqX",
      )
    }
    e.target.reset()
  }

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>HarutyunyanDavo22@gmail.com</h5>
            <a href="mailto:HarutyunyanDavo22@gmail.com" target="blank">
              Send a messange
            </a>
          </article>
          <article className="contact__option">
            <RiMessage2Line className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Harutyunyan Davit</h5>
            <a href="https://m.me/Davo2015" target="blank">
              Send a messange
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whats App</h4>
            <h5>+37499001112</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+37499001112"
              target="blank"
            >
              Send a messange
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            autoComplete="off"
          />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            required
            autoComplete="off"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
