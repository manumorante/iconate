'use client'

import { motion } from 'framer-motion'

import { useState } from 'react'
export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false)

  // Reposo: Texto gris y corazon sin rellenar
  // Hover: todo en rojo
  // Click: rellena el corazón

  return (
    <div
      onClick={() => setIsLiked(!isLiked)}
      className={`LikeButton
        inline-flex
        text-s
        
        ${isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'}        
        
        items-center gap-1
        cursor-pointer
        transition-colors duration-200 ease-in-out`}>
      {/* SVG heart */}
      <motion.svg
        animate={{
          scale: isLiked ? [1, 1.8, 1] : 1,
        }}
        // Transition Sprint
        transition={{
          duration: 0.4,
          ease: 'easeOut',
          times: [0, 0.5, 1],
        }}
        //
        className='w-5 h-5 inline-block mr-1'
        viewBox='0 0 20 20'
        fill='currentColor'>
        <path
          fillRule='evenodd'
          d='M10 18.3l-1.45-1.32C4.4 13.2 1 10.1 1 6.5 1 3.4 3.4 1 6.5 1 8.2 1 9.8 1.7 10 2.9 10.2 1.7 11.8 1 13.5 1 16.6 1 19 3.4 19 6.5c0 3.6-3.4 6.7-8.55 10.48L10 18.3z'
          clipRule='evenodd'
        />
      </motion.svg>
      <span>Like</span>
    </div>
  )
}
