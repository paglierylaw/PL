import React from "react";
import logo from "../assets/images/logo_w_text_color.png"


// import '../assets/css/navbar.scss';
// import $ from "jquery";
//logo for navbar needs to be imported here

const Hero = () => {
  return (
    <section id="home" className="heroContainer container-fluid">
    <div className="hero">
      <img className="heroLogo" src={logo} alt="classic Sergio Pagliery law"/>
    </div>
    </section>
  );
};
export default Hero;
