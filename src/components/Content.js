import React from 'react';

//Using a reusable component.
//this seperates concerns and makes ny app modular
//In this component I am showing that we can use javascript within the app with the local time string method

const Content = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
}

export default Content;