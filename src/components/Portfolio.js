import React, { useState, useEffect } from 'react';
import FeaturedProject from './FeaturedProject';
import Project from './Project';

function Portfolio() {
  return (
    <div className='w-3/4 mx-auto pt-8'>
      {/* <h2 className='w-3/4 text-4xl text-offWhite pb-5'>
        Portfolio
      </h2> */}
      <FeaturedProject title="Habivox"></FeaturedProject>
      <FeaturedProject title="CitySpire"></FeaturedProject>
      <FeaturedProject title="Tech Blog"></FeaturedProject>
      <h3 className='flex text-2xl text-offWhite font-semibold py-5 items-center'>
        Some other projects
      <div class="flex-grow h-[2px] ml-4 bg-accent"></div>
      </h3>
      <div className="grid grid-cols-4 gap-3">
      <Project title="Coding Quiz" github="code-quiz" website="https://505laura.github.io/code-quiz/" description="An interactive quiz to test a users knowledge of coding." tags={['html', 'css', 'javascript']}></Project>
      <Project title="Password Generator" github="password-generator" website="https://github.com/505laura/password-generator" description="A random password generator website." tags={['html', 'css', 'javascript']}></Project>
      <Project title="Weather Dashboard" github="weather-dashboard" website="https://505laura.github.io/weather-dashboard/" description="A weather dashboard that displays a 5 day forecast for any city in the world." tags={["bootstrap", "jquery", "moment.js", "REST APIs"]}></Project>
      <Project title="Social Network API" github="social-network-API" website="https://github.com/505laura/social-network-API" description="An API that is used for a social network where you can create users, publish thoughts, make friends, and react to other peoples thoughts." tags={["node.js", "express.js", "mongoose", "mongoDB", "jest", "REST APIs", "insomnia", "TDD"]}></Project>
      </div>
    </div>
  );
}

export default Portfolio;