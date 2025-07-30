"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import profile from "@/public/profile.jpg";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import PhotoGallery from "@/components/photogallery";
import { useState } from "react";
import AboutSection from "@/components/aboutSection";
import Link from "next/link";

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="lg:mt-[80px]">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-12 px-4 md:px-8 lg:px-16">
        {/* Left Content */}
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Hi, I’m <span className="text-blue-600">Anik Chowdhury</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            A passionate full-stack developer with a knack for building responsive and user-friendly web applications. I specialize in modern tech stacks like React, Next.js, Node.js, and Tailwind CSS.
          </p>

          {/* Button & Download CV */}
          <div className="flex items-center gap-4 flex-wrap">
            <button
              onClick={() => setShowAbout(true)}
              className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow hover:bg-indigo-700 transition-all"
            >
              About Me →
            </button>

            <a
              href="/Anik_Chowdhury_CV.pdf"
              download
              className="px-6 py-3 bg-gray-600 text-white font-medium rounded-lg shadow hover:bg-gray-700 transition"
            >
              Download CV
            </a>
          </div>

          {/* About Section Slide-in */}
          <AnimatePresence>{showAbout && <AboutSection />}</AnimatePresence>

          {/* Close Button */}
          {showAbout && (
            <button
              onClick={() => setShowAbout(false)}
              className="fixed top-5 right-5 z-50 bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition"
            >
              ✖ Close
            </button>
          )}
        </div>

        {/* Right Image */}
        <div className="w-full flex justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 1, ease: "easeIn" }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
              className="relative w-[298px] h-[298px] xl:w-[400px] xl:h-[400px] rounded-full overflow-hidden border-4 border-blue-500 ml-[-20px] shadow-md"
            >
              <Image
                src={profile}
                alt="Profile Photo"
                fill
                priority
                quality={100}
                className="object-cover rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <PhotoGallery />

      {/* 🔥 Fixed Social Icons on Right Side */}
      <div className="fixed right-4 top-1/3 z-50 flex flex-col gap-4 text-blue-600 dark:text-blue-400">
        <Link
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 border-3 border-blue-600 p-1 rounded-full hover:text-blue-800 dark:hover:text-white transition-transform duration-300"
        >
          <Github size={28} />
        </Link>
        <Link
          href="https://linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 border-3 border-blue-600 p-1 rounded-full hover:text-blue-800 dark:hover:text-white transition-transform duration-300"
        >
          <Linkedin size={28} />
        </Link>
        <Link
          href="https://twitter.com/your-twitter"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 border-3 border-blue-600 p-1 rounded-full hover:text-blue-800 dark:hover:text-white transition-transform duration-300"
        >
          <Twitter size={28} />
        </Link>
        <Link
          href="https://facebook.com/your-facebook"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 border-3 border-blue-600 p-1 rounded-full hover:text-blue-800 dark:hover:text-white transition-transform duration-300"
        >
          <Facebook size={28} />
        </Link>
      </div>
    </div>
  );
}
