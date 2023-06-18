import React, { useState, useEffect } from 'react';

// Resize gifs so that they are consistent

function FeaturedProject(props) {
  return (
    <div className='flex pb-10'>
      <div className='flex max-w-sm'>
        <img src={props.project} alt="Featured project"  className="pr-4"/>
      </div>
      <div className='grid content-between'>
        <div>
          <h3 className='text-offWhite font-semibold text-lg pb-2'>
            {props.title}
          </h3>
          <p className='text-gray-500'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div>
          <p className='text-accent font-semibold text-xs pb-1'>
            Node.js Express.js Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProject;