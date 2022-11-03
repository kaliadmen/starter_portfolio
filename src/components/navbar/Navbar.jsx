import './navbar.css';
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import {BiBook, BiMessageDots} from "react-icons/bi";
import {useState} from "react";
import {BsTools} from "react-icons/bs";


const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#home");

  return (
      <nav>
        {/*<a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home " ? "active": ""}><AiOutlineHome/></a>*/}
        <a href="#" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "active": ""}><AiOutlineHome/></a>
        <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active": ""}><AiOutlineUser/></a>
        <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active": ""}><BiBook/></a>
        <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active": ""}><BsTools/></a>
        <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active": ""}><BiMessageDots/></a>
      </nav>
  );
};

export default Navbar;
