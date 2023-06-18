import React, { useState, useEffect } from 'react';
import FeaturedProject from './FeaturedProject';
import Project from './Project';
import Cityspire from '../Cityspire.gif';
import TechBlog from '../tech-blog.gif';

function Portfolio() {
  return (
    <div className='w-3/4 mx-auto pt-8'>
      <h2 className='text-4xl text-offWhite font-semibold pb-8 items-center w-3/4'>
        Featured Projects
      </h2>
      {/*  TODO: Edit Habivox gif */}
      <FeaturedProject project={Cityspire} title="Habivox" github="habivox" website="https://habivox.com/" description="Habivox is an innovative website designed to transform habit-making into an exciting game-like experience. By combining the power of gamification and habit formation, Habivox motivates users to develop positive daily routines. Users embark on virtual quests, earning experience points and unlocking achievements as they successfully cultivate habits like exercise, reading, meditation, and more." tags={['html', 'tailwind css', 'next.js', 'react', 'jest', 'graphql', 'jwt', 'zod', 'mongoose', 'bcrypt', '@apollo/client']}></FeaturedProject>
      <FeaturedProject project={Cityspire} title="CitySpire" github="cityspire" website="https://jpjp2328.github.io/Cityspire/" description="Cityspire is an immersive website designed to inspire and aid travel enthusiasts in planning their next adventure. Users can select any city across the globe and receive information about it; they are able to view images of it, explore the city's upcoming events and attractions, and view an up-to-date weather report, while an interactive map provides a visual guide to navigate the area. This project was built through a collaboration with two other developers." tags={['figma', 'html', 'tailwind css', 'jquery', 'openweathermap', 'google maps API', 'google places API']}></FeaturedProject> 
      <FeaturedProject project={TechBlog} title="The Tech Blog" github="tech-blog" website="https://laura505-tech-blog.herokuapp.com/" description="The Tech Blog is a user-friendly, CMS-style blog site exclusively designed for developers to share their thoughts and opinions on a variety of tech-related topics. It provides a streamlined platform where developers can easily create and publish blog posts, showcasing their expertise and insights." tags={['html', 'tailwind css', 'node.js', 'express.js', 'handlebars', 'mysql', 'sequelize', 'bcrypt', 'express-session', 'heroku']}></FeaturedProject>
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