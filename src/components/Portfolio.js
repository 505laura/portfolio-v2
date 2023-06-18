import React, { useState, useEffect } from 'react';
import FeaturedProject from './FeaturedProject';
import Project from './Project';

function Portfolio() {
  return (
    <div className='w-3/4 mx-auto pt-8'>
      {/* <h2 className='w-3/4 text-4xl text-offWhite pb-5'>
        Portfolio
      </h2> */}
      <FeaturedProject></FeaturedProject>
      <FeaturedProject></FeaturedProject>
      <FeaturedProject></FeaturedProject>
      <h3 className='text-2xl text-offWhite py-5'>
        Some other projects
      </h3>
      <div className="grid grid-cols-4 gap-3">
      <Project></Project>
      <Project></Project>
      <Project></Project>
      <Project></Project>
      </div>
    </div>
  );
}

export default Portfolio;