import React from "react";
import logo from '../assets/images/Logo.png';
// import $ from 'jquery';


const Practice = () => {
  return (
    <section id="practice" className="practice-section">
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
      <h1 className="carousel-item__title"><span className="title-team">Transactions</span> </h1>
      <p className="carousel-item__description">Whatever your business needs may be, our firm has the experience to accomplish your goals. We provide full-scope representation from forming your business to meeting your day-to-day business needs. Our firm represents clients in a variety of business transactions including but not limited to purchasing of cash-flowing properties and businesses, acquisition and disposition of distressed assets, mergers and acquisitions, liquidations and dissolutions, and commercial leasing matters. </p>
      
        </div>
    </div>
  </div>
  <div className="carousel-item carousel-item--2">
    <div className="carousel-item__image"></div>
    <div className="carousel-item__info">
      <div className="carousel-item__container">
      <h1 className="carousel-item__title">Asset <span className="title-team">Protection</span></h1>
      <p className="carousel-item__description">Our firm specializes in providing our clients with asset protection and diversification by creating a unique asset structuring plan tailored for their unique circumstances. We pride ourselves in offering our clients tranquility in the asset protection needed to accumulate and administer wealth. </p>
      
        </div>
    </div>
  </div>
  <div className="carousel-item carousel-item--3">
    <div className="carousel-item__image"></div>
    <div className="carousel-item__info">
      <div className="carousel-item__container">
      <h1 className="carousel-item__title">Real <span className="title-team">Estate</span></h1>
      <p className="carousel-item__description">Our firm has been serving our clients’ real estate needs for well over two decades. Over the years we have successfully represented our clients in numerous commercial and residential transactions of all sizes, both locally and internationally. </p>
      
        </div>
    </div>
  </div>
  <div className="carousel-item carousel-item--4">
    <div className="carousel-item__image"></div>
    <div className="carousel-item__info">
      <div className="carousel-item__container">
      <h1 className="carousel-item__title">Estate <span className="title-team">Planning</span></h1>
      <p className="carousel-item__description">Furthering and protecting our clients’ financial legacies is at the forefront of importance. Whether it involves the distribution of property upon death, the administration of assets in the event of incapacity, or the development of a family succession plan, our firm is well equipped to accomplish our clients’ objectives. </p>
      
        </div>
    </div>
  </div>
</div>
</section>
  );
};
export default Practice;