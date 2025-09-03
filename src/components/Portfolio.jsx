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
      title: "Hospitallo - Hospital Management Portal",
      description:
        "Manage doctors and patients seamlessly with admin portal and appointment booking.",
      techStack: "MERN Stack, Cloudinary, Razorpay",
      demoLink: "#",
      codeLink: "#",
      image: "/images/Hospitallo.png",
    },
    {
      id: 5,
      title: "Yatraniwas - Travel Booking Platform",
      description:
        "A platform to search, book, and manage stays and trips, similar to Airbnb.",
      techStack: "Spring Boot, React, MySQL",
      demoLink: "#",
      codeLink: "#",
      image: "/images/yatra_nivas.jpg",
    },
    {
      id: 6,
      title: "Jobberly - Job Networking Platform",
      description:
        "A professional job networking site enabling connections, job posts, and messaging, similar to LinkedIn.",
      techStack: "Spring Boot, React, PostgreSQL",
      demoLink: "#",
      codeLink: "#",
      image: "/images/jobber.png",
    },
    {
      id: 7,
      title: "Indian Election Frontend App",
      description:
        "Frontend application displaying election data with interactive visualizations.",
      techStack: "React, Chart.js, REST APIs",
      demoLink: "#",
      codeLink: "#",
      image: "/images/indian_election.png",
    },
    {
      id: 8,
      title: "Car Price Prediction",
      description:
        "Data Science project predicting car prices using regression models.",
      techStack: "Python, Pandas, Scikit-Learn, Jupyter Notebook",
      demoLink: "#",
      codeLink: "#",
      image: "/images/car-price-predictor.png",
    },
    {
      id: 9,
      title: "Handwritten Text Recognition",
      description:
        "Machine learning app recognizing handwritten text with over 85% accuracy.",
      techStack: "Python, TensorFlow, OpenCV",
      demoLink: "#",
      codeLink: "#",
      image: "/images/hand_written_text_recoginition.png",
    },
  ];

  return (
    <section
      name="Portfolio"
      className="relative w-full min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 
      dark:from-gray-900 dark:via-gray-800 dark:to-black text-text-light dark:text-text-dark px-6 py-16 transition-colors duration-300"
    >
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col justify-center h-full">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            Portfolio
          </motion.h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Scroll sideways to explore my featured projects ✨
          </p>
        </div>

        {/* Horizontal Scroll Row */}
        <div className="overflow-x-auto pb-6">
          <div className="flex gap-8">
            {portfolios.map(
              ({ id, title, description, techStack, demoLink, codeLink, image }) => (
                <motion.div
                  key={id}
                  className="relative min-w-[300px] max-w-[340px] flex-shrink-0 rounded-2xl overflow-hidden 
                  backdrop-blur-xl bg-white/40 dark:bg-gray-900/40 border border-white/20 dark:border-gray-700/40 
                  shadow-2xl group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image */}
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                      {title}
                    </h3>
                    <p className="text-sm italic text-gray-700 dark:text-gray-300 mb-2">{techStack}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{description}</p>

                    <div className="flex justify-center gap-4">
                      <a
                        href={demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-sm font-medium text-white rounded-lg shadow 
                        bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 hover:shadow-xl transition"
                      >
                        Demo
                      </a>
                      <a
                        href={codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-sm font-medium text-white rounded-lg shadow 
                        bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 hover:shadow-xl transition"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
