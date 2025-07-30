"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
 // Replace with your own styled input if needed

const projects = [
  {
    id: 1,
    title: "Responsive Portfolio Website",
    category: "Frontend",
    description: "A modern, animated personal portfolio built with Next.js and Tailwind.",
    techStack: "Next.js, Tailwind CSS, Framer Motion",
    motive: "Showcase my web skills with animation and responsiveness.",
    finishDate: "2024-12-10",
  },
  {
    id: 2,
    title: "E-Commerce App",
    category: "MERN Stack",
    description: "E-commerce site with cart, payment, admin dashboard and user auth.",
    techStack: "MongoDB, Express, React, Node.js, Stripe",
    motive: "Build a fully functional store with real-world features.",
    finishDate: "2024-10-05",
  },
  {
    id: 3,
    title: "Hospital Management System",
    category: "Full Stack",
    description: "Role-based HMS with real-time patient status and appointment system.",
    techStack: "MongoDB, Express, React, Node.js",
    motive: "Improve hospital workflows with modern tech.",
    finishDate: "2024-08-15",
  },
  {
    id: 4,
    title: "Java Student Result App",
    category: "Java",
    description: "Java Swing app for student result management and printing.",
    techStack: "Java, Swing, JDBC",
    motive: "Automate academic result handling using Java desktop app.",
    finishDate: "2024-07-25",
  },
];

const categories = ["All", "Frontend", "MERN Stack", "Full Stack", "Java"];

export default function ProjectSection() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [longPressedId, setLongPressedId] = useState<number | null>(null);
  const [pressTimer, setPressTimer] = useState<NodeJS.Timeout | null>(null);

  const handleTouchStart = (id: number) => {
    const timer = setTimeout(() => setLongPressedId(id), 600);
    setPressTimer(timer);
  };

  const handleTouchEnd = () => {
    if (pressTimer) {
      clearTimeout(pressTimer);
    }
    setTimeout(() => setLongPressedId(null), 1500);
  };

  const filtered = projects.filter((project) => {
    const matchSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      activeCategory === "All" || project.category === activeCategory;

    return matchSearch && matchCategory;
  });

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-20 bg-white dark:bg-black">
      {/* Header */}
      <h2 className="text-xl mr-10 lg:mr-0 lg:text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
        Explore My Projects
      </h2>

      {/* Menu and Search Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1 rounded-full border ${
                activeCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
              } hover:bg-blue-500 hover:text-white transition-all`}
            >
              {cat}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 ml-10 sm:ml-0 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none shadow"
        />
      </div>

      {/* Project Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filtered.map((project, index) => {
          const showDetails = longPressedId === project.id;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="group relative bg-gray-100 dark:bg-gray-800 rounded-xl p-4 shadow-lg cursor-pointer"
              onTouchStart={() => handleTouchStart(project.id)}
              onTouchEnd={handleTouchEnd}
            >
              {/* Popup Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showDetails ? 1 : undefined, y: showDetails ? 0 : undefined }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`absolute top-0 left-0 w-full p-4 z-20 bg-white dark:bg-gray-900 text-sm text-gray-800 dark:text-white rounded-xl shadow-xl ${
                  showDetails ? "block" : "group-hover:block hidden"
                }`}
              >
                <p className="mb-2">
                  <span className="font-semibold">Tech Stack:</span> {project.techStack}
                </p>
                <p>
                  <span className="font-semibold">Motive:</span> {project.motive}
                </p>
              </motion.div>

              {/* Monitor */}
              <div className="relative w-full aspect-[4/3] bg-black rounded-t-lg border-4 border-gray-700 overflow-hidden shadow-inner">
                <div className="flex items-center justify-center h-full text-white font-semibold text-lg px-2 text-center">
                  {project.title}
                </div>
              </div>

              {/* Stand */}
              <div className="w-16 h-2 bg-gray-700 rounded-sm mx-auto mt-1"></div>
              <div className="w-24 h-3 bg-gray-600 rounded-b-xl mx-auto mb-3"></div>

              {/* Project Summary */}
              <div className="text-center mt-2 space-y-1">
                <p className="text-lg font-bold text-gray-800 dark:text-white">{project.title}</p>
                <span className="inline-block text-xs px-3 py-1 bg-blue-200 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                  {project.category}
                </span>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Finished: {project.finishDate}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
