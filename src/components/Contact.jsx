import React from 'react';

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark p-6 transition-colors duration-300"
    >
      <div className="flex flex-col p-6 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p
            className="text-5xl font-extrabold inline
              bg-clip-text text-transparent
              bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
              border-b-4 border-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
          >
            Contact
          </p>
          <p className="py-6 text-gray-600 dark:text-gray-300 max-w-md">
            Please submit the form below to contact me. I look forward to hearing from you!
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/pamqyrxa"
            method="POST"
            className="flex flex-col w-full md:w-1/2 space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-3 bg-white dark:bg-gray-900 bg-opacity-70 border-2 border-gray-300 dark:border-gray-700 rounded-md
                text-text-light dark:text-white placeholder-gray-500 dark:placeholder-gray-400
                focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500
                transition duration-300 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-3 bg-white dark:bg-gray-900 bg-opacity-70 border-2 border-gray-300 dark:border-gray-700 rounded-md
                text-text-light dark:text-white placeholder-gray-500 dark:placeholder-gray-400
                focus:border-purple-400 focus:ring-2 focus:ring-purple-500
                transition duration-300 outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="8"
              className="p-3 bg-white dark:bg-gray-900 bg-opacity-70 border-2 border-gray-300 dark:border-gray-700 rounded-md
                text-text-light dark:text-white placeholder-gray-500 dark:placeholder-gray-400
                focus:border-pink-400 focus:ring-2 focus:ring-pink-500
                transition duration-300 outline-none resize-none"
              required
            ></textarea>

            <button
              type="submit"
              className="text-white bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500
                px-8 py-3 mx-auto rounded-md
                font-semibold shadow-lg
                hover:scale-110 hover:shadow-cyan-400/70
                transition-transform duration-300"
            >
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
