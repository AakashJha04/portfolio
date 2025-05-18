import React from 'react';
import MY_PHOTO from '../assets/mine.png';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
  return (
          <section
        name="Home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20"
      >

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        
        {/* Text Section */}
        <div className="flex flex-col justify-center h-full text-center md:text-left">
          <h1 className="text-4xl sm:text-7xl font-extrabold text-white leading-tight">
            I'm a Full Stack Developer
          </h1>
          <p className="text-gray-400 py-6 max-w-md text-lg">
            I build scalable systems and solve real-world problems using clean code,
            cloud technologies, and thoughtful design.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="Portfolio"
              smooth={true}
              duration={500}
              className="group inline-flex items-center px-6 py-3 text-white font-medium rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              Portfolio
              <span className="ml-2 group-hover:rotate-90 transition-transform duration-300">
                <MdKeyboardArrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-8 md:mt-0">
          <img
            src={MY_PHOTO}
            alt="Aakash Anand"
            className="rounded-xl mx-auto w-60 md:w-72"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
