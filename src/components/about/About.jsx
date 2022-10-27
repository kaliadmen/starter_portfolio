import './about.css';
import AboutImage from "../../assets/me-about.jpg";
import {FaAward} from "react-icons/fa";
import {FiUser} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";

const About = () => {
  return (
      <section id="about">
        <h5>Here's more</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__image">
              <img src={AboutImage} alt="about me"/>
            </div>
          </div>
          <div className="about__content">
              <div className="about__cards">
                <article className="about__card">
                  <FaAward className="about__icon"/>
                  <h5>Experience</h5>
                  <small>3 + years</small>
                </article>

                <article className="about__card">
                  <FiUser className="about__icon"/>
                  <h5>Clients</h5>
                  <small>3</small>
                </article>

                <article className="about__card">
                  <VscFolderLibrary className="about__icon"/>
                  <h5>Projects</h5>
                  <small>5 completed</small>
                </article>
              </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Deserunt, dicta, illum! Aperiam dolor ipsa ipsam minima nihil
              non porro quibusdam quis repellat repellendus sunt, tempore
              totam velit voluptas voluptatum? Molestias.</p>

            <a href="#contact" className="btn btn-primary">Get in Touch</a>
            </div>

        </div>
      </section>
  );
};

export default About;
