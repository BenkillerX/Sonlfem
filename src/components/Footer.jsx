import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-8 text-center">
      <div className="max-w-screen-md mx-auto">
        <h2 className="text-lg font-semibold mb-2">Interested in similar services?</h2>
        <p className="mb-4">Reach out to me at:</p>
        <a
          href="mailto:yourname@example.com"
          className="text-blue-400 hover:underline"
        >
          benedictakhere802@gmail.com
        </a>
        <div className="mt-6 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Sonlfem. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer