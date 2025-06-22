import React from 'react';

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
  ];

  return (
    <div
      name="Portfolio"
      className="w-full min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300"
    >
      <div className="max-w-screen-xl p-6 mx-auto flex flex-col justify-center h-full">
        <div className="pb-12 text-center">
          <h2 className="text-5xl font-extrabold border-b-4 border-gray-300 dark:border-gray-600 inline-block mb-4">
            Portfolio
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
            Here are some of my selected works. Click to explore the demo and source code.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolios.map(({ id, title, description, techStack, demoLink, codeLink }) => (
            <div
              key={id}
              className="bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-2 text-center">{title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center italic mb-3">{techStack}</p>
              <p className="text-gray-700 dark:text-gray-300 text-center text-sm mb-6">{description}</p>
              <div className="flex justify-center gap-4">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 w-1/2 text-sm font-medium text-center text-white bg-blue-600 hover:bg-blue-500 rounded-md shadow hover:shadow-blue-400 transition"
                >
                  Demo
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 w-1/2 text-sm font-medium text-center text-white bg-green-600 hover:bg-green-500 rounded-md shadow hover:shadow-green-400 transition"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
