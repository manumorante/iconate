import '@/css/globals.css'
import Image from 'next/image'

export const metadata = {
  title: 'iconate',
  description: 'Para practicar con Framer Motion y JavaScript en general',
}

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body>
        <Image
          src='/next.svg'
          className='absolute bottom-6 left-6 w-20 dark:invert '
          width={394}
          height={90}
          alt='Next logo'
          priority
        />
        {children}
      </body>
    </html>
  )
}
