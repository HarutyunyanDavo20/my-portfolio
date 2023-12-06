import React from "react"
import { BiCheck } from "react-icons/bi"
import "./Services.css"

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive web design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>SSR Application</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <span style={{ color: "white", fontWeight: "bold" }}>24/7</span>{" "}
                available application
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
