import React from 'react'

const Portfolio = () => {

  const portfolios = [
    {
        id: 1,
        title: 'Build a Real Time Blogger App - FullStack',
        description: 'A full-stack blogging platform with real-time functionality.',
        demoLink: '#',
        codeLink: '#',
    },
    {
        id: 2,
        title: 'Signature App - HTML + CSS + JS',
        description: 'A simple signature application built with HTML, CSS, and JavaScript.',
        demoLink: '#',
        codeLink: '#',
    },
    {
        id: 3,
        title: 'Wallet App - Full Stack',
        description: 'A full-stack wallet application for managing transactions.',
        demoLink: '#',
        codeLink: '#',
    },
  ]

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black
    to-gray-800 w-full text-white md:h-screen">
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4
               border-gray-500'>
        Portfolio
        </p>
            <p className='py-6'>Check out some of the work right here.</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8
        px-12 sm:px-0'>

        {
            portfolios.map(({id, title, description, demoLink, codeLink}) =>(
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <div className='flex flex-col justify-center items-center p-4'>
                    <p className='text-xl font-bold'>{title}</p>
                    <p className='text-sm py-2'>{description}</p>
                    <div className='flex items-center justify-center w-full'>
                        <a href={demoLink} className='w-1/2 px-6 py-3 m-4
                        duration-200 hover:scale-105 text-center bg-blue-500 text-white rounded-md'>DEMO</a>
                        <a href={codeLink} className='w-1/2 px-6 py-3 m-4
                        duration-200 hover:scale-105 text-center bg-green-500 text-white rounded-md'>CODE</a>
                    </div>
                </div>
            </div>
            ))
        }
        </div>

      </div>
    </div>
  )
}

export default Portfolio
