import React from 'react';
import { Link } from 'react-router-dom';
import Bulkingimg from '../assets/bulkingcard.jpg';
import Cuttingimg from '../assets/cuttingcard.jpg';
import Maintainimg from '../assets/maintaincard.jpg';

const Plans = () => {
  return (
    <section id="plans">
      <div className="program-cards flex-center">
        <div className="program-card">
          <div className="program-card-img">
            <img src={Bulkingimg} alt="" />
          </div>
          <div className="program-card-content flex-cc">
            <div className="program-card-content-heading">
              <h1>Weight Gain ( Bulking ) </h1>
            </div>
            <Link to='/workouts/bulking' className='btn-primary program-card-btn'>Start Program</Link>
          </div>
        </div>
        <div className="program-card">
          <div className="program-card-img">
            <img src={Maintainimg} alt="" />
          </div>
          <div className="program-card-content flex-cc">
            <div className="program-card-content-heading">
              <h1>Maintain weight</h1>
            </div>
            <Link to='/workouts/maintain' className='btn-primary program-card-btn'>Start Program</Link>
          </div>
        </div>
        <div className="program-card">
          <div className="program-card-img">
            <img src={Cuttingimg} alt="" />
          </div>
          <div className="program-card-content flex-cc">
            <div className="program-card-content-heading">
              <h1>Weight Loss ( Cutting ) </h1>
            </div>
            <Link to='/workouts/cutting'  className='btn-primary program-card-btn'>Start Program</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
