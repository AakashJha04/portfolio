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
    { id: 4, link: "Skills" },   // ✅ RENAMED
    { id: 5, link: "Contact" },
  ];

  return (
    <nav
      className="
        fixed w-full h-16 z-50 px-6 flex justify-between items-center
        bg-white/40 dark:bg-black/40 backdrop-blur-xl
        border-b border-gray-200/40 dark:border-gray-700/40
        shadow-lg transition-colors duration-500
      "
    >
      {/* Floating Background Orbs */}
      <div className="absolute top-[-100px] left-[-50px] w-72 h-72 bg-cyan-400/30 rounded-full blur-3xl animate-blob -z-10" />
      <div className="absolute bottom-[-120px] right-[-60px] w-80 h-80 bg-pink-500/30 rounded-full blur-3xl animate-blob animation-delay-2000 -z-10" />

      {/* Logo */}
      <Link to="Home" smooth duration={500}>
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.08 }}
          className="
            font-signature text-2xl md:text-3xl cursor-pointer
            bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
            bg-clip-text text-transparent
          "
        >
          Aakash Anand
        </motion.h1>
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-8">
        {links.map(({ id, link }) => (
          <motion.li
            key={id}
            whileHover={{ scale: 1.1 }}
            className="
              relative cursor-pointer capitalize text-sm font-medium
              text-gray-700 dark:text-gray-300 group
            "
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
            <span className="
              absolute left-0 -bottom-1 w-0 h-[2px]
              bg-gradient-to-r from-cyan-400 to-pink-500
              transition-all duration-300 group-hover:w-full
            " />
          </motion.li>
        ))}
      </ul>

      {/* Theme Toggle */}
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.15, rotate: 15 }}
        whileTap={{ scale: 0.9 }}
        className="
          ml-4 p-2 rounded-full
          bg-white/30 dark:bg-gray-800/40
          border border-white/30 dark:border-gray-700/40
          backdrop-blur-md shadow-lg
          text-black dark:text-white
          hover:shadow-cyan-400/40 dark:hover:shadow-pink-400/40
        "
        title="Toggle Theme"
      >
        {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
      </motion.button>

      {/* Mobile Menu Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="md:hidden cursor-pointer text-gray-700 dark:text-gray-300"
      >
        {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {nav && (
          <motion.ul
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="
              fixed inset-0 flex flex-col justify-center items-center
              backdrop-blur-2xl bg-white/80 dark:bg-black/80
              space-y-10 text-3xl font-bold
            "
          >
            {links.map(({ id, link }) => (
              <motion.li
                key={id}
                whileHover={{ scale: 1.2 }}
                className="hover:text-cyan-400 dark:hover:text-pink-400"
              >
                <Link
                  to={link}
                  smooth
                  duration={500}
                  onClick={() => setNav(false)}
                >
                  {link}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
