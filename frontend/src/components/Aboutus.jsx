import React from 'react';

const Aboutus = () => {
  return (
    <section id="aboutus" className="d-flex">
      <div className="aboutus-left flex-column">
        <h6 className="aboutus-heading">About Muscle Heist</h6>
        <h2 className="aboutus-description">
          Our goal is to make health and fitness attainable, affordable and
          approachable
        </h2>
      </div>
      <div className="aboutus-right flex-column">
        <h6 className="aboutus-heading">About Workouts</h6>
        <h3 className="aboutus-description">
          The workouts are pre-defined based on the research from experts
          and internet. You can pick workout plan according to your body type
        </h3>
        <a className='btn-primary aboutus-btn' href="#plans">View Programs</a>
      </div>
    </section>
  );
};

export default Aboutus;
