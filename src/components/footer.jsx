import React from "react";
import logo from "../assets/images/Logo_with_Name.png"
import TOSModal from "./TOS"


const Footer = () => {
  return (
    
    <footer class="text-center text-white">    
      <div class="container p-0">      
          <img class="footer-logo" src={logo} alt="logo"/>
    </div>
      <div class="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
        <h5> © 2021 Copyright :
        <a class="title-team text-decoration-none" href="https://www.Pagliery.com/"> Pagliery.com </a> <span className=" mr-2"></span> <TOSModal/> </h5> 
      </div>
    </footer>
   
  );
};
export default Footer;
