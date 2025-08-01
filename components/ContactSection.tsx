'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, User } from 'lucide-react'

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4">
        {/* Left Side: Personal Info */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <h2 className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4">
            Get in Touch
          </h2>
          <div className="space-y-2 text-gray-800 dark:text-gray-300">
            <p className="flex items-center gap-2 text-lg">
              <User className="w-5 h-5 text-blue-600 dark:text-blue-400" /> Anik Chowdhury
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              anikchowdhuryraj.neub@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" /> +8801889449660
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" /> Sylhet, Bangladesh
            </p>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.form
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          action="https://formsubmit.co/anikchowdhuryraj.neub@gmail.com"
          method="POST"
          className="space-y-5 bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl border dark:border-gray-700"
        >
          {/* Hidden fields for FormSubmit */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://anik-chy.vercel.app/thank-you?message=success"
          />
          <input
            type="hidden"
            name="_subject"
            value="New message from your portfolio contact form"
          />

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Your Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              required
              aria-label="Your Name"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              placeholder="example@mail.com"
              required
              aria-label="Email Address"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Write your message..."
              aria-label="Message"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  )
}
