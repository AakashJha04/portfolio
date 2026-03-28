import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {

  /* ===============================
     FIRE TAIL CURSOR EFFECT
  =============================== */
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "fire-cursor";
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <section
      name="Contact"
      className="
        relative min-h-screen px-6 py-20
        bg-gradient-to-br
        from-gray-100 via-white to-gray-200
        dark:from-gray-900 dark:via-gray-800 dark:to-black
        transition-colors duration-300
        flex items-center justify-center
      "
    >
      {/* Ambient Orbs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-cyan-400/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:text-left text-center"
        >
          <h2 className="
            text-5xl md:text-6xl font-extrabold
            bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
            bg-clip-text text-transparent
            drop-shadow-lg
          ">
            Let’s Work Together
          </h2>

          <p className="mt-4 max-w-2xl mx-auto lg:max-w-none text-gray-600 dark:text-gray-300 text-lg">
            Have an idea, opportunity, or just want to say hi?  
            I’d love to hear from you.
          </p>

          <div className="mt-8">
            <p className="rounded-2xl bg-white/80 dark:bg-white/10 border border-gray-200 dark:border-slate-700 p-5 text-center text-sm text-slate-700 dark:text-slate-300">
              Submit the form and I’ll get back to you within 24 hours. You can also share a link to your idea or project in the message box for a faster reply.
            </p>
          </div>

        </motion.div>

        {/* Glass Form */}
        <motion.form
          action="https://getform.io/f/pamqyrxa"
          method="POST"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="
            relative
            rounded-3xl p-8 sm:p-10
            bg-white/85 dark:bg-slate-900/55
            backdrop-blur-3xl
            border border-gray-200 dark:border-slate-700
            shadow-xl dark:shadow-black/40
            max-w-xl mx-auto lg:mx-0
          "
        >

          {/* Name */}
          <div className="relative mb-8">
            <input
              type="text"
              name="name"
              required
              placeholder=" "
              className="
                peer w-full px-5 pt-7 pb-3 rounded-xl
                bg-transparent border border-gray-300 dark:border-gray-600
                text-gray-900 dark:text-white
                focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500
                outline-none transition
              "
            />
            <label className="
              absolute left-4 top-2 text-sm
              text-gray-500 dark:text-gray-400
              peer-placeholder-shown:top-6 peer-placeholder-shown:text-base
              peer-placeholder-shown:text-gray-400
              peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-400
              transition-all
            ">
              Your Name
            </label>
          </div>

          {/* Email */}
          <div className="relative mb-8">
            <input
              type="email"
              name="email"
              required
              placeholder=" "
              className="
                peer w-full px-5 pt-7 pb-3 rounded-xl
                bg-transparent border border-gray-300 dark:border-gray-600
                text-gray-900 dark:text-white
                focus:border-purple-400 focus:ring-2 focus:ring-purple-500
                outline-none transition
              "
            />
            <label className="
              absolute left-4 top-2 text-sm
              text-gray-500 dark:text-gray-400
              peer-placeholder-shown:top-6 peer-placeholder-shown:text-base
              peer-placeholder-shown:text-gray-400
              peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-400
              transition-all
            ">
              Your Email
            </label>
          </div>

          {/* Message */}
          <div className="relative mb-10">
            <textarea
              name="message"
              rows="6"
              required
              placeholder=" "
              className="
                peer w-full px-5 pt-7 pb-3 rounded-xl
                bg-transparent border border-gray-300 dark:border-gray-600
                text-gray-900 dark:text-white
                focus:border-pink-400 focus:ring-2 focus:ring-pink-500
                outline-none transition resize-none
              "
            />
            <label className="
              absolute left-4 top-2 text-sm
              text-gray-500 dark:text-gray-400
              peer-placeholder-shown:top-6 peer-placeholder-shown:text-base
              peer-placeholder-shown:text-gray-400
              peer-focus:top-2 peer-focus:text-sm peer-focus:text-pink-400
              transition-all
            ">
              Your Message
            </label>
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="
              w-full flex items-center justify-center gap-3
              px-8 py-4 rounded-full
              text-lg font-semibold text-white
              bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500
              shadow-xl hover:shadow-2xl
              transition-all
            "
          >
            <FaPaperPlane />
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
