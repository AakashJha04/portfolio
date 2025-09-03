// src/components/Experience.jsx (or Experience.js)
import React from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaJava, FaDatabase, FaAws, FaGithub, FaPython,
  FaHtml5, FaCss3Alt, FaJs, FaDocker, FaGitAlt
} from "react-icons/fa";

import { SiDotnet } from "react-icons/si";

import {
  SiMongodb, SiSpringboot, SiExpress, SiNextdotjs, SiFlask,
  SiTypescript, SiTailwindcss, SiPostgresql, SiMysql, SiPrisma,
  SiGraphql, SiCypress, SiJest, SiRedux,
  SiC, SiCplusplus, SiHibernate, SiPytest,
  SiKubernetes, SiZoho, SiGooglecloud, SiDropbox, SiAngular, SiCsharp
} from "react-icons/si";


// ✅ Your techGroups preserved and used below
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
      { id: 8, title: "C#", icon: <SiDotnet size={40} className="text-purple-500" />  },

    ],
  },
  {
    category: "Frontend",
    items: [
      { id: 9, title: "React", icon: <FaReact size={40} className="text-cyan-400" /> },
      { id: 10, title: "Next.js", icon: <SiNextdotjs size={40} className="text-black dark:text-white" /> },
      { id: 11, title: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-teal-400" /> },
      { id: 12, title: "HTML", icon: <FaHtml5 size={40} className="text-orange-500" /> },
      { id: 13, title: "CSS", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
      { id: 14, title: "Angular", icon: <SiAngular size={40} className="text-red-500" /> }
    ],
  },
  {
    category: "Backend",
    items: [
      { id: 15, title: "Spring Boot", icon: <SiSpringboot size={40} className="text-green-400" /> },
      { id: 16, title: "Express.js", icon: <SiExpress size={40} className="text-gray-300" /> },
      { id: 17, title: "Flask", icon: <SiFlask size={40} className="text-yellow-400" /> },
      { id: 18, title: "C# .NET Core", icon: <SiDotnet size={40} className="text-purple-500" /> },
      { id: 19, title: "ASP.NET", icon: <SiDotnet size={40} className="text-blue-500" /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { id: 20, title: "PostgreSQL", icon: <SiPostgresql size={40} className="text-blue-400" /> },
      { id: 21, title: "MySQL", icon: <SiMysql size={40} className="text-sky-500" /> },
      { id: 22, title: "MongoDB", icon: <SiMongodb size={40} className="text-green-500" /> },
    ],
  },
  {
    category: "DevOps",
    items: [
      { id: 23, title: "Docker", icon: <FaDocker size={40} className="text-blue-500" /> },
      { id: 24, title: "AWS", icon: <FaAws size={40} className="text-orange-400" /> },
      { id: 25, title: "GitHub Actions", icon: <FaGithub size={40} className="text-white dark:text-gray-300" /> },
      { id: 26, title: "Kubernetes", icon: <SiKubernetes size={40} className="text-blue-400" /> },
    ],
  },
  {
    category: "Cloud & APIs",
    items: [
      { id: 27, title: "Dropbox API", icon: <SiDropbox size={40} className="text-blue-400" /> },
      { id: 28, title: "Zoho Lims API", icon: <SiZoho size={40} className="text-red-400" /> },
      { id: 29, title: "Google APIs", icon: <SiGooglecloud size={40} className="text-red-400" /> },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { id: 30, title: "GraphQL", icon: <SiGraphql size={40} className="text-pink-500" /> },
      { id: 31, title: "Git & GitHub", icon: <FaGitAlt size={40} className="text-orange-500" /> },
      { id: 32, title: "Prisma", icon: <SiPrisma size={40} className="text-indigo-500" /> },
      { id: 33, title: "WebSocket", icon: <SiRedux size={40} className="text-purple-400" /> }, // fallback
      { id: 34, title: "Pytest", icon: <SiPytest size={40} className="text-yellow-300" /> },
      { id: 35, title: "Jest", icon: <SiJest size={40} className="text-rose-500" /> },
      { id: 36, title: "Cypress", icon: <SiCypress size={40} className="text-emerald-400" /> },
      { id: 37, title: "Hibernate", icon: <SiHibernate size={40} className="text-yellow-600" /> },
    ],
  },
];

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

const Experience = () => {
  return (
    <section
      name="Experience"
      className="relative w-full py-20 px-6 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark overflow-hidden"
    >
      {/* Decorative gradient glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />

      {/* Timeline vertical line */}
      <div className="absolute top-0 left-8 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-fuchsia-500 to-transparent opacity-40 rounded-full" aria-hidden />

      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <motion.h2
            className="text-5xl sm:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn(0)}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn(0.15)}
            viewport={{ once: true }}
          >
            A journey through technologies I’ve worked with
          </motion.p>
        </div>

        {techGroups.map((group, idx) => (
          <motion.div
            key={group.category}
            className="mb-20 relative pl-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn(0.15 + idx * 0.15)}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Timeline node */}
            <div className="absolute left-6 top-2 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 shadow-lg" />

            {/* Category header */}
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">
              {group.category}
            </h3>

            {/* Skills grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {group.items.map(({ id, title, icon }) => (
                <motion.div
                  key={id}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative group p-5 rounded-2xl shadow-lg bg-white/60 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-cyan-500/30 flex flex-col items-center justify-center space-y-2"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                  <div className="relative z-10">{icon}</div>
                  <p className="text-sm sm:text-base font-semibold text-center text-gray-800 dark:text-gray-200 group-hover:text-cyan-400">
                    {title}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
