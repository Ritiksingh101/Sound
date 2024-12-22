import React from 'react';
import TypedComponent from './First.jsx';

function Send() {
  return (
    <div className="p-4">
      {/* Typed Animation in Multiple Places */}
      <h1 className="text-2xl font-bold mb-4">
        <TypedComponent strings={['Hello, World!', 'Welcome to my portfolio!']} />
      </h1>

      <p className="text-lg mb-4">
        <TypedComponent
          strings={['I love coding.', 'I enjoy building cool projects.']}
          typeSpeed={40}
        />
      </p>

      <h2 className="text-xl font-semibold">
        <TypedComponent
          strings={['React Developer', 'JavaScript Enthusiast', 'Tech Learner']}
          typeSpeed={60}
          backSpeed={60}
          loop={true}
        />
      </h2>
    </div>
  );
}

export default Send;
