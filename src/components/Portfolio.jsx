import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaJava } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiSpringboot, SiTensorflow, SiJavascript, SiHtml5, SiCss3, SiChartdotjs, SiScikitlearn, SiOpencv, SiPandas, SiMysql, SiExpress } from "react-icons/si";

const techIcons = {
  React: <FaReact className="text-cyan-400 text-xl" />,
  "Node.js": <FaNodeJs className="text-green-500 text-xl" />,
  "Express": <SiExpress className="text-gray-400 text-xl" />,
  MongoDB: <SiMongodb className="text-green-600 text-xl" />,
  PostgreSQL: <SiPostgresql className="text-blue-500 text-xl" />,
  "Spring Boot": <SiSpringboot className="text-green-700 text-xl" />,
  Java: <FaJava className="text-red-500 text-xl" />,
  Python: <FaPython className="text-yellow-500 text-xl" />,
  TensorFlow: <SiTensorflow className="text-orange-500 text-xl" />,
  OpenCV: <SiOpencv className="text-green-500 text-xl" />,
  Pandas: <SiPandas className="text-indigo-400 text-xl" />,
  "Scikit-Learn": <SiScikitlearn className="text-yellow-400 text-xl" />,
  "HTML": <SiHtml5 className="text-orange-500 text-xl" />,
  "CSS": <SiCss3 className="text-blue-500 text-xl" />,
  "JavaScript": <SiJavascript className="text-yellow-400 text-xl" />,
  "Chart.js": <SiChartdotjs className="text-pink-500 text-xl" />,
  MySQL: <SiMysql className="text-blue-600 text-xl" />,
};

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "Build a Real Time Blogger App - FullStack",
      description: "A full-stack blogging platform with real-time functionality.",
      techStack: ["React", "Node.js", "MongoDB"],
      image: "/images/BuildaRealTimeBloggerApp.png",
    },
    {
      id: 2,
      title: "Signature App - HTML + CSS + JS",
      description: "A simple signature application built with HTML, CSS, and JavaScript.",
      techStack: ["HTML", "CSS", "JavaScript"],
      image: "/images/Signature-Pad.png",
    },
    {
      id: 3,
      title: "Wallet App - Full Stack",
      description: "A full-stack wallet application for managing transactions.",
      techStack: ["React", "Express", "PostgreSQL"],
      image: "/images/wallet_app.png",
    },
    {
      id: 4,
      title: "Hospitallo - Hospital Management Portal",
      description: "Manage doctors and patients seamlessly with admin portal and appointment booking.",
      techStack: ["React", "Node.js", "MongoDB"],
      image: "/images/Hospitallo.png",
    },
    {
      id: 5,
      title: "Yatraniwas - Travel Booking Platform",
      description: "A platform to search, book, and manage stays and trips, similar to Airbnb.",
      techStack: ["Spring Boot", "React", "MySQL"],
      image: "/images/yatra_nivas.jpg",
    },
    {
      id: 6,
      title: "Jobberly - Job Networking Platform",
      description: "A professional job networking site enabling connections, job posts, and messaging.",
      techStack: ["Spring Boot", "React", "PostgreSQL"],
      image: "/images/jobber.png",
    },
    {
      id: 7,
      title: "Indian Election Frontend App",
      description: "Frontend application displaying election data with interactive visualizations.",
      techStack: ["React", "Chart.js"],
      image: "/images/indian_election.png",
    },
    {
      id: 8,
      title: "Car Price Prediction",
      description: "Data Science project predicting car prices using regression models.",
      techStack: ["Python", "Pandas", "Scikit-Learn"],
      image: "/images/car-price-predictor.png",
    },
    {
      id: 9,
      title: "Handwritten Text Recognition",
      description: "Machine learning app recognizing handwritten text with over 85% accuracy.",
      techStack: ["Python", "TensorFlow", "OpenCV"],
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
      <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col justify-center h-full">
        {/* Heading */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            Portfolio
          </motion.h2>
          <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
            Scroll sideways to explore my featured projects ✨
          </p>
        </div>

        {/* Horizontal Scroll Row */}
        <div className="overflow-x-auto pb-6">
          <div className="flex gap-6">
            {portfolios.map(({ id, title, description, techStack, image }) => (
              <motion.div
                key={id}
                className="relative min-w-[260px] max-w-[280px] flex-shrink-0 rounded-xl overflow-hidden 
                backdrop-blur-xl bg-white/40 dark:bg-gray-900/40 border border-white/20 dark:border-gray-700/40 
                shadow-xl group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <img
                  src={image}
                  alt={title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Content */}
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-1">
                    {title}
                  </h3>
                  <p className="text-xs italic text-gray-700 dark:text-gray-300 mb-2">
                    {description}
                  </p>

                  {/* Tech Icons */}
                  <div className="flex justify-center gap-3 mt-3">
                    {techStack.map((tech, index) => (
                      <span key={index}>{techIcons[tech] || <span className="text-xs">{tech}</span>}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
