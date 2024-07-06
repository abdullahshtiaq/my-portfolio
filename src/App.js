import React from 'react';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import './App.css';

const App = () => {
  return (
    <div id="app">
      <video id="background-video" autoPlay loop muted>
        <source src={`${process.env.PUBLIC_URL}/background.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Introduction />
        <Projects />
      </div>
    </div>
  );
};

export default App;
