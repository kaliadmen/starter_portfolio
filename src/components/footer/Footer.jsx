import './footer.css';
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";

const Footer = () => {
  return (
      <footer>
        <a href="#" className="footer__logo">WORTHY</a>

        <ul className="permalinks">
          <li className="permalink"><a href="#">Home</a></li>
          <li className="permalink"><a href="#about">About</a></li>
          <li className="permalink"><a href="#experince">Experience</a></li>
          <li className="permalink"><a href="#services">Services</a></li>
          <li className="permalink"><a href="#portfolio">Portfolio</a></li>
          <li className="permalink"><a href="#testimonials">Testimonials</a></li>
          <li className="permalink"><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/brandon-worthy-3b093712a" target="_blank" rel="noreferrer"><BsLinkedin/></a>
          <a href="https://github.com/kaliadmen" target="_blank" rel="noreferrer"><FaGithub/></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; WORTHY All rights reserved</small>
        </div>
      </footer>
  );
};

export default Footer;
