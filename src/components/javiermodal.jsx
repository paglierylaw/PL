import React,{useState} from 'react';
import {Modal} from 'react-bootstrap';
import javier from '../assets/images/Javier_Pagliery.jpg';
import "../assets/css/modal_card.scss";
// import Button from 'react-bootstrap/Button'

const JavierModal = () => {
    
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
    <div className="container dropshadow modal-card-3">
    <div className="columns">
      <div className="column is-4 is-offset-4">
        <div className="modal-card">
          <div className="header">
            <div className="avatar">
              <img src={javier} alt="Brian Carvajal"/>
            </div>
          </div>
          <div className="modal-card-body">
            <div className="user-meta has-text-centered">
              <h3 className="username">Javier P. Pagliery</h3>
              <h5 className="position">Title</h5>
            </div>
            <div className="user-bio has-text-centered">
              <p>Javier P. Pagliery received his juris doctor from University of Illinois - Chicago John Marshall Law School in 2020. During his time there, Mr. Pagliery wrote the best brief in the Hispanic National Bar Association’s 2020 Moot Court competition.  Additionally, he also received the Cali Award  in Constitutional History and Constitutional Theory. Prior to law school, Mr. Pagliery received his baccalaureate degree from Florida International University. Mr. Pagliery has prior work experience in personal injury matters, workers’ compensation,  first party insurance and also commercial litigation.</p>
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
export default JavierModal;
