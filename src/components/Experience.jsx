// src/components/Experience.jsx
import React from "react";
import { motion } from "framer-motion";

import {
  FaReact,
  FaJava,
  FaDatabase,
  FaAws,
  FaGithub,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDocker,
  FaGitAlt,
  FaProjectDiagram,
} from "react-icons/fa";

import {
  SiDotnet,
  SiMongodb,
  SiSpringboot,
  SiExpress,
  SiNextdotjs,
  SiFlask,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiGraphql,
  SiCypress,
  SiJest,
  SiRedux,
  SiC,
  SiCplusplus,
  SiHibernate,
  SiPytest,
  SiKubernetes,
  SiZoho,
  SiGooglecloud,
  SiDropbox,
  SiAngular,
  SiGo,
  SiStreamlit,
} from "react-icons/si";

/* ===========================
   ALL TECH — FINAL
=========================== */

const skillSections = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: <FaJava className="text-orange-500" /> },
      { name: "Python", icon: <FaPython className="text-yellow-400" /> },
      { name: "Go", icon: <SiGo className="text-cyan-400" /> },
      { name: "C", icon: <SiC className="text-blue-400" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "SQL", icon: <FaDatabase className="text-green-500" /> },
      { name: "C#", icon: <SiDotnet className="text-purple-500" /> },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "Angular", icon: <SiAngular className="text-red-500" /> },
      { name: "Streamlit", icon: <SiStreamlit className="text-red-400" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Spring Boot", icon: <SiSpringboot className="text-green-400" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-400 dark:text-gray-300" /> },
      { name: "Flask", icon: <SiFlask className="text-yellow-400" /> },
      { name: "ASP.NET", icon: <SiDotnet className="text-blue-500" /> },
      { name: ".NET Core", icon: <SiDotnet className="text-purple-500" /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "PostGIS (Spatial DB)", icon: <SiPostgresql className="text-indigo-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-sky-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Neo4j (Graph DB)", icon: <FaProjectDiagram className="text-emerald-500" /> },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
      { name: "AWS", icon: <FaAws className="text-orange-400" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-400" /> },
      { name: "GitHub Actions", icon: <FaGithub className="text-gray-600 dark:text-gray-300" /> },
      { name: "Google APIs", icon: <SiGooglecloud className="text-red-400" /> },
      { name: "Dropbox API", icon: <SiDropbox className="text-blue-400" /> },
      { name: "Zoho LIMS API", icon: <SiZoho className="text-red-400" /> },
    ],
  },
  {
    title: "Tools & Testing",
    skills: [
      { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
      { name: "Prisma", icon: <SiPrisma className="text-indigo-500" /> },
      { name: "WebSocket", icon: <SiRedux className="text-purple-400" /> },
      { name: "Pytest", icon: <SiPytest className="text-yellow-300" /> },
      { name: "Jest", icon: <SiJest className="text-rose-500" /> },
      { name: "Cypress", icon: <SiCypress className="text-emerald-400" /> },
      { name: "Hibernate", icon: <SiHibernate className="text-yellow-600" /> },
      { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-500" /> },
    ],
  },
];

/* ===========================
        COMPONENT
=========================== */

const Experience = () => {
  return (
    <section
      name="Experience"
      className="
        relative min-h-screen px-6 py-24
        bg-gradient-to-br
        from-gray-100 via-white to-gray-200
        dark:from-gray-900 dark:via-gray-800 dark:to-black
        transition-colors duration-300 overflow-hidden
      "
    >
      {/* Floating background orbs */}
      <div className="absolute top-16 left-20 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-16 right-20 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
            Technologies floating through my engineering ecosystem ☁️
          </p>
        </div>

        {/* Skill Sections */}
        <div className="space-y-20">
          {skillSections.map((section, i) => (
            <div key={i}>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-8">
                {section.title}
              </h3>

              <div className="flex flex-wrap gap-5">
                {section.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      delay: idx * 0.25,
                      ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.15 }}
                    className="
                      w-24 h-24 flex flex-col items-center justify-center
                      rounded-xl backdrop-blur-xl
                      bg-white/60 dark:bg-white/10
                      border border-gray-200 dark:border-white/20
                      shadow-md cursor-pointer transition-colors
                    "
                  >
                    <div className="text-2xl">{skill.icon}</div>
                    <p className="mt-1 text-xs text-gray-800 dark:text-gray-200 text-center">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
