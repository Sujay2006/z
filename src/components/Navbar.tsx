import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav';
import { SignedIn, UserButton } from '@clerk/nextjs';

const Navbar = () => {
  return (
    <nav className='flex justify-between fixed z-50 w-full bg-dark-1 px-10 py-5 lg:px10 '>
      <Link href='/' className='flex items-center gap-1'>
        <Image src="/icons/logo.svg" alt='yoom logo' width={40} height={40} className='max-sm:size-10'/>
        <p className='text-[26px] font-extrabold text-white max-sm:size-10'>Zoom</p>
        <p className='text-[12px] font-[10px] p-2 pl-10 pb-0 text-white max-sm:size-11'>By Sujay_Shah</p>
      </Link>

      <div className="flex justify-between items—center gap-5">
        <SignedIn>
            <UserButton />
          </SignedIn>
       < MobileNav/>
      </div>
    </nav>
  )
}

export default Navbar
