import React, { useState, useEffect } from 'react';
import FeaturedProject from './FeaturedProject';
import Project from './Project';

function Portfolio() {
  return (
    <div className='w-2/3 mx-auto'>
      <h2 className='text-4xl text-offWhite pb-5'>
        Portfolio
      </h2>
      <FeaturedProject></FeaturedProject>
      <FeaturedProject></FeaturedProject>
      <FeaturedProject></FeaturedProject>
      <h3 className='text-2xl text-offWhite py-5'>
        Some other projects
      </h3>
      <Project></Project>
      <Project></Project>
      <Project></Project>
      <Project></Project>
    </div>
  );
}

export default Portfolio;