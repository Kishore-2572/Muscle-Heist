import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section id='footer' className="d-flex">
      <div className="footer-left">
        <div className="footer-links flex-center">
          <a href="#header">Home</a>
          <a href="#aboutus">About us</a>
          <a href="#plans">Workouts</a>
          <Link to='/sponsers'>Sponsers</Link>
        </div>
        <div className="social-links flex-center">
          <a href="https://www.linkedin.com/in/kishoren2572/" target="_blank">
            {' '}
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://instagram.com/kishore_n__?igshid=YmMyMTA2M2Y="
            target="_blank"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://kishore-portfolio.onrender.com/" target="_blank">
            <i className="fa-regular fa-circle-user"></i>
          </a>
        </div>
        <div className="copyright flex-center">
          <i className="fa-regular fa-copyright"></i> kishore, All rights
          reserved
        </div>
      </div>

      <div className="footer-right">
        <div className="contact flex-cc">
          <input
            className="footer-contact-input"
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="footer-contact-input"
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="footer-contact-input message-input"
            type="text"
            name="message"
            id="message"
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="footer-contact-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
