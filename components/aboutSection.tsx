'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaGithub,
} from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { SiTailwindcss, SiTypescript } from 'react-icons/si'

export default function AboutSection() {
  const headline = "I'm a passionate Mern-Stack Developer ".split(' ')

  const skills = [
    { name: 'React', icon: <FaReact className="text-blue-500" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'MongoDB', icon: <FaDatabase className="text-green-700" /> },
    { name: 'MySQL', icon: <GrMysql className="text-gray-800 dark:text-gray-100" /> },
    { name: 'GitHub', icon: <FaGithub className="text-gray-800 dark:text-gray-100" /> },
  ]

  return (
    <div>
    <motion.div
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 bg-white dark:bg-gray-900 flex flex-col px-6 py-12 overflow-auto"
    >
      {/* Top Animated Text */}
      <div className="text-center mb-12">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white flex flex-wrap justify-center gap-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.55,
              },
            },
          }}
        >
          {headline.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      {/* Skills & Image */}
      <div className="w-full flex-col-reverse max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Section - Skills */}
        <div className="flex-1 w-full max-w-xl">
          <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">💼 My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-4 rounded-2xl shadow hover:shadow-lg transition-all"
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <p className="text-sm font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className="order-1 flex-1 flex justify-center items-center ml-0 md:ml-20">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-indigo-500 shadow-xl mt-6 md:mt-20">
            <Image
              src="/profile.jpg" // 🔁 Replace with your image path
              alt="My Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
      </div>

        <div className="mt-20 w-full text-center">
  <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-800 dark:text-white">
    🚀 Want to see my work?
  </h3>
  <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto">
    Explore some of my favorite projects — from frontend UIs to full-stack apps. Each project reflects my passion for clean code and user-focused design.
  </p>
  <Link
    href="/work" // 🔁 Change to your portfolio URL or section
    className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-indigo-700 transition-all"
  >
    Visit My Portfolio →
  </Link>
</div>
    </motion.div>
  
     </div>
  )
}
