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

const techs = [
  { id: 1, title: "HTML", bg: html },
  { id: 2, title: "CSS", bg: css },
  { id: 3, title: "JavaScript", bg: js },
  { id: 4, title: "React", bg: reactImg },
  { id: 5, title: "Tailwind CSS", bg: tailwind },
  { id: 6, title: "Node.js", bg: node },
  { id: 7, title: "Python", bg: python },
  { id: 8, title: "TypeScript", bg: typescript },
  { id: 9, title: "Docker", bg: docker },
  { id: 10, title: "AWS", bg: aws },
  { id: 11, title: "GraphQL", bg: graphql },
  { id: 12, title: "GitHub", bg: github },
  { id: 13, title: "CI/CD", bg: cicd },
  { id: 14, title: "Prisma", bg: prisma },
  { id: 15, title: "MySQL", bg: mysql },
  { id: 16, title: "PostgreSQL", bg: postgresql },
  { id: 17, title: "MongoDB", bg: mongodb },
  { id: 18, title: "Jest", bg: jest },
  { id: 19, title: "Cypress", bg: cypress },
  { id: 20, title: "C++", bg: cpp },
  { id: 21, title: "Java", bg: java },
];

const Experience = () => {
  return (
    <div
      name="Experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-auto py-8"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">Technologies I have worked with:</p>
        </div>

        {/* Grid Layout */}
        <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 text-center py-4 px-2 sm:px-0">
          {techs.map(({ id, title, bg }) => (
            <div
              key={id}
              className="relative rounded-xl overflow-hidden group shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
              style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "90px",   // smaller height
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-40 transition-opacity duration-300"></div>

              {/* Title */}
              <div className="relative flex justify-center items-center h-full">
                <p className="text-white text-sm font-semibold">{title}</p> {/* Smaller text */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
