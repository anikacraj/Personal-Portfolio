// components/AnimatedBlog.tsx
'use client';

import Image from "next/image";
import { motion } from "framer-motion";

interface AnimatedBlogProps {
  title: string;
  date: string;
  image: string;
  content: string;
}

export default function AnimatedBlog({ title, date, image, content }: AnimatedBlogProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-xl mb-6"
      >
        <Image
          src={image}
          alt={title}
          width={900}
          height={400}
          className="w-full h-64 sm:h-80 object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
          {title}
        </h1>
        <p className="text-gray-500 text-sm mb-8">{date}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="prose prose-lg dark:prose-invert max-w-none leading-relaxed"
      >
        {content.trim().split("\n").map((line, i) => {
          if (
            line.startsWith("🔑") ||
            line.startsWith("🧩") ||
            line.startsWith("📚") ||
            line.startsWith("👉") ||
            line.startsWith("🧾") ||
            line.startsWith("🎯")
          ) {
            return (
              <h3 key={i} className="font-semibold text-lg">
                {line}
              </h3>
            );
          }
          if (line.startsWith("-")) {
            return <li key={i}>{line.replace("- ", "")}</li>;
          }
          if (line.trim() === "") {
            return <br key={i} />;
          }
          return <p key={i}>{line}</p>;
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.4 }}
        className="mt-10 p-6 bg-blue-50 border border-blue-200 rounded-xl text-blue-800 dark:bg-blue-900/30 dark:text-blue-100"
      >
        💡 <strong>Note:</strong> This blog is designed for beginners who want to
        learn the <strong>basics first</strong> before diving into advanced topics.
        Bookmark it for revision later!
      </motion.div>
    </div>
  );
}
