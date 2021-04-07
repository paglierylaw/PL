import React from "react";
import sergio from '../assets/images/Sergio_Pic.jpg';
import brian from '../assets/images/Brian_Carvajal.jpg';
import javier from '../assets/images/Javier_Pagliery.jpg';
import Bmodal from './brianmodal';
import Smodal from './sergiomodal';
import Jmodal from './javiermodal';
import Cards from './cards2';
import "../assets/css/about_card.scss";


const About = () => {
  return (
    <section id="about" className="about_body">
        <div className="aboutTitle">
        <h1 className="mb-2">Meet Our <b className="title-team">Team</b></h1>
        <h5 className="aboutSubText">The legal team on your side.</h5>
        <hr className="hr-text mb-5" data-content="§"/>
        <p className="mb-5 about-description">Over the last (years), our firm has successfully represented established a reputable presence in the Miami community. We pride ourselves on our core values that have led us to succesfully close thousands of cases. We consistantly place our clients interest above all else.We achieve our clients goals through integrity honesty and fairness. Our practice has expanded to include a multitude of areas in order to best meet the eneds of our clients. </p>
        </div>
        <div className="about_cards2"><Cards></Cards></div>
      <div className="about_cards mt-2">
    <div className="section">
    <div className="container dropshadow card-2">
    <div className="columns">
      <div className="column is-4 is-offset-4">
        <div className="card">
          <div className="header">
            <div className="avatar">
              <img src={brian} alt="Javier Pagliery"/>
            </div>
          </div>
          <div className="card-body">
            <div className="user-meta has-text-centered">
              <h3 className="username">Brian Carvajal</h3>
              {/* <h5 className="position">Title</h5> */}
            </div>
            <div className="user-bio has-text-centered">
              <p>Mr. Carvajal’s experience in the legal profession includes discovery and motion practice in personal injury, real estate, creditor rights and corporate transactional matters.  </p>
              <Bmodal></Bmodal>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="container dropshadow card-1">
    <div className="columns">
      <div className="column is-4 is-offset-4">
        <div className="card">
          <div className="header">
            <div className="avatar">
              <img src={sergio} alt="Javier Pagliery"/>
            </div>
          </div>
          <div className="card-body">
            <div className="user-meta has-text-centered">
              <h3 className="username">Sergio A. Pagliery Jr.</h3>
              {/* <h5 className="position">Title</h5> */}
            </div>
            <div className="user-bio has-text-centered">
              <p>Mr. Pagliery has overseen and directed many real estate and corporate acquisitions, real estate developments, and investments in many business sectors, for both domestic and international clients.</p>
              <Smodal></Smodal>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container dropshadow card-3">
    <div className="columns">
      <div className="column is-4 is-offset-4">
        <div className="card">
          <div className="header">
            <div className="avatar">
              <img src={javier} alt="Brian Carvajal"/>
            </div>
          </div>
          <div className="card-body">
            <div className="user-meta has-text-centered">
              <h3 className="username">Javier P. Pagliery</h3>
              {/* <h5 className="position">Title</h5> */}
            </div>
            <div className="user-bio has-text-centered">
              <p>Mr. Pagliery'sexperience in the legal profession includes personal injury matters, workers’ compensation,  first party insurance and also commercial litigation</p>
              <Jmodal></Jmodal>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</section>
  );
};
export default About;