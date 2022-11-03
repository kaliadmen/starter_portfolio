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
                <p>UX/UI designs</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>And more...</p>
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
                <p>Wordpress themes</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Custom web applications</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>And more...</p>
              </li>
            </ul>
          </article>
        </div>
      </section>
  );
};

export default Services;
