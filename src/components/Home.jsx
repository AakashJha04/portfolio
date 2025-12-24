import React from "react";
import MY_PHOTO from "../assets/mine.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <section
      name="Home"
      className="
        relative min-h-screen w-full
        bg-gradient-to-br
        from-gray-100 via-white to-gray-200
        dark:from-gray-900 dark:via-gray-800 dark:to-black
        overflow-hidden
        transition-colors duration-300
      "
    >
      {/* ================= BACKGROUND ATMOSPHERE ================= */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-24 w-96 h-96 bg-cyan-400/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-32 right-24 w-[28rem] h-[28rem] bg-pink-500/20 blur-[160px] rounded-full" />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative max-w-7xl mx-auto px-6 pt-28 h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-16 items-center w-full">

          {/* ================= LEFT TEXT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Aakash
              </span>
            </h1>

            <p className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300">
              <Typewriter
                words={[
                  "Software Engineer",
                  "Backend & Systems Developer",
                  "System Design Enthusiast",
                  "Cloud & DevOps Engineer",
                  "Competitive Programmer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={55}
                deleteSpeed={35}
                delaySpeed={1600}
              />
            </p>

            <p className="max-w-xl text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
              I design and build scalable systems, backend architectures, and
              cloud-native applications with strong foundations in
              <span className="font-semibold text-cyan-500"> system design</span>,
              <span className="font-semibold text-purple-400"> data structures</span>,
              and <span className="font-semibold text-pink-400"> clean code</span>.
            </p>

            {/* CTA */}
            <div className="pt-6 flex gap-6">
              <Link
                to="Portfolio"
                smooth
                duration={500}
                className="
                  inline-flex items-center justify-center
                  px-8 py-4 rounded-full
                  text-white font-semibold
                  bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500
                  shadow-xl hover:shadow-2xl
                  hover:scale-105
                  transition-all duration-300
                  cursor-pointer
                "
              >
                View Work
              </Link>

              <Link
                to="Contact"
                smooth
                duration={500}
                className="
                  inline-flex items-center justify-center
                  px-8 py-4 rounded-full
                  border border-gray-400/40 dark:border-gray-600/40
                  text-gray-800 dark:text-gray-200
                  hover:bg-white/20 dark:hover:bg-white/10
                  backdrop-blur-md
                  transition-all duration-300
                  cursor-pointer
                "
              >
                Contact Me
              </Link>
            </div>
          </motion.div>

          {/* ================= RIGHT IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center md:justify-end"
          >
            <motion.div
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="relative"
            >
              {/* Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur-2xl opacity-50" />

              <img
                src={MY_PHOTO}
                alt="Aakash Anand"
                className="
                  relative rounded-3xl
                  w-64 sm:w-72 md:w-80 lg:w-96
                  shadow-2xl
                "
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
