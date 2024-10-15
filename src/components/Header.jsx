import React from 'react'
import Link from 'next/link'
import { SignInButton,SignedIn,SignedOut,UserButton } from '@clerk/nextjs'

const Header = () => {
  return (
  <header className='bg-black text-white shadow-lg'>
    <div className='max-w-6xl mx-auto flex justify-between items-center p-3'>
     {/* logo */}
    <Link href='/' className='text-2xl font-extrabold group cursor-pointer'>
          <span className='bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 group-hover:from-gray-800 group-hover:to-gray-500 transition-colors duration-300'>
            Auth
          </span>
          <span className=' bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 group-hover:from-gray-800 group-hover:to-gray-500 transition-colors duration-300 ml-1'>
            App
          </span>
        </Link>
            {/* add a navigation menu */}
        <nav>
            <ul className='flex gap-4 '>
                <Link className='text-sm' href ='/'>Home</Link>
                <Link className='text-sm'  href ='/about'>About</Link>
                <SignedIn className='text-sm'>
              <UserButton />
            </SignedIn>
            <SignedOut>
                <SignInButton/>
            </SignedOut>
            </ul>
        </nav>
    </div>
  </header>
  )
}

export default Header
