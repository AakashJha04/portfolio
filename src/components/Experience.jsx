import React from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaJava, FaDatabase, FaAws, FaGithub, FaPython,
  FaHtml5, FaCss3Alt, FaJs, FaDocker, FaGitAlt
} from "react-icons/fa";

import {
  SiMongodb, SiSpringboot, SiExpress, SiNextdotjs, SiFlask,
  SiTypescript, SiTailwindcss, SiPostgresql, SiMysql, SiPrisma,
  SiGraphql, SiCypress, SiJest, SiRedux, SiVisualstudiocode,
  SiC, SiCplusplus, SiHibernate, SiJunit, SiPytest,
  SiKubernetes, SiZoho, SiGooglecloud, SiDropbox,
  SiDotnet, SiAngular
} from "react-icons/si";

const techGroups = [
  {
    category: "Programming Languages",
    items: [
      { id: 1, title: "Java", icon: <FaJava size={40} className="text-orange-500" /> },
      { id: 2, title: "Python", icon: <FaPython size={40} className="text-yellow-400" /> },
      { id: 3, title: "C", icon: <SiC size={40} className="text-blue-400" /> },
      { id: 4, title: "C++", icon: <SiCplusplus size={40} className="text-blue-500" /> },
      { id: 5, title: "JavaScript", icon: <FaJs size={40} className="text-yellow-400" /> },
      { id: 6, title: "TypeScript", icon: <SiTypescript size={40} className="text-blue-600" /> },
      { id: 7, title: "SQL", icon: <FaDatabase size={40} className="text-green-500" /> },
    ],
  },
  {
    category: "Frontend",
    items: [
      { id: 8, title: "React", icon: <FaReact size={40} className="text-cyan-400" /> },
      { id: 9, title: "Next.js", icon: <SiNextdotjs size={40} className="text-black dark:text-white" /> },
      { id: 10, title: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-teal-400" /> },
      { id: 11, title: "HTML", icon: <FaHtml5 size={40} className="text-orange-500" /> },
      { id: 12, title: "CSS", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
      { id: 13, title: "Angular", icon: <SiAngular size={40} className="text-red-500" /> }
    ],
  },
  {
    category: "Backend",
    items: [
      { id: 14, title: "Spring Boot", icon: <SiSpringboot size={40} className="text-green-400" /> },
      { id: 15, title: "Express.js", icon: <SiExpress size={40} className="text-gray-300" /> },
      { id: 16, title: "Flask", icon: <SiFlask size={40} className="text-yellow-400" /> },
      { id: 17, title: "C# .NET Core", icon: <SiDotnet size={40} className="text-purple-500" /> },
      { id: 18, title: "ASP.NET", icon: <SiDotnet size={40} className="text-blue-500" /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { id: 19, title: "PostgreSQL", icon: <SiPostgresql size={40} className="text-blue-400" /> },
      { id: 20, title: "MySQL", icon: <SiMysql size={40} className="text-sky-500" /> },
      { id: 21, title: "MongoDB", icon: <SiMongodb size={40} className="text-green-500" /> },
    ],
  },
  {
    category: "DevOps",
    items: [
      { id: 22, title: "Docker", icon: <FaDocker size={40} className="text-blue-500" /> },
      { id: 23, title: "AWS", icon: <FaAws size={40} className="text-orange-400" /> },
      { id: 24, title: "GitHub Actions", icon: <FaGithub size={40} className="text-white dark:text-gray-300" /> },
      { id: 25, title: "Kubernetes", icon: <SiKubernetes size={40} className="text-blue-400" /> },
    ],
  },
  {
    category: "Cloud & APIs",
    items: [
      { id: 26, title: "Dropbox API", icon: <SiDropbox size={40} className="text-blue-400" /> },
      { id: 27, title: "Zoho Lims API", icon: <SiZoho size={40} className="text-red-400" /> },
      { id: 28, title: "Google APIs", icon: <SiGooglecloud size={40} className="text-red-400" /> },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { id: 29, title: "GraphQL", icon: <SiGraphql size={40} className="text-pink-500" /> },
      { id: 30, title: "Git & GitHub", icon: <FaGitAlt size={40} className="text-orange-500" /> },
      { id: 31, title: "Prisma", icon: <SiPrisma size={40} className="text-indigo-500" /> },
      { id: 32, title: "WebSocket", icon: <SiRedux size={40} className="text-purple-400" /> }, // fallback
      { id: 33, title: "Pytest", icon: <SiPytest size={40} className="text-yellow-300" /> },
      { id: 34, title: "Jest", icon: <SiJest size={40} className="text-rose-500" /> },
      { id: 35, title: "Cypress", icon: <SiCypress size={40} className="text-emerald-400" /> },
      { id: 36, title: "Hibernate", icon: <SiHibernate size={40} className="text-yellow-600" /> },
    ],
  },
];

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  },
});

const Experience = () => {
  return (
    <div
      name="Experience"
      className="w-full py-16 px-4 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center">
        <div className="mb-16 text-center">
          <motion.h2
            className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn(0)}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn(0.2)}
            viewport={{ once: true }}
          >
            Technologies I've worked with
          </motion.p>
        </div>

        {techGroups.map((group, idx) => (
          <motion.div
            key={idx}
            className="mb-14"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn(0.1 + idx * 0.2)}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-cyan-500 tracking-wide">
              {group.category}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {group.items.map(({ id, title, icon }) => (
                <motion.div
                  key={id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-cyan-400 transition-all duration-300 group flex flex-col items-center justify-center p-4 space-y-2"
                >
                  <div>{icon}</div>
                  <p className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-300 text-center">
                    {title}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
