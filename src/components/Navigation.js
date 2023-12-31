import React, { useState, useEffect } from 'react';

function Navigation(props) {
  return (
    <nav className={'text-xl text-offWhite md:text-lg '+ props.customStyle}>
        <a href={props.src}>{props.name}</a>
    </nav>
  );
}

export default Navigation;