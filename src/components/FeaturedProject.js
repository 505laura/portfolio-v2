import React, { useState, useEffect } from 'react';
import Cityspire from '../Cityspire.gif';
import CodeQuiz from '../code-quiz.gif';
import TechBlog from '../tech-blog.gif';
import FeaturedText from './FeaturedText';

// Resize gifs so that they are consistent

function FeaturedProject() {
  return (
    <div>
      <div>
        <img src={Cityspire} alt="Featured project"  className='h-40 w-auto'/>
        <FeaturedText></FeaturedText>
      </div>
    </div>
  );
}

export default FeaturedProject;