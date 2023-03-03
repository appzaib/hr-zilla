import React from 'react'
import { FaFacebookF, FaTwitter,FaInstagram,FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';



const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a className="flex  items-center md:justify-start justify-center ">
          <img src="/hrzilla.svg" alt="brand logo" />
        </a>
       
      </div>
      <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className=" font-bold text-fuchsia-600 tracking-widest text-sm mb-3">SERVICES</h2>
          <nav className="list-none mb-10">
            <li>
              <Link href={'/recruitment'} className="text-gray-600 hover:text-gray-800">IT Recuirtment Services</Link>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Careers</a>
            </li>
           
            <li>
              <Link href={'/outstaffing'} className="text-gray-600 hover:text-gray-800">Outsourcing Representative</Link>
            </li>
          </nav>
        </div>
       
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className=" font-bold text-fuchsia-600 tracking-widest text-sm mb-3">COMPANY</h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-gray-600 hover:text-gray-800">Job Offers</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Submit CV</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Our Team</a>
            </li>
           
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className=" font-bold text-fuchsia-600 tracking-widest text-sm mb-3">CONTACT</h2>
          <nav className="list-none mb-10">
            <li>
              <Link href={'/about'} className="text-gray-600 hover:text-gray-800">About Us</Link>
            </li>
            
            <li>
              <Link href={'/contact'} className="text-gray-600 hover:text-gray-800">Join Us</Link>
            </li>
           
          </nav>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-rose-50 via-sky-50 to-teal-50 ">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 Hrzilla —
          <a href="https://twitter.com/NadiaIq60618409" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@Nadya Khan</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a href="https://facebook.com/nadyakhan0026" className="text-fuchsia-500 cursor-pointer">
            <FaFacebookF/>
          </a>
          <a href="https://twitter.com/NadiaIq60618409" className="ml-3 text-fuchsia-500 cursor-pointer">
            <FaTwitter/>
          </a>
          <a href="https://instagram.com/nadyakhan_nk" className="ml-3 text-fuchsia-500 cursor-pointer">
            <FaInstagram/>
          </a>
          <a className="ml-3 text-fuchsia-500 cursor-pointer">
            <FaLinkedinIn/>
          </a>
        </span>
      </div>
    </div>
  </footer>
  )
}

export default Footer