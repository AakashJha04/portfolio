import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <header className="pb-10">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500 text-center md:text-left">
            About
          </h2>
        </header>
        <p className="text-xl mt-10 leading-relaxed text-center md:text-left">
          I am a passionate full-stack developer with expertise in building robust, scalable, and cloud-integrated web applications. My skills span across modern technologies like React, Node.js, Express, MongoDB, and cloud services such as AWS and Docker.

          I specialize in designing scalable backend systems, integrating APIs, and automating workflows to optimize performance and efficiency. With a strong foundation in system design, data structures, and problem-solving, I ensure high-quality and maintainable solutions across projects.

          Continuously learning and evolving, I enjoy taking on challenging problems and creating impactful software that makes a difference.
        </p>
        <br />
        <p className="text-xl leading-relaxed text-center md:text-left">
        </p>
        <br />
        <p className="text-xl leading-relaxed text-center md:text-left">
        </p>
      </div>
    </div>
  );
};

export default About;
