import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll'

const NavBar = () => {
  
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'Home'
    },
    {
      id: 2,
      link: 'About'
    },
    {
      id: 3,
      link: 'Portfolio'
    },
    {
      id: 4,
      link: 'Experience'
    },
    {
      id: 5,
      link: 'Contact'
    },
  ]

  return (
    <div className="flex justify-between items-center w-full h-16 px-2 text-white bg-black fixed z-50">
  <div>
    <h1 className="text-2xl font-signature">Aakash Anand</h1> {/* Reduced from text-5xl */}
  </div>

  <ul className="hidden md:flex">
    {links.map(({ id, link }) => (
      <li
        key={id}
        className="px-2 cursor-pointer capitalize 
        text-sm font-medium text-gray-400 hover:scale-105 
        duration-200"
      >
        <Link to={link} smooth duration={500}>
          {link}
        </Link>
      </li>
    ))}
  </ul>

  <div
    onClick={() => setNav(!nav)}
    className="cursor-pointer pr-2 z-10 text-gray-400 md:hidden"
  >
    {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
  </div>

  {nav && (
    <ul className="flex flex-col justify-center items-center
      absolute top-0 left-0 w-full h-screen bg-gradient-to-b
      from-black to-gray-800 text-gray-400">
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
