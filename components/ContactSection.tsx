'use client';

import { motion } from 'framer-motion';

export function ContactSection() {
  return (
    <section className="relative py-16 bg-gray-50 dark:bg-gray-900" id="contact">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4">
        {/* Left Side: Personal Info */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold text-blue-600">Get in Touch</h2>
          <p className="text-lg">Anik Chowdhury</p>
          <p className="text-gray-700 dark:text-gray-300">Web Developer</p>
          <p className="text-gray-700 dark:text-gray-300">Email: anik@example.com</p>
          <p className="text-gray-700 dark:text-gray-300">WhatsApp: +8801234567890</p>
          <p className="text-gray-700 dark:text-gray-300">Address: Dhaka, Bangladesh</p>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.form
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input type="text" className="w-full p-2 border rounded dark:bg-gray-700" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input type="email" className="w-full p-2 border rounded dark:bg-gray-700" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea className="w-full p-2 border rounded dark:bg-gray-700" rows={5}></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
