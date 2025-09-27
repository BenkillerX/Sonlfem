import React from 'react'

const page = () => {
  return (
    <>
     <h1 className="text-center text-2xl bg-black text-white p-6">
        All Our Products     
    </h1>   
    <h2 className="text-center text-1xl bg-black text-white p-6">Get The Best Product At An Affordable Price </h2>
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-12">
  {/* Product Card */}
  <div className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition">
    <img
      src="/BMW.png"
      alt="Home-img"
      className="w-full h-48 object-cover rounded-lg mb-4"
    />
    <h2 className="text-lg font-semibold text-gray-800 mb-2">Product 1</h2>
    <p className="text-sm text-gray-600 mb-1">Price: <span className="font-medium">1000 Naira</span></p>
    <button className="mt-4 bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition">
      Add to cart
    </button>
  </div>
  {/* Product Card */}
  <div className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition">
    <img
      src="/BMW.png"
      alt="Home-img"
      className="w-full h-48 object-cover rounded-lg mb-4"
    />
    <h2 className="text-lg font-semibold text-gray-800 mb-2">Product 2</h2>
    <p className="text-sm text-gray-600 mb-1">Price: <span className="font-medium">1000 Naira</span></p>
    <button className="mt-4 bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition">
      Add to cart
    </button>
  </div>
  {/* Product Card */}
  <div className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition">
    <img
      src="/BMW.png"
      alt="Home-img"
      className="w-full h-48 object-cover rounded-lg mb-4"
    />
    <h2 className="text-lg font-semibold text-gray-800 mb-2">Product 3</h2>
    <p className="text-sm text-gray-600 mb-1">Price: <span className="font-medium">1000 Naira</span></p>
    <button className="mt-4 bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition">
      Add to cart
    </button>
  </div>
  {/* Product Card */}
  <div className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition">
    <img
      src="/BMW.png"
      alt="Home-img"
      className="w-full h-48 object-cover rounded-lg mb-4"
    />
    <h2 className="text-lg font-semibold text-gray-800 mb-2">Product 4</h2>
    <p className="text-sm text-gray-600 mb-1">Price: <span className="font-medium">1000 Naira</span></p>
    <button className="mt-4 bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition">
      Add to cart
    </button>
  </div>
</div>
    </>
  )
}

export default page