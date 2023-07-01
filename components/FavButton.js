'use client'

import { useMediaQuery } from '@uidotdev/usehooks'

import cx from 'clsx'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function FavButton({ initialState = false, onClick }) {
  const [active, setActive] = useState(initialState)
  const [hover, setHover] = useState(false)
  const isDesktop = useMediaQuery('only screen and (min-width : 768px)')

  const handleMouseEnter = () => setHover(true)
  const handleMouseLeave = () => setHover(false)

  const handleOnClick = () => {
    onClick && onClick(!active)
    setActive(!active)
  }

  const mainCx = cx(
    'FavButton group',

    // Box
    'inline-flex items-center gap-2',

    // Cursor pointer only desktop
    'md:cursor-pointer'
  )

  const textCx = cx(
    // Text
    'text-lg',

    {
      'text-gray-500 md:group-hover:text-yellow-500': !active,
    },
    { 'text-yellow-500': active },

    'transition-colors duration-300'
  )

  const sizeCx = cx('h-6 w-6')
  const iconCx = cx('Icon relative -translate-y-0.5', sizeCx)
  const svgCx = cx('relative z-20', sizeCx)

  const shineCx = cx(
    'Shine',
    'absolute left-0 top-0 z-10',
    sizeCx,
    'scale-0 transform',
    'rounded-full border border-yellow-500'
  )

  // Shared values
  const activeColor = '#eab308' // text-yellow-500
  const inactiveColor = '#6b7280' // text-gray-500

  return (
    <div
      className={mainCx}
      onClick={handleOnClick}
      // Hover only on desktop
      {...(isDesktop && { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave })}>
      <div className={iconCx}>
        <motion.svg
          // SVG
          //
          className={svgCx}
          initial={false}
          animate={{
            scale: active ? [null, 2, 1] : hover ? [null, 1.2, 1.1] : [null, 1.2, 1],
            transition: {
              duration: 0.5,
              ease: 'easeInOut',
              times: [0, 0.4, 1],
            },
          }}
          viewBox="0 0 24 24"
          strokeWidth={1.5}>
          <motion.path
            // Stroke
            //
            stroke={active ? activeColor : inactiveColor}
            fill="none"
            initial={
              active
                ? { pathLength: 0, opacity: 0 } //
                : { pathLength: 1, opacity: 1 }
            }
            animate={
              active
                ? { pathLength: 0, opacity: 0 } //
                : hover
                ? { stroke: activeColor }
                : { stroke: inactiveColor }
            }
            transition={{
              duration: 0.3,
              opacity: { duration: 0.4 },
            }}
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />

          <motion.path
            // Fill
            //
            fill={active ? activeColor : inactiveColor}
            initial={
              active
                ? { opacity: 1, scale: 1 } //
                : { opacity: 0, scale: 0 }
            }
            animate={
              active
                ? { opacity: 1, scale: 1 } //
                : { opacity: 0, scale: 0 }
            }
            transition={{ duration: 0.5, opacity: { duration: 0.1 } }}
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </motion.svg>

        <motion.div
          // Shite
          //
          className={shineCx}
          initial={false}
          animate={{
            scale: active ? [0, 2, 2.2] : 0,
            opacity: active ? [1, 0.8, 0] : 0,
            transition: {
              duration: 0.5,
              times: [0, 0.4, 1],
            },
          }}
        />
      </div>
      <span className={textCx}>{active ? 'Favorited' : 'Favorite'}</span>
    </div>
  )
}
