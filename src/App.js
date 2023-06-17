import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

import {Route, Router, Routes} from 'react-router-dom';

function App() {
  // Set document title to full name on page load


  return (
    // TODO: Fix the colour not covering the width of the screen when the screen is smaller
    <div className="bg-main min-h-screen flex flex-col w-screen">
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/about' element={<About />} />
        </Routes>
      <Portfolio />
      <Footer />
      </Router>
      {/* TODO: Add logic to show page with projects (renders portfolio component) */}
      {/* TODO: Add logic to show page with contact info */}
    </div>
  );
}

export default App;

