import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
  <header className=' shadow-lg'>
    <div className='max-w-6xl mx-auto flex justify-between items-center p-3'>
    <Link href='/' className='text-2xl font-extrabold group cursor-pointer'>
          <span className='bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 group-hover:from-gray-800 group-hover:to-gray-500 transition-colors duration-300'>
            Auth
          </span>
          <span className=' bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 group-hover:from-gray-800 group-hover:to-gray-500 transition-colors duration-300 ml-1'>
            App
          </span>
        </Link>

        <nav>
            <ul className='flex gap-4 '>
                <Link href ='/'>Home</Link>
                <Link href ='/about'>About</Link>
                <Link href ='/signin'>SignIn</Link>
            </ul>
        </nav>
    </div>
  </header>
  )
}

export default Header
