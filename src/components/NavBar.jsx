// src/components/NavBar.jsx
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import { Link } from "react-scroll";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Portfolio" },
    { id: 4, link: "Experience" },
    { id: 5, link: "Contact" },
  ];

  return (
    <nav className="fixed w-full h-16 z-50 px-6 flex justify-between items-center 
      bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-black 
      text-text-light dark:text-text-dark shadow-md transition-colors duration-300">

      {/* Animated Background Orbs */}
      <div className="absolute top-[-100px] left-[-50px] w-72 h-72 bg-cyan-400/30 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-[-100px] right-[-50px] w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-pulse -z-10"></div>

      {/* Logo */}
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer"
      >
        Aakash Anand
      </motion.h1>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex gap-6">
        {links.map(({ id, link }) => (
          <motion.li
            key={id}
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer capitalize text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-cyan-400 dark:hover:text-pink-400 transition"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* Theme Toggle */}
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="ml-4 p-2 rounded-full bg-white/40 dark:bg-gray-800/40 
          border border-white/30 dark:border-gray-700/40 backdrop-blur-md shadow-lg 
          text-black dark:text-white transition"
        title="Toggle Theme"
      >
        {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
      </motion.button>

      {/* Mobile Nav Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer md:hidden text-gray-700 dark:text-gray-300"
      >
        {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {nav && (
          <motion.ul
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 flex flex-col justify-center items-center 
              backdrop-blur-2xl bg-white/70 dark:bg-black/70 space-y-8 text-3xl font-semibold"
          >
            {links.map(({ id, link }) => (
              <li key={id}>
                <Link
                  onClick={() => setNav(false)}
                  to={link}
                  smooth
                  duration={500}
                  className="hover:text-cyan-400 dark:hover:text-pink-400 transition"
                >
                  {link}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
