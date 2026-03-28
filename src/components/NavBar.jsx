import React from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { Link } from "react-scroll";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const NavBar = () => {
  const { darkMode, toggleTheme } = useTheme();

  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Portfolio" },
    { id: 4, link: "Skills" },
    { id: 5, link: "Testimonials" },
    { id: 6, link: "Contact" },
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

      {/* Desktop Nav (hidden on mobile) */}
      <ul className="hidden md:flex md:flex-row gap-6 lg:gap-8 items-center">
        {links.map(({ id, link }) => (
          <motion.li
            key={id}
            whileHover={{ scale: 1.1 }}
            className="
              relative cursor-pointer capitalize text-sm md:text-base font-medium
              text-gray-700 dark:text-gray-300 group
            "
          >
            <Link to={link} smooth duration={500} className="py-2 px-1">
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
    </nav>
  );
};

export default NavBar;
