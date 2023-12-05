import React from "react";
import ME from "../../assets/me.jpeg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import "./About.scss";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <a href="#experience">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>6 Monts Working</small>
              </article>
            </a>
            <a href="#portfolio">
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>Go to Portfolio !</small>
              </article>
            </a>
          </div>
          <p style={{ padding: "10px 0" }}>
            I successfully completed Danisoft Academy’s Front-End Development
            course. Front-End Development is something that I am passionate
            about, when I do my work and it is my pleasure to learn new things
            day by day and become better at my profession. You’ll find me an
            enthusiastic, friendly and a reliable person. I’m hard-working and a
            good team player. I would love to bring my skills, knowledge and
            passion to your organization.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
