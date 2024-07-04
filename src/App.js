import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Introduction />
      <Projects />
      <Resume />
      <Footer />
    </div>
  );
};

export default App;
