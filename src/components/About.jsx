import React from "react";
import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaAws,
  FaDocker,
  FaBrain,
  FaDatabase,
  FaProjectDiagram,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiKubernetes,
  SiDotnet,
  SiTensorflow,
  SiOpencv,
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
  SiGeeksforgeeks,
} from "react-icons/si";

/* ===========================
   ABOUT CARDS
=========================== */

const cards = [
  {
    title: "Backend & Systems Engineering",
    desc: "Design and build scalable backend systems with clean architecture, API contracts, and strong data consistency guarantees.",
    points: [
      "REST APIs, authentication, authorization",
      "Transaction management & data consistency",
      "Performance optimization & caching strategies",
    ],
    icons: [
      <FaJava className="text-orange-500" />,
      <SiSpringboot className="text-green-500" />,
      <FaNodeJs className="text-green-500" />,
      <SiRedis className="text-red-400" />,
    ],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Full-Stack Engineering",
    desc: "Build end-to-end applications with clean UI, scalable backend, and well-defined data flows.",
    points: [
      "Frontend + backend integration",
      "Reusable components & API-driven UI",
      "Focus on maintainability and UX",
    ],
    icons: [
      <FaReact className="text-cyan-400" />,
      <FaNodeJs className="text-green-500" />,
      <SiDotnet className="text-purple-500" />,
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Cloud & DevOps",
    desc: "Deploy, scale, and operate production systems using cloud-native and container-based infrastructure.",
    points: [
      "CI/CD pipelines & environment automation",
      "Dockerized services & orchestration",
      "Cloud deployments on AWS",
    ],
    icons: [
      <FaAws className="text-yellow-500" />,
      <FaDocker className="text-blue-500" />,
      <SiKubernetes className="text-blue-400" />,
    ],
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Databases & Data Modeling",
    desc: "Design efficient data models across relational and NoSQL databases based on access patterns.",
    points: [
      "Schema design & indexing strategies",
      "SQL & NoSQL trade-offs",
      "Data integrity & migrations",
    ],
    icons: [
      <FaDatabase className="text-cyan-400" />,
      <SiPostgresql className="text-blue-400" />,
      <SiMysql className="text-sky-400" />,
      <SiMongodb className="text-green-500" />,
    ],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Low-Level System Design (LLD)",
    desc: "Translate business requirements into clean, modular, and extensible class-level designs.",
    points: [
      "OOP principles & SOLID design",
      "Design patterns (Factory, Strategy, Observer, etc.)",
      "Clean code, modularity, testability",
    ],
    icons: [
      <FaProjectDiagram className="text-indigo-400" />,
      <FaJava className="text-orange-500" />,
      <SiDotnet className="text-purple-500" />,
    ],
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "High-Level System Design (HLD)",
    desc: "Design scalable, distributed systems by breaking problems into services and data flows.",
    points: [
      "Service decomposition & architecture",
      "Scalability, availability, and reliability",
      "Trade-offs: consistency vs availability",
    ],
    icons: [
      <FaProjectDiagram className="text-pink-400" />,
      <FaAws className="text-yellow-500" />,
      <SiRedis className="text-red-400" />,
    ],
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "AI / ML & Data",
    desc: "Build intelligent solutions using machine learning and data-driven approaches.",
    points: [
      "Supervised learning & model evaluation",
      "Computer vision basics",
      "Data preprocessing & feature engineering",
    ],
    icons: [
      <FaBrain className="text-pink-500" />,
      <FaPython className="text-yellow-400" />,
      <SiTensorflow className="text-orange-500" />,
      <SiOpencv className="text-green-400" />,
    ],
    gradient: "from-fuchsia-500 to-pink-500",
  },
  {
    title: "Problem Solving & DSA",
    desc: "Strong foundation in algorithms and data structures with consistent competitive programming practice.",
    points: [
      "Arrays, trees, graphs, DP, greedy",
      "Time & space complexity analysis",
      "1000+ problems solved",
    ],
    icons: [
      <SiLeetcode className="text-yellow-400" />,
      <SiGeeksforgeeks className="text-green-400" />,
      <SiCodeforces className="text-sky-400" />,
      <SiCodechef className="text-purple-400" />,
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
];

/* ===========================
        COMPONENT
=========================== */

const About = () => {
  return (
    <section
      name="About"
      className="
        relative px-6 py-20
        bg-gradient-to-br
        from-gray-100 via-white to-gray-200
        dark:from-gray-900 dark:via-gray-800 dark:to-black
        transition-colors duration-300
      "
    >
      {/* Ambient Orbs */}
      <div className="absolute top-24 left-20 w-80 h-80 bg-cyan-400/20 blur-3xl rounded-full" />
      <div className="absolute bottom-24 right-20 w-80 h-80 bg-pink-500/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="mt-4 max-w-4xl mx-auto text-gray-700 dark:text-gray-300">
            I’m a software engineer focused on building scalable systems, clean architectures,
            and production-ready applications with strong foundations in system design and problem solving.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="
                rounded-2xl p-6
                bg-white/60 dark:bg-white/10
                backdrop-blur-xl
                border border-gray-200 dark:border-white/15
                shadow-xl
              "
            >
              <h3
                className={`text-xl font-semibold mb-3 bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}
              >
                {card.title}
              </h3>

              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                {card.desc}
              </p>

              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mb-4 space-y-1">
                {card.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 text-2xl">
                {card.icons.map((icon, i) => (
                  <motion.span key={i} whileHover={{ scale: 1.2, rotate: 6 }}>
                    {icon}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
