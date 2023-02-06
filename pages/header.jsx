import React from 'react'

const Header = () => {
  return (
    <header >
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
    <a className="flex items-center cursor-pointer mb-4 md:mb-0">
     <img src="/hrzilla.svg" alt="brand logo" className='w-20 text-xl ml-3'/>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 text-red-900 md:text-xl hover:text-purple-900">Home</a>
      <a className="mr-5 text-red-900 md:text-xl hover:text-purple-900">About</a>
      <a className="mr-5 text-red-900 md:text-xl hover:text-purple-900">Contact Us</a>
     
    </nav>
    <button className="inline-flex items-center bg-gradient-to-r from-red-400 to-purple-100 text-white border-0 py-1 px-3 focus:outline-none  hover:bg-gradient-to-r hover:from-red-600 hoverto-purple-200 hover:text-white rounded text-base mt-4 md:mt-0">
     Get a Consultation
    </button>
  </div>
</header>
  )
}

export default Header