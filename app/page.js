import LikeButton from '@/components/LikeButton'
import FavButton from '@/components/FavButton'

export default function Home() {
  return (
    <main className='max-w-2xl mx-6 sm:mx-auto'>
      <h1 className='my-8 text-4xl'>Iconate</h1>

      <div className='space-x-4'>
        <LikeButton />
        <FavButton />
      </div>
    </main>
  )
}
