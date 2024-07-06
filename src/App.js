import React from 'react';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import ThreeBackground from './ThreeBackground';
import './App.css';

const App = () => {
  return (
    <div id="app">
      <ThreeBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Introduction />
        <Projects />
      </div>
    </div>
  );
};

export default App;
