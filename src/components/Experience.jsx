// src/components/Experience.jsx
import React, { useState } from "react";
import {
  FaReact, FaJava, FaDatabase, FaAws, FaGithub, FaPython,
  FaHtml5, FaCss3Alt, FaJs, FaDocker, FaGitAlt, FaChevronDown, FaChevronUp
} from "react-icons/fa";

import { SiDotnet } from "react-icons/si";
import {
  SiMongodb, SiSpringboot, SiExpress, SiNextdotjs, SiFlask,
  SiTypescript, SiTailwindcss, SiPostgresql, SiMysql, SiPrisma,
  SiGraphql, SiCypress, SiJest, SiRedux,
  SiC, SiCplusplus, SiHibernate, SiPytest,
  SiKubernetes, SiZoho, SiGooglecloud, SiDropbox, SiAngular
} from "react-icons/si";

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
      { id: 14, title: "Angular", icon: <SiAngular size={28} className="text-red-500" /> }
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
    category: "DevOps",
    items: [
      { id: 23, title: "Docker", icon: <FaDocker size={28} className="text-blue-500" /> },
      { id: 24, title: "AWS", icon: <FaAws size={28} className="text-orange-400" /> },
      { id: 25, title: "GitHub Actions", icon: <FaGithub size={28} className="text-gray-700 dark:text-gray-300" /> },
      { id: 26, title: "Kubernetes", icon: <SiKubernetes size={28} className="text-blue-400" /> },
    ],
  },
  {
    category: "Cloud & APIs",
    items: [
      { id: 27, title: "Dropbox API", icon: <SiDropbox size={28} className="text-blue-400" /> },
      { id: 28, title: "Zoho Lims API", icon: <SiZoho size={28} className="text-red-400" /> },
      { id: 29, title: "Google APIs", icon: <SiGooglecloud size={28} className="text-red-400" /> },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { id: 30, title: "GraphQL", icon: <SiGraphql size={28} className="text-pink-500" /> },
      { id: 31, title: "Git & GitHub", icon: <FaGitAlt size={28} className="text-orange-500" /> },
      { id: 32, title: "Prisma", icon: <SiPrisma size={28} className="text-indigo-500" /> },
      { id: 33, title: "WebSocket", icon: <SiRedux size={28} className="text-purple-400" /> },
      { id: 34, title: "Pytest", icon: <SiPytest size={28} className="text-yellow-300" /> },
      { id: 35, title: "Jest", icon: <SiJest size={28} className="text-rose-500" /> },
      { id: 36, title: "Cypress", icon: <SiCypress size={28} className="text-emerald-400" /> },
      { id: 37, title: "Hibernate", icon: <SiHibernate size={28} className="text-yellow-600" /> },
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
      className="relative w-full py-16 px-6 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">
            Experience
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A journey through technologies I’ve worked with
          </p>
        </div>

        {/* Cards layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl shadow-lg bg-white/60 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md overflow-hidden transition"
            >
              {/* Card header */}
              <button
                onClick={() => toggleCard(group.category)}
                className="w-full flex justify-between items-center px-4 py-3 bg-gradient-to-r from-cyan-400/20 to-fuchsia-500/20 dark:from-cyan-400/10 dark:to-fuchsia-500/10"
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {group.category}
                </h3>
                {openCard === group.category ? (
                  <FaChevronUp className="text-gray-600 dark:text-gray-300" />
                ) : (
                  <FaChevronDown className="text-gray-600 dark:text-gray-300" />
                )}
              </button>

              {/* Expandable skills */}
              {openCard === group.category && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
                  {group.items.map(({ id, title, icon }) => (
                    <div
                      key={id}
                      className="flex flex-col items-center justify-center p-3 rounded-lg bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-cyan-400 transition"
                    >
                      {icon}
                      <p className="mt-2 text-sm font-medium text-gray-800 dark:text-gray-200 text-center">
                        {title}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
