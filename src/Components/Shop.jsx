import React from 'react'
import Link from 'next/link'

const Shop = () => {
  return (
   <>
   <h1 className='text-center text-2xl bg-black text-white p-6'>Start shoping</h1>
     <div className="min-h-[55vh] flex flex-col ites-center justify-center px-6 py-6  bg-gradient-to-br from-white to-gray-100 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-16  text-gray-800">
        What are you waiting for?
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-6">
        Start shopping now and find your favorites!
      </p>
      <Link
        href="/shop"
        className="inline-block bg-black text-white px-6 py-3 rounded-full text-sm sm:text-base hover:bg-gray-800 transition"
      >
        Shop Now
      </Link>
    </div>
   </>
  )
}

export default Shop