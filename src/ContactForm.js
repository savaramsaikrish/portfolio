import React from "react";
import { FaLinkedin, FaTelegramPlane, FaEnvelope } from "react-icons/fa"; // Using react-icons
import "./ContactForm.css"; // Custom CSS for styling

const ContactDetails = () => {
  return (
    <div className="contact-details-container">
      <div className="contact-item">
        <FaLinkedin className="contact-icon" />
        <a
          href="https://www.linkedin.com/in/savaramsaikrish"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          linkedin.com/in/savaramsaikrish
        </a>
      </div>
      <div className="contact-item">
        <FaTelegramPlane className="contact-icon" />
        <a
          href="https://t.me/savaramsaikrish"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          @savaramsaikrish
        </a>
      </div>
      <div className="contact-item">
        <FaEnvelope className="contact-icon" />
        <a href="mailto:savaramsaikrish@gmail.com" className="contact-link">
          savaramsaikrish@gmail.com
        </a>
      </div>
    </div>
  );
};

export default ContactDetails;
