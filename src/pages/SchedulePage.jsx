import React from 'react';
// import components for schedule
import Schedule from '../components/Schedule';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-dark">
      <div className="flex-grow">
        <Schedule />
   
      </div>
    </div>
  );
}

export default HomePage;