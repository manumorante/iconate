'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import cx from 'clsx'

// Reposo: Texto gris y corazon sin rellenar
// Hover: todo en rojo
// Click: rellena el corazón

export default function FavButton() {
  const [active, setActive] = useState(false)

  const mainCx = cx(
    'LikeButton',

    // Box
    'inline-flex items-center gap-2',

    // Text
    'text-lg font-medium',

    { 'text-gray-500': !active },
    { 'text-yellow-500': active },

    'transition-colors duration-300',

    // Cursor pointer only desktop
    'lg:cursor-pointer'
  )

  const sizeCx = cx('w-6 h-6')
  const iconCx = cx('Icon relative ', sizeCx)
  const svgCx = cx('relative z-20', sizeCx)

  const shineCx = cx(
    'Shine',
    'absolute z-10 top-0 left-0',
    sizeCx,
    'transform scale-0',
    'rounded-full border border-yellow-500'
  )

  // Shared values
  const duration = 0.5
  const ease = 'easeInOut'

  return (
    <div className={mainCx} onClick={() => setActive(!active)}>
      <div className={iconCx}>
        {
          // Shine
          active && (
            <motion.div
              className={shineCx}
              //
              animate={{
                scale: [0, 2, 2.2],
                opacity: [1, 0.8, 0],
                transition: {
                  duration,
                  ease,
                  times: [0, 0.4, 1],
                },
              }}
            />
          )
        }
        <motion.svg
          className={svgCx}
          //
          initial={false}
          animate={{
            scale: active ? [1, 2, 1] : [1, 0.8, 1],
            transition: {
              duration,
              ease,
              times: [0, 0.4, 1],
            },
          }}
          viewBox='0 0 24 24'
          strokeWidth={1.5}>
          {
            // Stroke inactive
            active || (
              <motion.path
                fill='none'
                stroke='currentColor'
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.1, duration }}
                d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
              />
            )
          }

          <AnimatePresence>
            {
              // Fill
              active && (
                <motion.path
                  fill='currentColor'
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.1, transition: { duration } }}
                  transition={{ duration }}
                  d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
                />
              )
            }
          </AnimatePresence>
        </motion.svg>
      </div>

      <span>{active ? 'Favorited' : 'Favorite'}</span>
    </div>
  )
}
