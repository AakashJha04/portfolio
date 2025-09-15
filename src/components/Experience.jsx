// src/components/Experience.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact, FaJava, FaDatabase, FaAws, FaGithub, FaPython,
  FaHtml5, FaCss3Alt, FaJs, FaDocker, FaGitAlt,
  FaChevronDown, FaChevronUp
} from "react-icons/fa";
import { SiDotnet, SiMongodb, SiSpringboot, SiExpress, SiNextdotjs, SiFlask,
  SiTypescript, SiTailwindcss, SiPostgresql, SiMysql, SiPrisma, SiGraphql, 
  SiCypress, SiJest, SiRedux, SiC, SiCplusplus, SiHibernate, SiPytest,
  SiKubernetes, SiZoho, SiGooglecloud, SiDropbox, SiAngular
} from "react-icons/si";

// Grouped skills
const techGroups = [
  {
    category: "Programming Languages",
    items: [
      { id: 1, title: "Java", icon: <FaJava size={28} className="text-orange-500" /> },
      { id: 2, title: "Python", icon: <FaPython size={28} className="text-yellow-400" /> },
      { id: 3, title: "C", icon: <SiC size={28} className="text-blue-400" /> },
      { id: 4, title: "C++", icon: <SiCplusplus size={28} className="text-blue-500" /> },
      { id: 5, title: "JavaScript", icon: <FaJs size={28} className="text-yellow-400" /> },
      { id: 6, title: "TypeScript", icon: <SiTypescript size={28} className="text-blue-600" /> },
      { id: 7, title: "SQL", icon: <FaDatabase size={28} className="text-green-500" /> },
      { id: 8, title: "C#", icon: <SiDotnet size={28} className="text-purple-500" /> },
    ],
  },
  {
    category: "Frontend",
    items: [
      { id: 9, title: "React", icon: <FaReact size={28} className="text-cyan-400" /> },
      { id: 10, title: "Next.js", icon: <SiNextdotjs size={28} className="text-black dark:text-white" /> },
      { id: 11, title: "Tailwind CSS", icon: <SiTailwindcss size={28} className="text-teal-400" /> },
      { id: 12, title: "HTML", icon: <FaHtml5 size={28} className="text-orange-500" /> },
      { id: 13, title: "CSS", icon: <FaCss3Alt size={28} className="text-blue-500" /> },
      { id: 14, title: "Angular", icon: <SiAngular size={28} className="text-red-500" /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { id: 15, title: "Spring Boot", icon: <SiSpringboot size={28} className="text-green-400" /> },
      { id: 16, title: "Express.js", icon: <SiExpress size={28} className="text-gray-300" /> },
      { id: 17, title: "Flask", icon: <SiFlask size={28} className="text-yellow-400" /> },
      { id: 18, title: "C# .NET Core", icon: <SiDotnet size={28} className="text-purple-500" /> },
      { id: 19, title: "ASP.NET", icon: <SiDotnet size={28} className="text-blue-500" /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { id: 20, title: "PostgreSQL", icon: <SiPostgresql size={28} className="text-blue-400" /> },
      { id: 21, title: "MySQL", icon: <SiMysql size={28} className="text-sky-500" /> },
      { id: 22, title: "MongoDB", icon: <SiMongodb size={28} className="text-green-500" /> },
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      { id: 23, title: "Docker", icon: <FaDocker size={28} className="text-blue-500" /> },
      { id: 24, title: "AWS", icon: <FaAws size={28} className="text-orange-400" /> },
      { id: 25, title: "Kubernetes", icon: <SiKubernetes size={28} className="text-blue-400" /> },
      { id: 26, title: "GitHub Actions", icon: <FaGithub size={28} className="text-gray-700 dark:text-gray-300" /> },
      { id: 27, title: "Google APIs", icon: <SiGooglecloud size={28} className="text-red-400" /> },
      { id: 28, title: "Dropbox API", icon: <SiDropbox size={28} className="text-blue-400" /> },
      { id: 29, title: "Zoho Lims API", icon: <SiZoho size={28} className="text-red-400" /> },
    ],
  },
  {
    category: "Tools & Testing",
    items: [
      { id: 30, title: "GraphQL", icon: <SiGraphql size={28} className="text-pink-500" /> },
      { id: 31, title: "Prisma", icon: <SiPrisma size={28} className="text-indigo-500" /> },
      { id: 32, title: "WebSocket", icon: <SiRedux size={28} className="text-purple-400" /> },
      { id: 33, title: "Pytest", icon: <SiPytest size={28} className="text-yellow-300" /> },
      { id: 34, title: "Jest", icon: <SiJest size={28} className="text-rose-500" /> },
      { id: 35, title: "Cypress", icon: <SiCypress size={28} className="text-emerald-400" /> },
      { id: 36, title: "Hibernate", icon: <SiHibernate size={28} className="text-yellow-600" /> },
      { id: 37, title: "Git & GitHub", icon: <FaGitAlt size={28} className="text-orange-500" /> },
    ],
  },
];

const Experience = () => {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (category) => {
    setOpenCard(openCard === category ? null : category);
  };

  return (
    <section
      name="Experience"
      className="relative w-full min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-black px-6 py-20 transition-colors duration-300"
    >
      {/* Background Orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-600 dark:text-gray-300">
            A journey through technologies I’ve worked with 🚀
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {techGroups.map((group) => (
            <motion.div
              key={group.category}
              className="rounded-2xl shadow-xl backdrop-blur-lg bg-white/40 dark:bg-gray-900/40 border border-white/20 dark:border-gray-700/30 overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => toggleCard(group.category)}
            >
              <div className="flex justify-between items-center p-5 bg-gradient-to-r from-cyan-400/20 to-pink-500/20 dark:from-cyan-400/10 dark:to-pink-500/10">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {group.category}
                </h3>
                {openCard === group.category ? (
                  <FaChevronUp className="text-gray-600 dark:text-gray-300" />
                ) : (
                  <FaChevronDown className="text-gray-600 dark:text-gray-300" />
                )}
              </div>

              {/* Skills */}
              <AnimatePresence>
                {openCard === group.category && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-5"
                  >
                    {group.items.map(({ id, title, icon }) => (
                      <motion.div
                        key={id}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center justify-center p-3 rounded-lg bg-white/70 dark:bg-white/5 border border-transparent hover:border-cyan-400/50 shadow-sm transition-all"
                      >
                        {icon}
                        <p className="mt-2 text-sm font-medium text-gray-800 dark:text-gray-200 text-center">
                          {title}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
