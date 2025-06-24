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
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      name="About"
      className="w-full min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark py-20 transition-colors duration-300"
    >
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center h-full">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pb-10 text-center md:text-left"
        >
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text inline-block">
            About Me
          </h2>
        </motion.header>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-6 text-lg sm:text-xl leading-relaxed text-center md:text-left"
        >
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
            <FaNodeJs className="inline text-green-400" size={22} /> Node.js — and also
            work with frameworks like{" "}
            <SiNextdotjs className="inline text-white dark:text-black" size={22} />{" "}
            Next.js.
          </p>

          <p>
            I’m also proficient in{" "}
            <FaJava className="inline text-orange-400" size={22} />{" "}
            <span className="text-green-400 font-semibold">Java development</span> using{" "}
            <SiSpringboot className="inline text-green-300" size={22} /> Spring Boot,
            Hibernate, JPA, and JDBC, with hands-on experience in{" "}
            <FaDatabase className="inline text-blue-300" size={22} />{" "}
            <span className="font-semibold">SQL</span> and{" "}
            <span className="font-semibold">NoSQL</span> databases.
          </p>

          <p>
            Currently building REST APIs using{" "}
            <SiFlask className="inline text-yellow-300" size={22} />{" "}
            <span className="text-yellow-300 font-semibold">Flask</span>, automating
            pipelines with{" "}
            <FaGithub className="inline text-white dark:text-gray-200" size={22} />{" "}
            <span className="text-purple-400 font-semibold">GitHub Actions</span>, and
            deploying to{" "}
            <FaAws className="inline text-orange-400" size={22} />{" "}
            <span className="text-orange-400 font-semibold">AWS</span>.
          </p>

          <p>
            I’ve solved over{" "}
            <span className="text-lime-400 font-semibold">1000+ DSA problems</span>{" "}
            across platforms like:
            <br />
            <div className="flex flex-wrap gap-6 justify-center md:justify-start mt-4">
              {[SiLeetcode, SiGeeksforgeeks, SiCodeforces, SiCodechef].map(
                (Icon, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon
                      size={32}
                      className={
                        [
                          "text-yellow-400",
                          "text-green-500",
                          "text-blue-400",
                          "text-purple-400",
                        ][i]
                      }
                      title={["LeetCode", "GeeksforGeeks", "Codeforces", "CodeChef"][i]}
                    />
                  </motion.div>
                )
              )}
            </div>
          </p>

          <p>
            With strong foundations in{" "}
            <span className="font-semibold">system design, DSA & algorithms</span>, I’m
            always up for challenges that help me grow as a developer.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
