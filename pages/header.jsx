import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <header >
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
    <Link href={'/'} className="flex items-center cursor-pointer mb-4 md:mb-0">
     <img src="/hrzilla.svg" alt="brand logo" className='w-20 text-xl ml-3'/>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={'/'} className="mr-5 text-red-900 md:text-xl font-medium hover:text-fuchsia-600">Home</Link>
      <Link href={'/about'} className="mr-5 text-red-900 md:text-xl font-medium hover:text-fuchsia-600">About</Link>
      <Link href={'/outstaffing'} className="mr-5 text-red-900 font-medium md:text-xl hover:text-fuchsia-600">Services</Link>

      <Link href={'/contact'} className="mr-5 text-red-900 md:text-xl font-medium hover:text-fuchsia-600">Contact Us</Link>
     
    </nav>
    <Link href={'/contact'}><button className="inline-flex items-center bg-fuchsia-600 text-white font-medium border-0 py-2 px-3 focus:outline-none  hover:bg-fuchsia-700 hover:text-white rounded text-base mt-4 md:mt-0">
     Get a Consultation
    </button></Link>
  </div>
</header>
  )
}

export default Header