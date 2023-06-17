import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';

function Header() {
  useEffect(() => {
    document.title = 'Laura Brancatisano';
  }, []);

  return (
    <header className='flex justify-between px-20 py-10 text-header h-1/6'>
        <h1 className='sm:text-lg md:text-3xl lg:text-4xl mt-auto mb-auto'>
            <a href='/'>Laura Brancatisano</a>
        </h1>
        <div className="flex space-x-4 mt-auto mb-auto">
            <Navigation src='/about' name='about' customStyle="hover:text-accent"></Navigation>
            <Navigation src='/portfolio' name='portfolio' customStyle="hover:text-accent"></Navigation>
            <Navigation src='/contact' name='contact' customStyle="hover:text-accent"></Navigation>
            <Navigation src='/resume.pdf' name='resume' customStyle="bg-transparent hover:bg-accent text-offWhite hover:text-black px-2 border border-accent hover:border-transparent rounded"></Navigation>
        </div>
    </header>
  );
}

export default Header;