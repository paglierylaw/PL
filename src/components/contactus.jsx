import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";
init("user_lSzJ0dRlGcysjfHvof9Yv");
const Contact = () => {
  const [contactNumber, setContactNumber] = useState("000000");
  // const formThankyou = () =>{
  //     var formElement = document.getElementsByClassName(".contact-container");
  //     var thankYouElement = document.getElementsByClassName(".thankyou-div");
  //     formElement.classList.add("hidden");
  //     thankYouElement.classList.remove("hidden");

  // }
  const generateContactNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };
  const { register, handleSubmit, reset, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    generateContactNumber();
    sendForm("default_service", "ContactForm", "#contact-form").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
    reset();
    alert("")
    // formThankyou();
  };

  return (
      <section id="contact" className="contact-section">
    <div className="contact-container bbox shadow-6">
  <div className="row header bbox contact-top">
    <h1 className="contact-title">&bull; CONTACT <span>US</span> &bull;<hr className="hr-text mt-0"/></h1>
    <div className="contact-socials">
    <div className="address">
    <i className="fas fa-map-marker-alt mb-2"></i>
    <a className="no-text-decoration" href="https://goo.gl/maps/n52yKjk1B2iDY12G6" target="_blank" rel="noopener noreferrer"><p>
      8788 SW 8th St. <br/>
      Miami, FL
    </p></a>
  </div>
  <div className="phone">
    <i className="fas fa-phone-alt mb-3"></i>
    <a className="no-text-decoration" href="tel:305-228-7672"><p>(305) 228-7672</p></a>
  </div>
  </div>
  </div>
  <div className="row body bbox">
    <form action="#" className="front" id="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="contact_number" value={contactNumber} />
      <ul>
         <li>
           
          <p className="left">
            <label htmlFor="FirstName">First Name</label>
            
            {errors.FirstName && errors.FirstName.type === "required" && (
          <div role="alert">
            First Name is required
            <br />
          </div>
        )}
        {errors.FirstName && errors.FirstName.type === "maxLength" && (
          <div role="alert">
            First Name must be shorter than 80 characters
            <br />
          </div>
        )}
        {errors.FirstName && errors.FirstName.type === "pattern" && (
          <div role="alert">
            First Name is not valid. Please do not use special characters
            <br />
          </div>
        )}
        <input
        className="form-control"
          type="text"
          name="FirstName"
          ref={register({
            required: true,
            maxLength: 80,
            pattern: /^[a-z ,.'-]+$/i,
          })}
        />
          </p>
          <p className="pull-right">
            <label htmlFor="LastName">Last Name</label>
             {errors.LastName && errors.LastName.type === "required" && (
          <div role="alert">
            Last Name is required
            <br />
          </div>
        )}
        {errors.LastName && errors.LastName.type === "maxLength" && (
          <div role="alert">
            Last Name must be shorter than 80 characters
            <br />
          </div>
        )}
        {errors.LastName && errors.LastName.type === "pattern" && (
          <div role="alert">
            Last Name is not valid. Please do not use foreign characters
            <br />
          </div>
        )}
        <input
        className="form-control"
          type="text"
          name="LastName"
          ref={register({
            required: true,
            maxLength: 100,
            pattern: /^[a-z ,.'-]+$/i,
          })}
        />      
          </p>
        </li>
        <li>
          <p className="left">
            <label htmlFor="Email">Email</label>
            {errors.Email && errors.Email.type === "required" && (
          <div role="alert">
            Email is required
            <br />
          </div>
        )}
        {errors.Email && errors.Email.type === "pattern" && (
          <div role="alert">
            Email is not valid.
            <br />
          </div>
        )}
        <input
        className="form-control"
          type="text"
          name="Email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />

          </p>
           <p className="pull-right">
            <label htmlFor="MobileNumber">Contact Number</label>
            {errors.MobileNumber && errors.MobileNumber.type === "required" && (
          <div role="alert">
            Mobile Number is required
            <br />
          </div>
        )}
        {errors.MobileNumber && errors.MobileNumber.type === "pattern" && (
          <div role="alert">
            Mobile Number is not valid.
            <br />
          </div>
        )}
        <input
        className="form-control"
          type="tel"
          name="MobileNumber"
          ref={register({
            required: true,
            maxLength: 12,
            pattern: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i,
          })}
        />
          </p>
        </li>        
        <hr className="hr-text mb-3 mt-3"/>
        <li>
          <p>
            <label htmlFor="Subject">Subject</label>
            {errors.Subject && errors.Subject.type === "required" && (
          <div role="alert">
            Subject is required
            <br />
          </div>
        )}
        {errors.FirstName && errors.FirstName.type === "maxLength" && (
          <div role="alert">
            Subject must be shorter than 100 characters
            <br />
          </div>
        )}
        <input
        className="form-control"
          type="text"
          name="Subject"
          ref={register({ required: true, maxLength: 100 })}
        />
          </p>
          </li>
        <li>
          <label htmlFor="comments">Message</label>
          <textarea cols="46" rows="3" name="Message" ref={register}></textarea>
        </li>
        
        <li>
          <input className="btn" type="submit" value="Send" />
          <small>or press <strong>enter</strong></small>
        </li>
        
      </ul>
    </form>  
  </div>
</div>
	{/* <div className="thankyou-div text-center hidden">
            <h1> Thank You!</h1>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
            <p>We will contact you regarding your inquiry as soon as possible!</p>
    </div> */}
    </section>
  );
};
export default Contact;
