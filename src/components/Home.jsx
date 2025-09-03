// src/components/Home.js
import React from "react";
import MY_PHOTO from "../assets/mine.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <section
      name="Home"
      className="relative h-screen w-full pt-20 
        bg-gradient-to-br from-gray-100 via-white to-gray-200 
        dark:from-gray-900 dark:via-gray-800 dark:to-black 
        text-text-light dark:text-text-dark 
        transition-colors duration-300 overflow-hidden flex items-center"
    >
      {/* Animated Background Orbs */}
      <div className="absolute top-24 left-10 w-72 h-72 bg-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-1/3 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center px-6 gap-10 md:gap-16">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center items-center md:items-start text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight 
            bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Hi, I'm Aakash 👋
          </h1>

          <p className="text-xl sm:text-2xl py-4 max-w-md font-medium 
            bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            <Typewriter
              words={[
                "Software Engineer",
                "Full Stack Developer",
                "System Design Enthusiast",
                "Cloud & DevOps Engineer",
                "Competitive Programmer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </p>

          <p className="text-gray-600 dark:text-gray-300 pb-6 max-w-md text-md sm:text-lg">
            I build scalable systems and solve real-world problems using clean code,
            cloud technologies, and thoughtful design.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center md:justify-start">
            <Link
              to="Portfolio"
              smooth={true}
              duration={500}
              className="group inline-flex items-center px-6 py-3 font-semibold rounded-lg 
                text-white bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 
                shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              View Portfolio
              <span className="ml-2 group-hover:rotate-90 transition-transform duration-300">
                <MdKeyboardArrowRight size={25} />
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-10 md:mb-0"
        >
          <div className="relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur-lg opacity-60 group-hover:opacity-80 transition"></div>
            <img
              src={MY_PHOTO}
              alt="Aakash Anand"
              className="relative rounded-2xl shadow-2xl mx-auto w-52 sm:w-60 md:w-72 
                hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
