import React from "react";
import mission from "../assets/images/Mission_Image.jpg";
import vision from "../assets/images/Vision.jpg";
import '../assets/css/mission.scss';

const Mission = () => {
  return (
    <section id="mission" className="mission_body">
      <div className="blog-card">
    <div className="meta">
    <img className="photo" src={vision} alt=""/>
    </div>
    <div className="description">
      <h1>Our Vision</h1>
      <h2>Opening a door to the future</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
    </div>
  </div>
  <div className="blog-card alt">
    <div className="meta">
      <img className="photo" src={mission} alt=""/>
    </div>
    <div className="description">
      <h1>Our Mission</h1>
      <h2>Defining success together</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>

    </div>
  </div>
    </section>

  );
};
export default Mission;
