'use client';

import { notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

interface Blog {
  slug: string;
  title: string;
  date: string;
  content: string;
  image: string;
}

const blogs: Blog[] = [
  {
    slug: "data-structure",
    title: "Understanding Data Structures: The Foundation of Programming",
    date: "April 29, 2024",
    image: "/data_Structure.png",
    content: `
Data structures are the building blocks of efficient algorithms and software design. They help organize and store data in a way that makes it easier to perform operations such as searching, sorting, and modifying.

🔑 Why Are Data Structures Important?
- They determine how efficiently your code runs.
- Choosing the right data structure improves performance and readability.
- They are used in databases, operating systems, AI, and almost every software field.

🧩 Types of Data Structures
1. Linear Structures: Arrays, Linked Lists, Stacks, Queues.
2. Non-linear Structures: Trees, Graphs.
3. Hash-based Structures: HashTables, HashMaps, Sets.

📚 Real-World Applications
- Arrays for storing ordered data (e.g. student marks).
- Graphs for mapping social networks.
- Stacks/Queues in undo/redo functionalities and scheduling.

Understanding data structures not only helps in technical interviews but also makes you a better problem-solver. Start with simple ones and gradually explore advanced structures!
    `,
  },
  {
    slug: "ai",
    title: "What is AI? A Basic Guide to Artificial Intelligence",
    date: "Jan 25, 2025",
    content: `
Artificial Intelligence (AI) allows machines to mimic human intelligence.

- AI types: Narrow, General, Super AI
- Uses: Voice Assistants, Chatbots, Autonomous Vehicles
- Tools: Python, TensorFlow, Scikit-learn

Start with basic Python and gradually explore how data can be used to train intelligent models.
    `,
    image: "/ai.jpg",
  },
  {
    slug: "ml",
    title: "A Beginner's Guide to Machine Learning",
    date: "July 23, 2025",
    content: `
Machine Learning (ML) is a method to make machines learn from data.

- Types: Supervised, Unsupervised, Reinforcement Learning
- Applications: Predictions, Image Recognition, Chatbots
- Tools: Python, Pandas, Scikit-learn

Learn the basics like regression, classification, and model evaluation before diving into deep learning.
    `,
    image: "/ml.jpg",
  },
  {
    slug: "compiler-vs-interpreter",
    title: "Compiler vs Interpreter: What’s the Difference?",
    date: "April 20, 2025",
    content: `
🧾 Compiler:
- Converts code into machine code before execution
- Fast execution
- Used in languages like C, C++

🎯 Interpreter:
- Runs code line-by-line at runtime
- Slower but easier for debugging
- Used in languages like Python, JS

👉 Choose compiler for performance, interpreter for flexibility and rapid testing.
    `,
    image: "/compiler.jpg",
  },
];

interface Props {
  params: {
    slug: string;
  };
}

export default function BlogDetail({ params }: Props) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Blog Image with animation */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-xl mb-6"
      >
        <Image
          src={blog.image}
          alt={blog.title}
          width={900}
          height={400}
          className="w-full h-64 sm:h-80 object-cover"
        />
      </motion.div>

      {/* Title and Date */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
          {blog.title}
        </h1>
        <p className="text-gray-500 text-sm mb-8">{blog.date}</p>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="prose prose-lg dark:prose-invert max-w-none leading-relaxed"
      >
        {blog.content.trim().split("\n").map((line, i) => {
          if (line.startsWith("🔑") || line.startsWith("🧩") || line.startsWith("📚") || line.startsWith("👉") || line.startsWith("🧾") || line.startsWith("🎯")) {
            return <h3 key={i} className="font-semibold text-lg">{line}</h3>;
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

      {/* Learn Note */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.4 }}
        className="mt-10 p-6 bg-blue-50 border border-blue-200 rounded-xl text-blue-800 dark:bg-blue-900/30 dark:text-blue-100"
      >
        💡 <strong>Note:</strong> This blog is designed for beginners who want to learn the **basics first** before diving into advanced topics. Bookmark it for revision later!
      </motion.div>
    </div>
  );
}
