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
          I am a passionate full-stack developer with expertise in building robust, scalable, and user-friendly web applications. My skills span across modern web technologies, including React, Node.js, Express, MongoDB, and more, enabling me to develop seamless and dynamic user experiences.
        </p>
        <br />
        <p className="text-xl leading-relaxed text-center md:text-left">
          Beyond web development, I have a strong foundation in machine learning and artificial intelligence, allowing me to integrate intelligent systems into my applications. I have experience in designing predictive models, natural language processing (NLP) algorithms, and computer vision solutions using frameworks like TensorFlow and PyTorch.
        </p>
        <br />
        <p className="text-xl leading-relaxed text-center md:text-left">
          My approach combines problem-solving skills with a deep understanding of system design, ensuring optimal performance and maintainability in every project. I am always eager to learn emerging technologies and take on challenging projects that push the boundaries of innovation.
        </p>
      </div>
    </div>
  );
};

export default About;
