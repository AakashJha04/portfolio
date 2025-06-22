import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  const links = [
    { id: 1, link: 'Home' },
    { id: 2, link: 'About' },
    { id: 3, link: 'Portfolio' },
    { id: 4, link: 'Experience' },
    { id: 5, link: 'Contact' },
  ];

  return (
    <div className="flex justify-between items-center w-full h-16 px-4 fixed z-50 
      bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark transition-colors duration-300">

      {/* Logo */}
      <div>
        <h1 className="text-2xl font-signature">Aakash Anand</h1>
      </div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize text-sm font-medium 
              text-gray-700 dark:text-gray-300 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition duration-300"
        title="Toggle Theme"
      >
        {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
      </button>

      {/* Mobile Nav Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-2 z-10 text-gray-600 dark:text-gray-300 md:hidden"
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center
          absolute top-0 left-0 w-full h-screen bg-gradient-to-b
          from-background-dark to-gray-900 text-gray-300 dark:text-gray-100">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-4 text-3xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
