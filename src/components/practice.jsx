import React from "react";
import logo from '../assets/images/Logo.png';
// import $ from 'jquery';


const Practice = () => {
  return (
    <section className="practice-section">
        <div className="aboutTitle">
        <h1 className="mb-2">Our <b className="title-team">Practice</b></h1>
        <h5 className="aboutSubText">Our practice is your solution.</h5>
        <hr className="hr-text mb-5" data-content="§"/>
        </div>
<div className="carousel shadow-6">
  <div className="logo_div"><img className="carousel__logo" src={logo} alt="sergio pagliery logo"/></div>
  <div className="carousel__nav">
   <span id="moveLeft" className="carousel__arrow">
        <svg className="carousel__icon" width="24" height="24" viewBox="0 0 24 24">
    <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11p0Z"></path>
</svg>
    </span>
    <span id="moveRight" className="carousel__arrow" >
      <svg className="carousel__icon"  width="24" height="24" viewBox="0 0 24 24">
  <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
</svg>    
    </span>
  </div>
  <div className="carousel-item carousel-item--1">
    <div className="carousel-item__image"></div>
    <div className="carousel-item__info">
      <div className="carousel-item__container">
      <p className="carousel-item__subtitle">Commercial <span style={{color:"red"}}>&amp;</span> Residential </p>
      <h1 className="carousel-item__title">Real <span className="title-team">Estate</span></h1>
      <p className="carousel-item__description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
      
        </div>
    </div>
  </div>
  <div className="carousel-item carousel-item--2">
    <div className="carousel-item__image"></div>
    <div className="carousel-item__info">
      <div className="carousel-item__container">
      <p className="carousel-item__subtitle"> Trust <span style={{color:"red"}}>&amp;</span> Will  </p>
      <h1 className="carousel-item__title">Estate <span className="title-team">Planning</span></h1>
      <p className="carousel-item__description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
      
        </div>
    </div>
  </div>
    <div className="carousel-item carousel-item--3">
    <div className="carousel-item__image"></div>
    <div className="carousel-item__info">
      <div className="carousel-item__container">
      <p className="carousel-item__subtitle">Complex</p>
      <h1 className="carousel-item__title">Business <span className="title-team">Litigation</span></h1>
      <p className="carousel-item__description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
      
        </div>
    </div>
  </div>
  
   <div className="carousel-item carousel-item--4">
    <div className="carousel-item__image"></div>
    <div className="carousel-item__info">
      <div className="carousel-item__container">
      <p className="carousel-item__subtitle">Financial <span style={{color:"red"}}>&amp;</span> Legal </p>
      <h1 className="carousel-item__title">Business <span className="title-team">Transactions</span> </h1>
      <p className="carousel-item__description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
      
        </div>
    </div>
  </div>
  
</div>
</section>
  );
};
export default Practice;