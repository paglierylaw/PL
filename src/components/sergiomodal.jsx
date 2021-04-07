import React,{useState} from 'react';
import {Modal} from 'react-bootstrap';
import sergio from '../assets/images/Sergio_Pic.jpg';
import "../assets/css/modal_card.scss";
// import Button from 'react-bootstrap/Button'

const SergioModal = () => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
          <span className="see_more" onClick={handleShow}>
            See more <i className="fas fa-arrow-circle-right"></i>
          </span>
    
          <Modal className="bg-modal-1" show={show} onHide={handleClose} centered>
          <div className="about_modal-cards mt-2">
    <div className="section">
    <div className="container dropshadow modal-card-1">
    <div className="columns">
      <div className="column is-4 is-offset-4">
        <div className="modal-card">
          <div className="header">
            <div className="avatar">
              <img src={sergio} alt="Javier Pagliery"/>
            </div>
          </div>
          <div className="modal-card-body">
            <div className="user-meta has-text-centered">
              <h3 className="username">Sergio A. Pagliery Jr.</h3>
              <h5 className="position">Title</h5>
            </div>
            <div className="user-bio has-text-centered">
              <p>Sergio A. Pagliery Jr. received an honorable discharge with commendations from the United States Air Force in 1988 and then a baccalaureate degree from Florida International University in 1991. Mr. Pagliery received his juris doctor, magna cum laude, from St. Thomas University School of Law in 1994.  Since then, Mr. Pagliery has served in several executive and director capacities, as well as general counsel for business entrepreneurs and investors alike.  Mr. Pagliery has overseen and directed many real estate and corporate acquisitions, real estate developments, and investments in many business sectors, for both domestic and international clients.</p>
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
export default SergioModal;
