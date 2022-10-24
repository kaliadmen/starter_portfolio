

import Header from "./components/header/Header";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import Portfolio from "./components/porfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
      <>
        <Header/>
        <Navbar/>
        <About />
        <Experience/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Footer/>
      </>
  );
};

export default App;
