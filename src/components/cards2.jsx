import React from "react";
import sergio from '../assets/images/Sergio_Pic.jpg';
import brian from '../assets/images/Brian_Carvajal.jpg';
import javier from '../assets/images/Javier_Pagliery.jpg';
import Bmodal from './brianmodal';
import Smodal from './sergiomodal';
import Jmodal from './javiermodal';
import '../assets/css/mission.scss';

const ResponsiveCards = () => {
  return (
    <section className="res_cards">
      <div className="blog-card">
    <div className="meta">
    <img className="card_photo" src={sergio} alt=""/>
    </div>
    <div className="description">
      <h1>Sergio A Pagliery Jr.</h1>
      <h2>Title</h2>
      <p>Mr. Pagliery has overseen and directed many real estate and corporate acquisitions, real estate developments, and investments in many business sectors, for both domestic and international clients.</p>
              <Smodal></Smodal>
    </div>
  </div>
  <div className="blog-card alt">
    <div className="meta">
      <img className="card_photo" src={javier} alt=""/>
    </div>
    <div className="description">
      <h1>Javier P. Pagliery</h1>
      <h2>Title</h2>
      <p>Mr. Pagliery'sexperience in the legal profession includes personal injury matters, workers’ compensation,  first party insurance and also commercial litigation</p>
              <Jmodal></Jmodal>
    </div>
  </div>
  <div className="blog-card">
    <div className="meta">
    <img className="card_photo" src={brian} alt=""/>
    </div>
    <div className="description">
      <h1>Brian Carvajal</h1>
      <h2>Title</h2>
      <p>Mr. Carvajal’s experience in the legal profession includes discovery and motion practice in personal injury, real estate, creditor rights and corporate transactional matters.  </p>
              <Bmodal></Bmodal>
    </div>
  </div>
    </section>

  );
};
export default ResponsiveCards;
