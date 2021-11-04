import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "../assets/css/modal_card.scss";

const TOSModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <span role="button" className="cursor-pointer" onClick={handleShow}>
      Terms & Conditions
      </span>

      <Modal className="bg-modal-1" show={show} onHide={handleClose} centered>
        <div className="about_modal-cards mt-2">
          <div className="section">
            <div className="container dropshadow modal-card-2">
              <div className="columns">
                <div className="column is-4 is-offset-4">
                  <div className="modal-card overflow-scroll">
                    <div className="modal-card-body">
                      <div className="user-meta has-text-centered">
                        <h3 className="username">
                          Terms & <span className="title-team">Conditions</span>
                        </h3>
                      </div>
                      <div className="user-bio has-text-centered">
                        <p>
                          {" "}
                          <b className="title-team">Disclaimer</b>
                          <br />
                          The information presented on this website is merely
                          general information. Though we routinely update our
                          website, some of the information presented may not
                          reflect the most recent developments in the legal
                          field. This website does not provide any form of legal
                          opinion or legal advice and should you have any
                          specific questions, you should seek specific legal
                          representation concerning your individual matter.
                          Information provided to us will not be treated as
                          privileged or confidential if you have not entered
                          into an agreement to be represented by Pagliery Law Firm, PLLC As such, you should not send any
                          information that you deem to be privileged or
                          confidential until the time that a representation
                          agreement has been entered into. Under no
                          circumstances shall Pagliery Law Firm, PLLC. or any of
                          its affiliated employees be held liable for any of the
                          statements made on this website that result in damage
                          to you or anyone else due to your access of this
                          information. <br />
                          <b className="title-team">Information We Collect </b>
                          <br />
                          At times, certain information may be requested of you
                          to interact with our website. This information is
                          requested of you so that we may adequately respond to
                          any inquiries in the most prompt and efficient manner
                          regarding any non-privileged information, provide you
                          with newsletters or other related publications. If you
                          provide us with your personal information, that
                          information may be transferred amongst the individuals
                          employed by the law firm, as well as other individual
                          third-party service providers. <br />
                          <b className="title-team">Cookie Use</b>
                          <br />
                          Some portions of our website use “cookies” that are
                          merely small files placed on your personal device that
                          merely exist for identification purposes. Cookies save
                          data regarding individual users, such as the user’s
                          name, password, information viewed by the user and
                          screen preferences. Further, cookies may be used by us
                          to assist us in determining the effectiveness of the
                          navigational structure of our website, as well as the
                          usefulness of the information being provided by us on
                          the website. Note, cookies cannot read data off of
                          your hard drive and therefore all of your data is not
                          subject to exposure to us merely by accessing this
                          website. <br />
                          <b className="title-team">Changes to this Privacy Policy </b>
                          <br /> Pagliery Law Firm, PLLC. reserves the right to change,
                          modify and/or update this Privacy Policy at any time
                          without providing notice to any users. As such, any
                          changes to the sharing and/or collection of data will
                          be posted on this website. Should you have any
                          questions or concerns regarding our Privacy Policy,
                          please email us at the contact information provided on
                          this website.
                        </p>
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
};
export default TOSModal;
