import React, { useState } from 'react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true); // initial dark mode

  const toggleDark = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 dark:bg-black bg-opacity-80 backdrop-blur-md p-4 flex justify-between items-center z-50">
      <div className="text-xl font-bold">Ujjwal Aggarwal</div>
      <div className="space-x-4">
        <a href="#home" className="hover:text-violet-400 transition">Home</a>
        <a href="#about" className="hover:text-violet-400 transition">About</a>
        <a href="#projects" className="hover:text-violet-400 transition">Projects</a>
        <a href="#blog" className="hover:text-violet-400 transition">Blog</a>
        <a href="#contact" className="hover:text-violet-400 transition">Contact</a>
        <button 
          onClick={toggleDark} 
          className="ml-4 px-2 py-1 border rounded hover:bg-gray-700 transition"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? '🌞 Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  );
}
