// src/components/Portfolio.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaStream,
} from "react-icons/fa";

import {
  SiMongodb,
  SiPostgresql,
  SiSpringboot,
  SiRedis,
  SiKubernetes,
  SiMysql,
  SiExpress,
  SiGraphql,
  SiTensorflow,
  SiOpencv,
} from "react-icons/si";

/* ===========================
   TECH ICON MAP
=========================== */

const techIcons = {
  React: <FaReact className="text-cyan-400" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  Express: <SiExpress className="text-gray-400" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  PostgreSQL: <SiPostgresql className="text-blue-400" />,
  MySQL: <SiMysql className="text-sky-400" />,
  Redis: <SiRedis className="text-red-400" />,
  Kafka: <FaStream className="text-orange-400" />,   // ✅ FIX
  Docker: <FaDocker className="text-blue-400" />,
  Kubernetes: <SiKubernetes className="text-blue-500" />,
  AWS: <FaAws className="text-orange-400" />,
  S3: <FaAws className="text-yellow-400" />,
  "Spring Boot": <SiSpringboot className="text-green-500" />,
  GraphQL: <SiGraphql className="text-pink-400" />,
  Python: <FaPython className="text-yellow-400" />,
  TensorFlow: <SiTensorflow className="text-orange-500" />,
  OpenCV: <SiOpencv className="text-green-400" />,
};

/* ===========================
   PROJECT DATA (18 PROJECTS)
=========================== */

const projects = [
  {
    title: "Real-Time Blogging Platform",
    desc: "Scalable blogging platform with live updates and user engagement.",
    tech: ["React", "Node.js", "MongoDB"],
    extra: ["Docker", "AWS"],
  },
  {
    title: "Expense Sharing System (Splitwise-like)",
    desc: "Backend-heavy expense sharing system with balance reconciliation.",
    tech: ["Spring Boot", "PostgreSQL", "Redis"],
    extra: ["Docker", "AWS"],
  },
  {
    title: "Wallet & Transaction System",
    desc: "Secure wallet system with transactional integrity.",
    tech: ["React", "Express", "PostgreSQL"],
    extra: ["Docker"],
  },
  {
    title: "Hospital Management Platform",
    desc: "Admin-driven hospital workflows and appointment management.",
    tech: ["React", "Node.js", "MongoDB"],
    extra: ["Docker", "AWS"],
  },
  {
    title: "Travel Booking Platform",
    desc: "Airbnb-style booking system with search and reservations.",
    tech: ["Spring Boot", "MySQL", "React"],
    extra: ["Docker"],
  },
  {
    title: "Distributed File Storage Service",
    desc: "Object storage based file upload/download service.",
    tech: ["Node.js", "AWS", "S3"],
    extra: ["Docker"],
  },
  {
    title: "Real-Time Chat Application",
    desc: "Low-latency chat system using WebSockets.",
    tech: ["React", "Node.js", "MongoDB"],
    extra: ["Docker", "AWS"],
  },
  {
    title: "Microservices Order Processing System",
    desc: "Event-driven order processing using streaming architecture.",
    tech: ["Spring Boot", "Kafka", "PostgreSQL"],
    extra: ["Docker", "Kubernetes"],
  },
  {
    title: "Recommendation Engine",
    desc: "Graph-based recommendation engine.",
    tech: ["Python"],
    extra: ["Docker"],
  },
  {
    title: "Election Data Visualization",
    desc: "Frontend dashboard for election insights.",
    tech: ["React"],
    extra: [],
  },
  {
    title: "Car Price Prediction",
    desc: "ML regression system for predicting car prices.",
    tech: ["Python", "TensorFlow"],
    extra: [],
  },
  {
    title: "Handwritten Text Recognition",
    desc: "CNN-based handwritten text recognition system.",
    tech: ["Python", "TensorFlow", "OpenCV"],
    extra: [],
  },
  {
    title: "URL Shortener",
    desc: "Highly scalable URL shortening service.",
    tech: ["Node.js", "Redis", "PostgreSQL"],
    extra: ["Docker"],
  },
  {
    title: "Log Aggregation System",
    desc: "Centralized logging system for microservices.",
    tech: ["Kafka", "Spring Boot"],
    extra: ["Docker", "Kubernetes"],
  },
  {
    title: "CI/CD Pipeline",
    desc: "Automated CI/CD pipeline for containerized services.",
    tech: ["Docker"],
    extra: ["AWS"],
  },
  {
    title: "Geo-Spatial Query System",
    desc: "Location-based spatial query system.",
    tech: ["PostgreSQL"],
    extra: ["Docker"],
  },
  {
    title: "API Rate Limiter",
    desc: "Distributed API rate limiting system.",
    tech: ["Node.js", "Redis"],
    extra: ["Docker"],
  },
  {
    title: "Kubernetes Deployment Platform",
    desc: "Production-ready Kubernetes deployments.",
    tech: ["Docker", "Kubernetes"],
    extra: ["AWS"],
  },
];

/* ===========================
        COMPONENT
=========================== */

const ITEMS_PER_PAGE = 4;

const Portfolio = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const paginatedProjects = projects.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <section
      name="Portfolio"
      className="
        relative px-6 py-16
        bg-gradient-to-br
        from-gray-100 via-white to-gray-200
        dark:from-gray-900 dark:via-gray-800 dark:to-black
        transition-colors duration-300
      "
    >
      {/* Color Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Portfolio
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Advanced engineering projects across backend, systems & cloud 🚀
          </p>
        </div>

        {/* Projects */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {paginatedProjects.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="
                  rounded-2xl p-6
                  bg-white/70 dark:bg-white/10
                  backdrop-blur-xl
                  border border-gray-200 dark:border-white/15
                  shadow-lg
                "
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {[...p.tech, ...p.extra].map((tech, idx) => (
                    <span
                      key={idx}
                      className="
                        flex items-center gap-2 px-3 py-1 rounded-full
                        text-xs
                        bg-gradient-to-r
                        from-cyan-500/20 to-purple-500/20
                        dark:from-cyan-500/30 dark:to-purple-500/30
                        text-gray-900 dark:text-gray-200
                      "
                    >
                      {techIcons[tech]}
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 rounded-lg bg-gray-300 dark:bg-gray-700 disabled:opacity-40"
          >
            Prev
          </button>
          <span className="text-gray-700 dark:text-gray-300">
            Page {page} of {totalPages}
          </span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 rounded-lg bg-gray-300 dark:bg-gray-700 disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
