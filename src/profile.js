import React, { useState } from "react";
import Modal from "react-modal";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import './App.css';
import profileImg from "./img/logo.png"; // Adjust path accordingly

Modal.setAppElement("#root"); // Make sure this matches your root element in index.html

const Profile = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleOpenResume = () => {
    if (window.innerWidth <= 768) {
      // If mobile, open in a new tab
      window.open("/resume.pdf", "_blank");
    } else {
      setModalIsOpen(true);
    }
  };
  return (
    <div className="Profile">
      
      <div className="Profile-Image">
      <img src={profileImg} alt="Profile" className="profile-image" />

      </div>
      <div className="Profile-Name">Savaram Sai Krishna Chaitanya Prabhu</div>
      <div className="Profile-Title">Full Stack Developer</div>
      <div className="Profile-Description"></div>
      
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/savaramsaikrish" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size="2em" color="#0e76a8" />
        </a>
        <a href="https://github.com/savaramsaikrish" target="_blank" rel="noopener noreferrer">
          <FaGithub size="2em" color="#333" />
        </a>
      </div>

      {/* Resume Button */}
      <button className="resume-button" onClick={handleOpenResume}>
        View Resume
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="modal-content"
      >
        <button className="close-button" onClick={() => setModalIsOpen(false)}>Close</button>
        <iframe src="/Resume.pdf" title="Resume" width="100%" height="600px"></iframe>
      </Modal>
    </div>
  );
};

export default Profile;
