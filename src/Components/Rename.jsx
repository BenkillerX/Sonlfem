import React from 'react'
import Link from "next/link"

const Rename = () => {
  return (
    <section className="min-h-[40vh] flex flex-col items-center justify-center px-6 py-12 bg-white rounded text-center">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
        For more info, contact us
      </h1>
      <p className="text-base sm:text-lg text-gray-600 mb-6">
        We're here to help you with any inquiries or services.
      </p>
      <Link
        href="/contact"
        className="inline-block bg-black text-white px-6 py-3 rounded-full text-sm sm:text-base hover:bg-gray-800 transition"
      >
        Contact Us
      </Link>
    </section>
  )
}

export default Rename