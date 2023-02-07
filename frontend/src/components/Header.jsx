import React from 'react';

const Header = () => {
  return (
    <section id="header" className="d-flex">
      <div className="header-left flex-column">
        <h1 className="color-red header-text-big ">
          DON'T WAIT{' '}
          <span className="color-white header-text-big"> GET IN</span>
        </h1>
        <h1 className="color-white header-text-bigger">SHAPE TODAY</h1>
        <h3 className="color-white header-text-small">
          START YOUR <span className="color-red">TRAINING</span> WITH OUR
        </h3>
        <h3 className="color-white header-text-small">
          PROFESSIONAL <span className="color-red"> WORKOUT</span> PLANS
        </h3>
        <div className="header-buttons d-flex">
          <a href="#plans" className="header-start-btn btn-primary flex-center">
            Let's Get Started
          </a>
          <a
            href="#aboutus"
            className="header-about-btn btn-secondary flex-center"
          >
            About Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
