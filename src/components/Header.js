import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <a href="#introduction" className="hover:underline">Introduction</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#resume" className="hover:underline">Resume</a>
      </nav>
    </header>
  );
};

export default Header;
