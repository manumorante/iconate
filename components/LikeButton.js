'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

// Reposo: Texto gris y corazon sin rellenar
// Hover: todo en rojo
// Click: rellena el corazón

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div
      onClick={() => setIsLiked(!isLiked)}
      className={`LikeButton
        inline-flex items-center gap-1
        text-s        
        ${isLiked ? 'text-red-500' : 'text-gray-500 lg:hover:text-red-500'}
        
        lg:cursor-pointer`}>
      <motion.svg
        animate={{
          scale: isLiked ? [1, 1.8, 1] : [1, 0.8, 1],
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
          times: [0, 0.2, 1],
        }}
        //
        className='w-6 h-6'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        fill='none'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
        />
      </motion.svg>
      <span>{isLiked ? 'Liked' : 'Like'}</span>
    </div>
  )
}
