import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaAws,
  FaGithub,
  FaPython,
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
} from "react-icons/si";

const About = () => {
  return (
    <div
      name="About"
      className="w-full min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark py-16 transition-colors duration-300"
    >
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center h-full">
        <header className="pb-10 text-center md:text-left">
          <h2 className="text-5xl font-extrabold inline border-b-4 border-gray-400 dark:border-gray-600">
            About Me
          </h2>
        </header>

        <div className="space-y-6 text-xl leading-relaxed text-center md:text-left">
          <p>
            I’m a passionate{" "}
            <span className="text-cyan-500 font-semibold">Full-Stack Developer</span>{" "}
            focused on building robust, scalable, and cloud-native applications. I love
            turning complex problems into clean, maintainable code.
          </p>

          <p>
            I specialize in the{" "}
            <span className="text-amber-500 font-semibold">MERN Stack</span> —{" "}
            <SiMongodb className="inline text-green-500" size={22} /> MongoDB,{" "}
            <SiExpress className="inline text-gray-400" size={22} /> Express.js,{" "}
            <FaReact className="inline text-blue-400" size={22} /> React,{" "}
            <FaNodeJs className="inline text-green-400" size={22} /> Node.js — with
            support for modern frameworks like{" "}
            <SiNextdotjs className="inline text-white dark:text-black" size={22} />{" "}
            Next.js.
          </p>

          <p>
            I'm also proficient in{" "}
            <FaJava className="inline text-orange-400" size={22} />{" "}
            <span className="text-green-400 font-semibold">Java development</span> using{" "}
            <SiSpringboot className="inline text-green-300" size={22} /> Spring Boot,
            Hibernate, JPA, JDBC and have experience with both{" "}
            <FaDatabase className="inline text-blue-300" size={22} />{" "}
            <span className="font-semibold">SQL</span> and{" "}
            <span className="font-semibold">NoSQL</span> databases.
          </p>

          <p>
            Currently, I’m building RESTful APIs using{" "}
            <SiFlask className="inline text-yellow-300" size={22} />{" "}
            <span className="text-yellow-300 font-semibold">Flask</span>, automating
            CI/CD pipelines with{" "}
            <FaGithub className="inline text-white dark:text-gray-200" size={22} />{" "}
            <span className="text-purple-400 font-semibold">GitHub Actions</span>, and
            deploying services on{" "}
            <FaAws className="inline text-orange-400" size={22} />{" "}
            <span className="text-orange-400 font-semibold">AWS</span>.
          </p>

          <p>
            I have solved over{" "}
            <span className="text-lime-400 font-semibold">1000+ DSA problems</span>{" "}
            across platforms including:
            <br />
            <span className="flex flex-wrap gap-6 justify-center md:justify-start mt-3">
              <SiLeetcode className="text-yellow-400" size={28} title="LeetCode" />
              <SiGeeksforgeeks className="text-green-500" size={28} title="GeeksforGeeks" />
              <SiCodeforces className="text-blue-400" size={28} title="Codeforces" />
              <SiCodechef className="text-purple-400" size={28} title="CodeChef" />
            </span>
          </p>

          <p>
            With a solid foundation in{" "}
            <span className="font-semibold">system design, data structures, and algorithms</span>, I’m always eager to take on challenging problems and continuously grow as a developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
