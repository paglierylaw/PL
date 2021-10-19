import React from "react";
// import logo from "../assets/images/logo_w_text_color.png"
import TOSModal from "./TOS"


const Footer = () => {
  return (
    
    // <footer class="text-center text-white">
    //   <hr class="hr-text" data-content="§"/>    
    //   <div class="container p-0">      
    //       <img class="footer-logo" src={logo} alt="logo"/>
    // </div>
    //   <div class="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    //     <h5> © 2021 Copyright :
    //     <a class="title-team text-decoration-none" href="https://www.Pagliery.com/"> Pagliery.com </a> <span className=" mr-2"></span> <TOSModal/> </h5> 
    //   </div>
    // </footer>
    // <!-- Site footer -->

    <footer class="site-footer mt-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-9">
            <h6>Disclaimer</h6>
            <p class="text-justify">Pagliery Law Firm, PLLC provides this website for informational purposes only. It is not intended to, and does not, constitute legal advice or a legal opinion. By reading this website, contacting Pagliery Law Firm, PLLC via phone or via the contact form, no attorney client relationship is formed. No attorney client relationship is formed until a formal retainer is signed between the attorney and client.            
            </p>
          </div>



          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#practice">Practice</a></li>
              <li><a href="#mission">Mission</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><TOSModal/></li>
            </ul>
          </div>
        </div>
        <hr class="hr-text"/> 
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
         <a href="#"> Michel Digital </a>
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fab fa-facebook-f"></i></a></li>
              <li><a class="twitter" href="#"><i class="fab fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fab fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fab fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>

   
  );
};
export default Footer;
