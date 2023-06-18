import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Contact from './components/Contact';

const router = createBrowserRouter([
  {
    path: '/portfolio',
    element: <Portfolio />
  },
  {
    path: '/',
    element: <Welcome />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/about',
    element: <About />
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div className="bg-main min-h-screen flex flex-col w-full">
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </div>
  </React.StrictMode>
);