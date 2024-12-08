import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import reactImg from "../assets/react.png";
import graphql from "../assets/graphql.png";
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
import java from "../assets/java.png"; 


const Experience = () => {
  const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: js, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: reactImg, title: "React", style: "shadow-blue-500" },
    { id: 5, src: tailwind, title: "Tailwind CSS", style: "shadow-sky-500" },
    { id: 6, src: node, title: "Node.js", style: "shadow-green-500" },
    { id: 7, src: python, title: "Python", style: "shadow-blue-300" },
    { id: 8, src: typescript, title: "TypeScript", style: "shadow-blue-600" },
    { id: 9, src: docker, title: "Docker", style: "shadow-blue-700" },
    { id: 10, src: aws, title: "AWS", style: "shadow-orange-400" },
    { id: 11, src: graphql, title: "GraphQL", style: "shadow-pink-500" },
    { id: 12, src: github, title: "GitHub", style: "shadow-gray-500" },
    { id: 13, src: cicd, title: "CI/CD", style: "shadow-gray-500" },
    { id: 14, src: prisma, title: "Prisma", style: "shadow-blue-400" },
    { id: 15, src: mysql, title: "MySQL", style: "shadow-blue-300" },
    { id: 16, src: postgresql, title: "PostgreSQL", style: "shadow-blue-500" },
    { id: 17, src: mongodb, title: "MongoDB", style: "shadow-green-400" },
    { id: 18, src: jest, title: "Jest", style: "shadow-red-500" },
    { id: 19, src: cypress, title: "Cypress", style: "shadow-green-500" },
    { id: 20, src: cpp, title: "C++", style: "shadow-blue-600" },
    { id: 21, src: java, title: "Java", style: "shadow-red-600" },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-auto py-8"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I have worked on:</p>
        </div>

        {/* Grid Layout */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center py-8 px-6 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={`${title} logo`} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
