import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";

const HeaderSocials = () => {
  return (
      <div className="header__socials">
        <a href="https://www.linkedin.com/in/brandon-worthy-3b093712a" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/kaliadmen" target="_blank"><FaGithub/></a>
      </div>
  );
};

export default HeaderSocials;
