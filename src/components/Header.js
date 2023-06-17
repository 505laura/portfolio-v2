import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';

function Header() {
  useEffect(() => {
    document.title = 'Laura Brancatisano';
  }, []);

  return (
    <header className='flex justify-around py-10 text-header h-1/6'>
        <h1 className='sm:text-lg md:text-3xl lg:text-5xl mt-auto mb-auto'>
            <a href='/'>Laura Brancatisano</a>
        </h1>
        <div className="flex space-x-4 mt-auto mb-auto">
            <Navigation src='/about' name='about'></Navigation>
            <Navigation src='/portfolio' name='portfolio'></Navigation>
            <Navigation src='/contact' name='contact'></Navigation>
            <Navigation src='/resume' name='resume'></Navigation>
        </div>
    </header>
  );
}

export default Header;