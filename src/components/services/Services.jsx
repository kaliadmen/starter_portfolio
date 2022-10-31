import './services.css';
import {BiCheck} from "react-icons/bi";

const Services = () => {
  return (
      <section id="services">
        <h5>I offer</h5>
        <h2>Services</h2>

        <div className="container services__container">
          <article className="service">
            <div className="service__head">
              <h3>Design</h3>
            </div>

            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Create UX/UI design of website or app</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Redesign exiting user interfaces</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Logo design</p>
              </li>
            </ul>
          </article>

          <article className="service">
            <div className="service__head">
              <h3>Development</h3>
            </div>

            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Create or customize Wordpress themes</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Create landing pages</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Create or modify APIs</p>
              </li>
            </ul>
          </article>
        </div>
      </section>
  );
};

export default Services;
