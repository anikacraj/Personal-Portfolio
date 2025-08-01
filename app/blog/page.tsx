// app/blog/page.tsx

import Link from "next/link";
import Image from "next/image";

interface Blog {
  slug: string;
  title: string;
  date: string;
  image: string;
}

const blogs: Blog[] = [
  {
    slug: "data-structure",
    title: "Understanding Data Structures: The Foundation of Programming",
    date: "August 1, 2025",
    image: "/data_Structure.png",
  },
  {
    slug: "compiler-vs-interpreter",
    title:"Compiler vs Interpreter: What’s the Difference?",
    date: "April 20, 2025",
    image: "/compiler.jpg",
  },
  {
    slug: "ai",
    title: "What is AI? A Basic Guide to Artificial Intelligence",
    date: "Jan 25, 2025",
    image: "/ai.jpg",
  },
   {
    slug: "ml",
    title:"A Beginner's Guide to Machine Learning",
    date: "July 23, 2025",
    image: "/ml.jpg",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">My Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Link href={`/blog/${blog.slug}`} key={blog.slug}>
            <div className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300">
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={250}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-sm text-gray-500">{blog.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
