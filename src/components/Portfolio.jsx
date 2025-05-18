import React from 'react'

const Portfolio = () => {

  const portfolios = [
    {
        id: 1,
        title: 'Build a Real Time Blogger App - FullStack',
        description: 'A full-stack blogging platform with real-time functionality.',
        techStack: 'React, Node.js, Socket.io, MongoDB',
        demoLink: '#',
        codeLink: '#',
    },
    {
        id: 2,
        title: 'Signature App - HTML + CSS + JS',
        description: 'A simple signature application built with HTML, CSS, and JavaScript.',
        techStack: 'HTML, CSS, JavaScript',
        demoLink: '#',
        codeLink: '#',
    },
    {
        id: 3,
        title: 'Wallet App - Full Stack',
        description: 'A full-stack wallet application for managing transactions.',
        techStack: 'React, Express, PostgreSQL',
        demoLink: '#',
        codeLink: '#',
    },
    {
        id: 4,
        title: 'Hospitallo - Hospital Management Portal',
        description: 'Manage doctors and patients seamlessly with admin portal and appointment booking.',
        techStack: 'MERN Stack, Cloudinary, Razorpay',
        demoLink: '#',
        codeLink: '#',
    },
    {
        id: 5,
        title: 'Yatraniwas - Travel Booking Platform',
        description: 'A platform to search, book, and manage stays and trips, similar to Airbnb.',
        techStack: 'Spring Boot, React, MySQL',
        demoLink: '#',
        codeLink: '#',
    },
    {
        id: 6,
        title: 'Jobberly - Job Networking Platform',
        description: 'A professional job networking site enabling connections, job posts, and messaging, similar to LinkedIn.',
        techStack: 'Spring Boot, React, PostgreSQL',
        demoLink: '#',
        codeLink: '#',
    },
    {
        id: 7,
        title: 'Indian Election Frontend App',
        description: 'Frontend application displaying election data with interactive visualizations.',
        techStack: 'React, Chart.js, REST APIs',
        demoLink: '#',
        codeLink: '#',
    },
    {
        id: 8,
        title: 'Car Price Prediction',
        description: 'Data Science project predicting car prices using regression models.',
        techStack: 'Python, Pandas, Scikit-Learn, Jupyter Notebook',
        demoLink: '#',
        codeLink: '#',
    },
    {
        id: 9,
        title: 'Handwritten Text Recognition',
        description: 'Machine learning app recognizing handwritten text with over 85% accuracy.',
        techStack: 'Python, TensorFlow, OpenCV',
        demoLink: '#',
        codeLink: '#',
    },
  ]

  return (
    <div name="Portfolio" className="bg-gradient-to-b from-gray-900 via-purple-900 to-black w-full text-white md:min-h-screen">
      <div className='max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-extrabold inline border-b-4 border-purple-600 text-purple-300'>
            Portfolio
          </p>
          <p className='py-6 text-gray-400 text-lg'>Check out some of the work right here.</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 sm:px-0'>
          {portfolios.map(({id, title, description, techStack, demoLink, codeLink}) => (
            <div
              key={id}
              className="bg-gradient-to-tr from-gray-800 via-purple-900 to-gray-900 rounded-xl shadow-lg shadow-purple-700 hover:shadow-purple-500 transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <div className='flex flex-col justify-center items-center p-6'>
                <p className='text-xl font-semibold mb-1 text-purple-400'>{title}</p>
                <p className='text-sm italic text-indigo-300 mb-3'>{techStack}</p>
                <p className='text-gray-300 text-center mb-6'>{description}</p>
                <div className='flex gap-6 w-full justify-center'>
                  <a
                    href={demoLink}
                    className='w-1/2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white rounded-md text-center font-medium shadow-md hover:shadow-blue-400 transition duration-300'
                    target="_blank" rel="noopener noreferrer"
                  >
                    DEMO
                  </a>
                  <a
                    href={codeLink}
                    className='w-1/2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-400 hover:from-green-500 hover:to-green-300 text-white rounded-md text-center font-medium shadow-md hover:shadow-green-400 transition duration-300'
                    target="_blank" rel="noopener noreferrer"
                  >
                    CODE
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
