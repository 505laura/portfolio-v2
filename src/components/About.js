import React, { useState, useEffect } from 'react';
import pfp from '../laura-brancatisano.jpeg';

const Technologies = [
  ['HTML', 'CSS', 'Javascript'],
  ['Git', 'React', 'RESTful APIs'],
  ['MongoDB', 'MySQL', 'Express'],
  ['Node.js', 'Next.js', 'Heroku']
]

const TechLists = Technologies.map((row) => (
  <ul className="list-disc px-4">
    {row.map((el) => <li className='list-item'>{el}</li>)}
  </ul>
));

function About() {
  return (
    // TODO: Fix repeated code
    <div className='w-3/4 mx-auto pt-32 flex align-start'>
      <div className='w-3/4 mx-auto flex align-start'>
        <div>
          <div className='flex items-center py-4 align-baseline'>
            <span class="flex-shrink text-4xl text-offWhite pr-4">About Me</span>
            <div class="flex-grow h-[2px] bg-accent"></div>
          </div>
          <p className="flex-shrink text-xl text-offWhite">I am a full stack software developer, passionate about writing clean code and paying close attention to detail to produce a well designed application.</p>
          <p className="flex-shrink text-xl pt-5 text-offWhite">Technologies I work with currently:</p>
          <div className="flex text-md pt-5 text-accent">
          {TechLists}
          </div>
        </div>
        <img src={pfp} alt="Laura Brancatisano" className='h-80 pl-5 pt-9 w-auto'/>
      </div>
    </div>
  );
}

export default About;