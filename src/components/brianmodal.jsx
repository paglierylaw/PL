import React,{useState} from 'react';
import {Modal} from 'react-bootstrap';
import brian from '../assets/images/Brian_Carvajal.jpg';
import "../assets/css/modal_card.scss";
// import Button from 'react-bootstrap/Button'

const BrianModal = () => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
          <span class="see_more" onClick={handleShow}>
            See more <i class="fas fa-arrow-circle-right"></i>
          </span>
    
          <Modal class="bg-modal-1" show={show} onHide={handleClose} centered>
          <div className="about_modal-cards mt-2">
    <div className="section">
          <div className="container dropshadow modal-card-2">
    <div className="columns">
      <div className="column is-4 is-offset-4">
        <div className="modal-card">
          <div className="header">
            <div className="avatar">
              <img src={brian} alt="Javier Pagliery"/>
            </div>
          </div>
          <div className="modal-card-body">
            <div className="user-meta has-text-centered">
              <h3 className="username">Brian Carvajal</h3>
              <h5 className="position">Title</h5>
            </div>
            <div className="user-bio has-text-centered">
              <p>Graduated from the Univ. of Illinois Chicago - John Marshall Law School in 2020. While in law school, Mr. Carvajal served on former Illinois Supreme Court Justice Frossard’s Student Advisory Board, and received several Dean’s list accolades, together with the CALI award for academic excellence in Products Liability.  Mr. Carvajal was a judicial extern for the Honorable Jorge Alonso at the United States District Court for the Northern District of Illinois.  Mr. Carvajal’s prior work experience in the legal profession includes discovery and motion practice in personal injury, real estate, creditor rights and corporate transactional matters.  </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
          </Modal>
        </>
      );
}
export default BrianModal;
