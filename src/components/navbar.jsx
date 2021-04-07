import React from "react";
// import $ from "jquery";

import logo from "../assets/images/Logo.png"
//logo for navbar needs to be imported here

const Navbar = () => {
  return (
    <div className="et-hero-tabs-container">
      <nav className="main-nav" role='navigation'>
      <a className="et-hero-tab" href="#about">About Us</a>
      <a className="et-hero-tab" href="#practice">Practice Areas</a>
      <img className="mobi-hide"src={logo} alt="Law firm logo"/>
      <a className="et-hero-tab" href="#mission">Our Mission</a>
      <a className="tab-hide et-hero-tab" href="#contact">Contact Us</a>
      </nav>
      <span className="et-hero-tab-slider"></span>

  </div>
  );
};
export default Navbar;
