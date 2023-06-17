import React, { useState, useEffect } from 'react';
import About from './About';

function Welcome() {
  return (
    <div>
     {/* TODO: Change font size and top/bottom padding when in a smaller screen */}
    <section className='w-3/4 mx-auto pt-32 pb-32'>
      <div className='w-3/4 mx-auto'>
        <p className='text-accent text-3xl font-semibold mb-4'>
            Hi, I'm Laura.
        </p>
        <p className='text-offWhite text-5xl font-bold'>
        I’m a web developer with a passion for making optimised, well designed sites.
        </p>    
      </div>
    </section>
    <About />
    </div>
  );
}

export default Welcome;