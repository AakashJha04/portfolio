import React from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      name="Contact"
      className="relative w-full min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-black text-text-light dark:text-text-dark px-6 py-16 transition-colors duration-300 flex items-center"
    >
      {/* Animated Background Blur Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl mx-auto w-full"
      >
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            Get in Touch
          </motion.h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Let’s build something amazing together ✨ Fill out the form below to reach me.
          </p>
        </div>

        {/* Form */}
        <motion.form
          action="https://getform.io/f/pamqyrxa"
          method="POST"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="backdrop-blur-xl bg-white/40 dark:bg-gray-900/40 border border-white/20 dark:border-gray-700/40 shadow-2xl rounded-2xl p-8 space-y-6"
        >
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              required
              placeholder=" "
              className="peer w-full px-4 pt-6 pb-2 rounded-lg bg-transparent border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 outline-none transition"
            />
            <label className="absolute left-3 top-2 text-gray-500 dark:text-gray-400 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
              Your Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              required
              placeholder=" "
              className="peer w-full px-4 pt-6 pb-2 rounded-lg bg-transparent border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-500 outline-none transition"
            />
            <label className="absolute left-3 top-2 text-gray-500 dark:text-gray-400 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
              Your Email
            </label>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              rows="6"
              required
              placeholder=" "
              className="peer w-full px-4 pt-6 pb-2 rounded-lg bg-transparent border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-pink-400 focus:ring-2 focus:ring-pink-500 outline-none transition resize-none"
            ></textarea>
            <label className="absolute left-3 top-2 text-gray-500 dark:text-gray-400 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
              Your Message
            </label>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-lg text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 shadow-lg hover:shadow-xl transition"
          >
            <FaPaperPlane className="text-xl" />
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
