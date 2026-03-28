import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/AakashJha04',
      style: 'rounded-tr-md',
      target: '_blank', // open in new tab
      rel: 'noreferrer',
    },
    {
      id: 2,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:aakashanand560@gmail.com?subject=Hello%20Aakash',
      // DO NOT set target for mailto
      target: '_self',
    },
    {
      id: 3,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: '/path/to/your-resume.pdf', // replace with your actual resume link
      style: 'rounded-br-md',
      download: true,
      target: '_blank',
      rel: 'noreferrer',
    },
  ]

  return (
    <>
      <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
          {links.map(({ id, child, href, style, download, target, rel }) => (
            <li
              key={id}
              className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style || ''}`}
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                download={download}
                target={target}
                rel={rel}
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 bg-black/70 dark:bg-white/10 rounded-full p-2 backdrop-blur-md z-50">
        {links.map(({ id, child, href, download, target, rel }) => (
          <a
            key={id}
            href={href}
            className="w-11 h-11 rounded-full flex items-center justify-center bg-white/90 dark:bg-gray-800/90 text-black dark:text-white shadow-md ring-1 ring-gray-300 dark:ring-white/20"
            download={download}
            target={target}
            rel={rel}
          >
            {id === 1 && <FaGithub size={18} />}
            {id === 2 && <HiOutlineMail size={18} />}
            {id === 3 && <BsFillPersonLinesFill size={18} />}
          </a>
        ))}
      </div>
    </>
  )
}

export default SocialLinks
