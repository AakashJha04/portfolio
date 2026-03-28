import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Product Manager, Fintech Co.",
    quote: "Aakash built our core payments API with such reliability that our uptime improved from 96% to 99.99% in weeks.",
    rating: 5,
  },
  {
    name: "Rohit Mehta",
    role: "CTO, HealthTech Startup",
    quote: "Deep technical thinking and flawless deployment craftsmanship. The code delivery saved us 120+ engineering hours monthly.",
    rating: 5,
  },
  {
    name: "Simran Kaur",
    role: "Lead Engineer, EdTech", 
    quote: "Aakash’s architecture choices transformed our product from prototype to production-ready in one sprint.",
    rating: 4.8,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const item = testimonials[index];

  return (
    <section
      name="Testimonials"
      className="relative px-6 py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-black overflow-hidden"
    >
      <div className="absolute -left-20 -top-20 w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full" />
      <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          People Love Working With Me
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Real feedback from project partners, delivered in 3-second timeline.
        </p>

        <motion.article
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-10 mx-auto max-w-3xl rounded-3xl border border-gray-200/50 dark:border-slate-700/60 bg-white/75 dark:bg-slate-900/60 backdrop-blur-xl p-8 shadow-2xl"
        >
          <p className="text-lg md:text-xl text-gray-800 dark:text-gray-100 italic leading-relaxed">
            “{item.quote}”
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {Array.from({ length: 5 }, (_, i) => (
              <span
                key={i}
                className={
                  i < Math.round(item.rating)
                    ? "text-amber-400"
                    : "text-gray-300 dark:text-gray-600"
                }
              >
                ★
              </span>
            ))}
          </div>

          <p className="text-sm md:text-base mt-3 text-gray-700 dark:text-gray-200 font-semibold">
            {item.name}
          </p>
          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
            {item.role}
          </p>

          <div className="mt-6 flex justify-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition ${i === index ? "bg-cyan-500" : "bg-gray-300 dark:bg-gray-500"}`}
              />
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default Testimonials;
