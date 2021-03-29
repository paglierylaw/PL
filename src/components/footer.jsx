import React from "react";
import logo from "../assets/images/Logo_with_Name.png"


const Footer = () => {
  return (
    
    <footer class="text-center text-white">    
      <div class="container p-0">      
          <img class="footer-logo" src={logo} alt="logo"/>
    </div>
      <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
        © 2020 Copyright:
        <a class="text-white" href="https://www.Pagliery.com/"> Pagliery.com</a>
      </div>
    </footer>
   
  );
};
export default Footer;
