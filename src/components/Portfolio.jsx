import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "Build a Real Time Blogger App - FullStack",
      description: "A full-stack blogging platform with real-time functionality.",
      techStack: "React, Node.js, Socket.io, MongoDB",
      demoLink: "#",
      codeLink: "#",
      image: "/images/BuildaRealTimeBloggerApp.png",
    },
    {
      id: 2,
      title: "Signature App - HTML + CSS + JS",
      description: "A simple signature application built with HTML, CSS, and JavaScript.",
      techStack: "HTML, CSS, JavaScript",
      demoLink: "#",
      codeLink: "#",
      image: "/images/Signature-Pad.png",
    },
    {
      id: 3,
      title: "Wallet App - Full Stack",
      description: "A full-stack wallet application for managing transactions.",
      techStack: "React, Express, PostgreSQL",
      demoLink: "#",
      codeLink: "#",
      image: "/images/wallet_app.png",
    },
    {
      id: 4,
      title: 'Hospitallo - Hospital Management Portal',
      description: 'Manage doctors and patients seamlessly with admin portal and appointment booking.',
      techStack: 'MERN Stack, Cloudinary, Razorpay',
      demoLink: '#',
      codeLink: '#',
      image: "/images/Hospitallo.png",
    },
    {
      id: 5,
      title: 'Yatraniwas - Travel Booking Platform',
      description: 'A platform to search, book, and manage stays and trips, similar to Airbnb.',
      techStack: 'Spring Boot, React, MySQL',
      demoLink: '#',
      codeLink: '#',
      image: "/images/yatra_nivas.jpg",
    },
    {
      id: 6,
      title: 'Jobberly - Job Networking Platform',
      description: 'A professional job networking site enabling connections, job posts, and messaging, similar to LinkedIn.',
      techStack: 'Spring Boot, React, PostgreSQL',
      demoLink: '#',
      codeLink: '#',
      image: "/images/jobber.png",
    },
    {
      id: 7,
      title: 'Indian Election Frontend App',
      description: 'Frontend application displaying election data with interactive visualizations.',
      techStack: 'React, Chart.js, REST APIs',
      demoLink: '#',
      codeLink: '#',
      image: "/images/indian_election.png",
    },
    {
      id: 8,
      title: 'Car Price Prediction',
      description: 'Data Science project predicting car prices using regression models.',
      techStack: 'Python, Pandas, Scikit-Learn, Jupyter Notebook',
      demoLink: '#',
      codeLink: '#',
      image: "/images/car-price-predictor.png",
    },
    {
      id: 9,
      title: 'Handwritten Text Recognition',
      description: 'Machine learning app recognizing handwritten text with over 85% accuracy.',
      techStack: 'Python, TensorFlow, OpenCV',
      demoLink: '#',
      codeLink: '#',
      image: "/images/hand_written_text_recoginition.png",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="w-full min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300"
    >
      <div className="max-w-screen-xl p-8 mx-auto flex flex-col justify-center h-full">
        <div className="pb-12 text-center">
          <h2 className="text-5xl font-extrabold border-b-4 border-gray-300 dark:border-gray-600 inline-block mb-6">
            Portfolio
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of my featured projects. Hover to see details and explore demo & source code.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolios.map(({ id, title, description, techStack, demoLink, codeLink, image }) => (
            <motion.div
              key={id}
              className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Image */}
              <img
                src={image}
                alt={title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="absolute bottom-0 p-6 w-full text-center text-white">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-sm italic text-gray-200 mb-2">{techStack}</p>
                <p className="text-gray-300 text-sm mb-4">{description}</p>

                <div className="flex justify-center gap-4">
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-medium text-center bg-blue-600 hover:bg-blue-500 rounded-md shadow"
                  >
                    Demo
                  </a>
                  <a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-medium text-center bg-green-600 hover:bg-green-500 rounded-md shadow"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
