// src/components/Home.js
import React from 'react';
import MY_PHOTO from '../assets/mine.png';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <section
      name="Home"
      className="h-screen w-full pt-20 
        bg-background-light text-text-light 
        dark:bg-background-dark dark:text-text-dark 
        transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full px-4 gap-8 md:gap-12">

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center items-center md:items-start text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">
            Hi, I'm Aakash
          </h1>

          <p className="text-xl sm:text-2xl text-subtle-light dark:text-subtle-dark py-4 max-w-md">
            <Typewriter
              words={[
                'Software Engineer',
                'Full Stack Developer',
                'System Design Expert',
                'Coder',
                'Competitive Programmer',
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </p>

          <p className="text-subtle-light dark:text-subtle-dark pb-6 max-w-md text-md sm:text-lg">
            I build scalable systems and solve real-world problems using clean code,
            cloud technologies, and thoughtful design.
          </p>

          <div className="flex justify-center md:justify-start">
            <Link
              to="Portfolio"
              smooth={true}
              duration={500}
              className="group inline-flex items-center px-6 py-3 font-semibold rounded-lg 
                text-white bg-gradient-to-r from-cyan-500 to-blue-500 
                hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              Portfolio
              <span className="ml-2 group-hover:rotate-90 transition-transform duration-300">
                <MdKeyboardArrowRight size={25} />
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-10 md:mb-0"
        >
          <img
            src={MY_PHOTO}
            alt="Aakash Anand"
            className="rounded-xl shadow-xl mx-auto w-52 sm:w-60 md:w-72 hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
