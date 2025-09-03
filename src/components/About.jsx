import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaAws,
  FaGithub,
  FaPython,
  FaBrain,
  FaMicrosoft,
} from "react-icons/fa";
import {
  SiMongodb,
  SiSpringboot,
  SiExpress,
  SiNextdotjs,
  SiFlask,
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
  SiGeeksforgeeks,
  SiDotnet,
} from "react-icons/si";
import { motion } from "framer-motion";

const About = () => {
  const skillCards = [
    {
      title: "Full Stack Development",
      desc: "Specialized in MERN & Spring Boot with robust, scalable, and cloud-native solutions.",
      icons: [
        <SiMongodb className="text-emerald-400" size={28} />,
        <SiExpress className="text-slate-400" size={28} />,
        <FaReact className="text-sky-400" size={28} />,
        <FaNodeJs className="text-green-500" size={28} />,
        <SiNextdotjs className="text-indigo-400" size={28} />,
      ],
    },
    {
      title: "Backend & Databases",
      desc: "Expertise in Java (Spring Boot, Hibernate, JPA) with strong SQL & NoSQL knowledge.",
      icons: [
        <FaJava className="text-orange-500" size={28} />,
        <SiSpringboot className="text-emerald-500" size={28} />,
        <FaDatabase className="text-cyan-400" size={28} />,
      ],
    },
    {
      title: "Cloud & DevOps",
      desc: "Skilled in REST APIs, CI/CD pipelines, and deployments on AWS.",
      icons: [
        <SiFlask className="text-teal-300" size={28} />,
        <FaGithub className="text-slate-200" size={28} />,
        <FaAws className="text-yellow-500" size={28} />,
      ],
    },
    {
      title: "AI / ML Journey",
      desc: "Currently diving deep into Artificial Intelligence and Machine Learning to build intelligent solutions.",
      icons: [
        <FaBrain className="text-pink-500" size={28} />,
        <FaPython className="text-yellow-400" size={28} />,
      ],
    },
    {
      title: ".NET Development",
      desc: "Specialized in .NET ecosystem to build enterprise-grade applications.",
      icons: [
        <SiDotnet className="text-purple-500" size={28} />,
        <FaMicrosoft className="text-blue-500" size={28} />,
      ],
    },
  ];

  const dsaPlatforms = [
    { icon: <SiLeetcode size={36} className="text-yellow-400" />, label: "LeetCode" },
    { icon: <SiGeeksforgeeks size={36} className="text-green-400" />, label: "GeeksforGeeks" },
    { icon: <SiCodeforces size={36} className="text-sky-400" />, label: "Codeforces" },
    { icon: <SiCodechef size={36} className="text-purple-400" />, label: "CodeChef" },
  ];

  return (
    <section
      name="About"
      className="relative w-full min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-800 dark:text-gray-200 px-6 py-20 transition-colors duration-300 flex items-center"
    >
      {/* Background Blur Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-screen-lg mx-auto flex flex-col justify-center h-full">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pb-12 text-center"
        >
          <h2 className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            About Me
          </h2>
        </motion.header>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg sm:text-xl leading-relaxed text-center max-w-3xl mx-auto mb-12 text-gray-700 dark:text-gray-300"
        >
          I’m a passionate{" "}
          <span className="text-cyan-500 font-semibold">Full-Stack Developer</span> who loves turning complex problems into clean, maintainable solutions. With strong foundations in{" "}
          <span className="font-semibold text-amber-500">system design, DSA & algorithms</span>, I constantly explore and innovate with{" "}
          <span className="text-pink-400 font-semibold">AI/ML</span>,{" "}
          <span className="text-purple-400 font-semibold">.NET</span>, and{" "}
          <span className="text-indigo-400 font-semibold">cloud-native development</span>.
        </motion.p>

        {/* Skills Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.07, rotate: 1 }}
              className="p-6 rounded-2xl backdrop-blur-xl bg-white/40 dark:bg-gray-900/40 border border-white/20 dark:border-gray-700/40 shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {card.title}
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">{card.desc}</p>
              <div className="flex gap-3">{card.icons}</div>
            </motion.div>
          ))}
        </div>

        {/* DSA Platforms */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-xl font-semibold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6 drop-shadow-md">
            Solved 1000+ DSA problems across multiple platforms:
          </p>
          <div className="flex flex-wrap gap-10 justify-center">
            {dsaPlatforms.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.25, rotate: 6 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-2 cursor-pointer hover:drop-shadow-lg"
              >
                {p.icon}
                <span className="text-sm text-gray-700 dark:text-gray-300">{p.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
