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
              <img src="https://via.placeholder.com/600" alt="about me"/>
              {/*<img src={AboutImage} alt="about me"/>*/}
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

            <p>I'm a developer with several years of experience. I started  programming on my own with C++ while in middle school. l immediately ran into some tough difficulties.
            I didn't give up but I also didn't pursue it with the true passion I had for programming. After doing it for years as a hobby, I decided to dive all in on programming. With the boom of the internet
              I've been able to use a wide variety of technologies. I've built things such as websites, content management systems, web crawlers, and port scanners.
              My knowledge and understanding of technology helps me help others build and work more efficiently.</p>

            <a href="#contact" className="btn btn-primary">Get in Touch</a>
            </div>

        </div>
      </section>
  );
};

export default About;
