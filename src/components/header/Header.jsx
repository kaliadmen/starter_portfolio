import "./header.css";
import CTA from "./CTA";
import profilePic from  "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
      <header>
        <div className="container header__container">
          <h2>Brandon Worthy</h2>
          <h1 className="text-light">
            Fullstack Developer
          </h1>
          {/*  call to action*/}
          <CTA/>

          <HeaderSocials/>

          <div className="profilePic">
            <img src="https://via.placeholder.com/400" alt="profile"/>
            {/*<img src={profilePic} alt="profile"/>*/}
          </div>

          <a href="#portfolio" className="scroll__down">See More</a>

        </div>
      </header>
  );
};

export default Header;
