"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Me", href: "/aboutme" },
    { label: "Work", href: "/work" },
    { label: "Blog", href: "/blog" },
   { label: "Contact Me", href: "#contact" }  ,
  ];

  return (
    <header className="bg-white dark:bg-gray-950 shadow-md sticky top-0 p-3 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 ml-2">
          {/* Logo */}
           <motion.div
      initial={{ opacity: 0, scale: 0.9, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Link
        href="/"
        className="text-3xl md:text-4xl font-black tracking-wide relative group"
      >
        <span className="text-blue-600 group-hover:text-blue-700 transition duration-300">
        𝒜
        </span>
        <span className="text-gray-900 dark:text-white group-hover:text-blue-500 transition duration-300">
       𝓃𝒾𝓀
        </span>
        <motion.span
          className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
        />
      </Link>
    </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 ">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                className={`relative text-xl font-medium transition-colors duration-300 ${
                  pathname === item.href
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300"
                } hover:text-blue-600 dark:hover:text-blue-400 `}
              >
                {item.label}
                <span
                  className={`absolute bottom-[-2px] left-0  w-full h-[2px] bg-blue-600 dark:bg-blue-400 transition-transform scale-x-0 hover:scale-x-100 origin-left ${
                    pathname === item.href ? "scale-x-100" : ""
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 dark:text-gray-200 mr-[40px]"
            aria-label="Toggle menu"
            
          >
            
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded-md transition-colors duration-200 ${
                pathname === item.href
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                  : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
