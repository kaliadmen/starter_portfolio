import './experience.css';
import {BsCheck2Circle} from "react-icons/bs";

const Experience = () => {
  return (
      <section id="experience">
        <h5>Some of my skills</h5>
        <h2>Experience</h2>

        <div className="container exp__container">
          <div className="exp__frontend">
            <h3>Frontend Experience</h3>
            <div className="exp__content">
              <article className="exp__details">
                <BsCheck2Circle className="exp__details-icon" />
                <div>
                  <h4>SASS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="exp__details">
                <BsCheck2Circle className="exp__details-icon" />
                <div>
                  <h4>React</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

              <article className="exp__details">
                <BsCheck2Circle className="exp__details-icon" />
                <div>
                  <h4>Javascript</h4>
                  <small className="text-light">Pro</small>
                </div>
              </article>

              <article className="exp__details">
                <BsCheck2Circle className="exp__details-icon" />
                <div>
                  <h4>Tailwind CSS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="exp__details">
                <BsCheck2Circle className="exp__details-icon" />
                <div>
                  <h4>Typescript</h4>
                  <small className="text-light">Novice</small>
                </div>
              </article>
            </div>
          </div>

          <div className="exp__backend">
            <h3>Backend Experience</h3>
            <div className="exp__content">
              <article className="exp__details">
                <BsCheck2Circle className="exp__details-icon" />
                <div>
                  <h4>Golang</h4>
                  <small className="text-light">Pro</small>
                </div>
              </article>

              <article className="exp__details">
                <BsCheck2Circle className="exp__details-icon" />
                <div>
                  <h4>PHP</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

              <article className="exp__details">
                <BsCheck2Circle className="exp__details-icon" />
                <div>
                  <h4>Python</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="exp__details">
                <BsCheck2Circle className="exp__details-icon" />
                <div>
                  <h4>Node JS</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

              <article className="exp__details">
                <BsCheck2Circle className="exp__details-icon" />
                <div>
                  <h4>MongoDB</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Experience;
