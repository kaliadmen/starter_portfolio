import './portfolio.css';
import {data} from "../../projects";

const Portfolio = () => {
  return (
      <section id="portfolio">
        <h5>My</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
          {
            data.map(({id, image, title, github, demo}) => {
              return (
                  <article className="portfolio__item" key={id}>
                    <div className="portfolio__item-image">
                      <img src={image} alt="project"/>
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio__item-cta">
                      <a href={github.url} className={github.enabled ? "btn" : "btn btn-disabled"} target="_blank" rel="noreferrer">Github</a>
                      <a href={demo.url} className={demo.enabled ? "btn btn-primary" : "btn btn-disabled"} target="_blank" rel="noreferrer">Demo</a>
                    </div>
                  </article>
              )
            })
          }
        </div>
      </section>
  );
};

export default Portfolio;
