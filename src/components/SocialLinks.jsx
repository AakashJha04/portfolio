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
  )
}

export default SocialLinks
