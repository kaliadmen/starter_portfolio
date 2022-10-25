import "./header.css";
import CTA from "./CTA";
import profilePic from  "../../assets/me2.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
      <header>
        <div className="container header__container">
          <h5>Hi I'm</h5>
          <h1>Brandon Worthy</h1>
          <h5 className="text-light">
            Fullstack Developer
          </h5>
          {/*  call to action*/}
          <CTA/>

          <HeaderSocials/>

          <div className="profilePic">
            <img src={profilePic} alt="profile"/>
          </div>

          <a href="#portfolio" className="scroll__down">See More</a>

        </div>
      </header>
  );
};

export default Header;
