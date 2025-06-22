import React from "react";
import { motion } from "framer-motion";

// Assets
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import reactImg from "../assets/react.png";
import graphql from "../assets/graphql.png";
import dropbox from "../assets/dropbox.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import docker from "../assets/docker.jpeg";
import aws from "../assets/AWS.png";
import node from "../assets/node.png";
import python from "../assets/python.png";
import typescript from "../assets/ts.png";
import cicd from "../assets/cicd.jpeg";
import prisma from "../assets/prisma.png";
import mysql from "../assets/my-sql.png";
import mongodb from "../assets/mongodb.png";
import postgresql from "../assets/psql.png";
import jest from "../assets/jest.png";
import cypress from "../assets/cypress.png";
import cpp from "../assets/c.png";
import c from "../assets/c_image.jpeg";
import java from "../assets/java.png";
import hibernate from "../assets/hibeenate.png";
import jpa from "../assets/jpa.png";
import springBoot from "../assets/springboot.png";
import sql from "../assets/sql.jpeg";
import nextjs from "../assets/nextjs.png";
import flask from "../assets/flask.png";
import ks8 from "../assets/ks8.png";
import zoho from "../assets/zoho.png";
import gAPI from "../assets/GAPI.png";
import Monorepo from "../assets/monorepo.png";
import WebSocket from "../assets/websocket.png";
import pytest from "../assets/pytest.png";
import junit from "../assets/Jubit.png";



const techGroups = [
  {
    category: "Programming Languages",
    items: [
      { id: 1, title: "Java", bg: java },
      { id: 2, title: "Python", bg: python },
      { id: 3, title: "C", bg: c },
      { id: 4, title: "C++", bg: cpp },
      { id: 5, title: "JavaScript", bg: js },
      { id: 6, title: "TypeScript", bg: typescript },
      { id: 7, title: "SQL", bg: sql },
    ],
  },
  {
    category: "Frontend",
    items: [
      { id: 8, title: "React", bg: reactImg },
      { id: 9, title: "Next.js", bg: nextjs },
      { id: 10, title: "Tailwind CSS", bg: tailwind },
      { id: 11, title: "HTML", bg: html },
      { id: 12, title: "CSS", bg: css },
    ],
  },
  {
    category: "Backend",
    items: [
      { id: 13, title: "Spring Boot", bg: springBoot },
      { id: 14, title: "Express.js", bg: node },
      { id: 15, title: "Flask", bg: flask },
    ],
  },
  {
    category: "Databases",
    items: [
      { id: 18, title: "PostgreSQL", bg: postgresql },
      { id: 19, title: "MySQL", bg: mysql },
      { id: 20, title: "MongoDB", bg: mongodb },
    ],
  },
  {
    category: "DevOps",
    items: [
      { id: 22, title: "Docker", bg: docker },
      { id: 23, title: "AWS", bg: aws },
      { id: 24, title: "GitHub Actions", bg: github },
      { id: 25, title: "CI/CD", bg: cicd },
      { id: 37, title: "Kubernetes", bg: ks8 },
    ],
  },
  {
    category: "Cloud & APIs",
    items: [
      { id: 26, title: "Dropbox API", bg: dropbox },
      { id: 27, title: "Zoho Lims API", bg: zoho },
      { id: 28, title: "Google APIs", bg: gAPI },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { id: 29, title: "GraphQL", bg: graphql },
      { id: 30, title: "Git & GitHub", bg: github },
      { id: 31, title: "Monorepo", bg: Monorepo },
      { id: 32, title: "WebSocket", bg: WebSocket },
      { id: 33, title: "Pytest", bg: pytest },
      { id: 34, title: "JUnit", bg: junit },
      { id: 35, title: "Jest", bg: jest },
      { id: 36, title: "Cypress", bg: cypress },
      { id: 16, title: "Hibernate", bg: hibernate },
      { id: 17, title: "JPA", bg: jpa },
      { id: 21, title: "Prisma", bg: prisma },
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
              {group.items.map(({ id, title, bg }) => (
                <motion.div
                  key={id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-cyan-400 transition-all duration-300 group"
                >
                  <div
                    className="w-full h-20 bg-contain bg-no-repeat bg-center"
                    style={{ backgroundImage: `url(${bg})` }}
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 backdrop-blur-sm flex items-center justify-center transition duration-300">
                    <p className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-300 drop-shadow">
                      {title}
                    </p>
                  </div>
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