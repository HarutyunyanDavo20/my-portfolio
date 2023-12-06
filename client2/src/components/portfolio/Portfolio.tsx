import React from "react"
import CHAT from "../../assets/chat.png"
import STORE from "../../assets/online-store.jpg"
import "./Portfolio.css"

const data = [
  {
    id: 1,
    image: CHAT,
    title: "Online Chat",
    github: "https://github.com/HarutyunyanDavo20/Online-Chat",
    demo: "https://beamish-kelpie-b6594f.netlify.app/",
  },
  {
    id: 2,
    image: STORE,
    title: "Online Store",
    github: "https://github.com/HarutyunyanDavo20/store-next-app/tree/main",
    demo: "https://online45d.herokuapp.com/",
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div style={{ height: "55%" }}>
                <div className="portfolio__item-image">
                  <img src={image} alt={title}></img>
                </div>
              </div>

              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} target="blank" className="btn">
                  GitHub
                </a>
                <a href={demo} target="blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
