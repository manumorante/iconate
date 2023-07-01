'use client'

import FavButton from '@/components/FavButton'
import LikeButton from '@/components/LikeButton'

export default function Home() {
  function handleFavClick(isActive) {
    console.log('FavButton clicked', isActive)
  }

  return (
    <main className="mx-6 max-w-2xl md:mx-auto">
      <h1 className="my-8 text-4xl">Iconate</h1>

      <div className="space-x-4">
        <LikeButton />
        <FavButton onClick={handleFavClick} initialState={true} />
        <FavButton onClick={handleFavClick} />
      </div>
    </main>
  )
}
