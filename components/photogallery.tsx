'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function PhotoGallery() {
  const [showAll, setShowAll] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [zoom, setZoom] = useState(1)

  // ⬇️ Add caption with each image
  const images = [
    { url: '/gallery/ai.jpg', caption: 'Artificial Intelligence in Action' },
    { url: '/gallery/photo2.jpg', caption: 'Sunset in the Hills' },
    { url: '/gallery/photo3.jpg', caption: 'Urban Exploration' },
    { url: '/gallery/photo4.jpg', caption: 'Serenity by the Lake' },
    { url: '/gallery/photo5.jpg', caption: 'Nature Meets Architecture' },
    { url: '/gallery/photo6.jpg', caption: 'Golden Hour Moments' },
    { url: '/gallery/photo7.jpg', caption: 'Streets of the Past' },
  ]

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const initialCount = isMobile ? 6 : 12
  const displayedImages = showAll ? images : images.slice(0, initialCount)

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-2xl sm:text-4xl font-bold text-center mb-10">
          📸 My Gallery
        </h1>

        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 border-2 p-4 border-white rounded-2xl"
        >
          {displayedImages.length > 0 ? (
            displayedImages.map((img, index) => (
              <motion.div
                key={index}
                layout
                className="relative group overflow-hidden rounded-xl shadow-md bg-white hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setSelectedImage(img.url)
                  setZoom(1)
                }}
              >
                {/* Image */}
                <div className="relative h-44 sm:h-52 w-full">
                  <Image
                    src={img.url}
                    alt={`Gallery Photo ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Caption */}
                <div className="px-2 py-3 text-sm text-center text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                  {img.caption}
                </div>
              </motion.div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No gallery photos found.
            </p>
          )}
        </motion.div>

        {/* View All / Back Button */}
        {images.length > initialCount && (
          <div className="flex justify-center mt-10">
            {!showAll ? (
              <button
                onClick={() => setShowAll(true)}
                className="bg-indigo-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-indigo-700 transition"
              >
                View All Photos
              </button>
            ) : (
              <button
                onClick={() => setShowAll(false)}
                className="bg-gray-300 text-gray-800 px-6 py-2 rounded-full shadow hover:bg-gray-400 transition"
              >
                Back
              </button>
            )}
          </div>
        )}
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <img
              src={selectedImage}
              alt="Zoomed"
              style={{ transform: `scale(${zoom})` }}
              className="max-w-full max-h-full object-contain transition-transform duration-300"
            />

            {/* Zoom Controls */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <button
                onClick={() => setZoom((z) => Math.max(1, z - 0.2))}
                className="bg-white text-black px-4 py-2 rounded-full"
              >
                ➖
              </button>
              <button
                onClick={() => setZoom((z) => z + 0.2)}
                className="bg-white text-black px-4 py-2 rounded-full"
              >
                ➕
              </button>
              <button
                onClick={() => {
                  setSelectedImage(null)
                  setZoom(1)
                }}
                className="bg-red-600 text-white px-4 py-2 rounded-full"
              >
                ✖
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
