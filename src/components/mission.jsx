import React from "react";
import mission from "../assets/images/Mission_Image.jpg";
import vision from "../assets/images/Vision.jpg";
import "../assets/css/mission.scss";

const Mission = () => {
  return (
    <section id="mission"> 
    <div className="aboutTitle">
        <h1 className="mb-2">Why <b className="title-team">Our Team</b></h1>
        <h5 className="aboutSubText">The legal team on your side.</h5>
        <hr className="hr-text mb-5" data-content="§"/>
        </div>
          <p className="mb-5 about-description">Over the last (years), our firm has successfully represented established a reputable presence in the Miami community. We pride ourselves on our core values that have led us to succesfully close thousands of cases. We consistantly place our clients interest above all else.We achieve our clients goals through integrity honesty and fairness. Our practice has expanded to include a multitude of areas in order to best meet the eneds of our clients. </p>
    <div className="mission_body">
      <div className="blog-card">
        <div className="meta">
          <img className="photo" src={vision} alt="" />
        </div>
        <div className="description">
          <h1>
            Our <span className="title-team">Vision</span>
          </h1>
          <h2>Opening a door to the future</h2>
          <p className="font-control">
            {" "}
            “To be a boutique law firm providing top-tier personalized
            representation centered around loyalty, integrity, and excellence in
            furthering our clients’ business goals.”
          </p>
        </div>
      </div>
      <div className="blog-card alt">
        <div className="meta">
          <img className="photo" src={mission} alt="" />
        </div>
        <div className="description">
          <h1>
            Our <span className="title-team">Mission</span>
          </h1>
          <h2>Defining success together</h2>
          <p className="font-control">
            Our mission is to provide competent and diligent legal
            representation employing strategic and creative means to exceed our
            clients’ expectations. We believe in focusing our efforts the
            boutique way- specialized, dedicated, and beyond reproach in all
            that we do for our clients.{" "}
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};
export default Mission;
