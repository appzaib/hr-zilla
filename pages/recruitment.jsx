import React from 'react'
import {BsPuzzle,BsCurrencyDollar,BsPeople} from 'react-icons/bs';
import {RiSettings5Line} from 'react-icons/ri'
import {GiChatBubble  } from 'react-icons/gi'

const Recruitment = () => {
  return (
    <div className='container'>
    <div className=" mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
      <div className="lg:flex-grow md:pl-14 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="sm:text-4xl md:text-5xl mb-4 font-medium text-red-900">IT Recruitment
         
        </h1>
        <p className="mb-8 text-xl leading-relaxed">Having vast experience in recruiting and a large talent pool, we can deliver the right candidates to you in less than 3 days.</p>
        
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded" alt="hero" src="/about.jpg"/>
      </div>
    </div>
    <div className=" mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-gray-200 ">
      <div className="lg:flex-grow md:pl-14 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h2 className='sm:text-2xl md:text-3xl mb-4 font-medium text-blue-700'>Ready to hire?</h2>
        <h1 className="sm:text-4xl md:text-5xl mb-4 font-medium text-black">Save your time and recruit top IT talents with us!
         
        </h1>
       
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-3/4 w-5/6">
      <p className="mb-8 text-xl leading-relaxed">We specialize in working with startups and product companies that want to grow fast and hire top tech talent.</p>
        
      </div>
    </div>
 
  <div className=" px-5 py-24 mx-auto bg-sky-200">
    <h1 className="sm:text-3xl md:text-5xl font-medium  text-center text-gray-900 mb-20">What can you expect?
     
    </h1>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="md:p-8 md:w-2/4 flex">
        <div className=" inline-flex items-center justify-center  mb-4 flex-shrink-0">
          <BsPuzzle className='w-20 h-20  text-red-700'/>
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-900 text-2xl  font-medium mb-2">Vetted candidates</h2>
          <p className="leading-relaxed text-lg">We know that one of your main goals is to save time of your recruitment team. This is why we pre-screen all the candidates ourselves so you will only receive vetted and fitted profiles with fluent English.</p>
   </div>
      </div>
      <div className="md:p-8 md:w-2/4 flex">
      <div className=" inline-flex items-center justify-center  mb-4 flex-shrink-0">
          <RiSettings5Line className='w-20 h-20  text-red-700'/>
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-900 text-2xl title-font font-medium mb-2">Full support</h2>
          <p className="leading-relaxed text-lg">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
          
        </div>
      </div>
      <div className="md:p-8 md:w-2/4 flex">
      <div className=" inline-flex items-center justify-center  mb-4 flex-shrink-0">
          <BsCurrencyDollar className='w-20 h-20  text-red-700'/>
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-900 text-2xl title-font font-medium mb-2">
Saving your time and money</h2>
          <p className="leading-relaxed text-lg">We have competitive prices for all types of companies and provide the highest quality of IT recruitment services. We also offer 3 months of replacement or money-back guarantee – feel safe!</p>
          
        </div>
      </div> <div className="md:p-8 md:w-2/4 flex">
      <div className=" inline-flex items-center justify-center  mb-4 flex-shrink-0">
          <BsPeople className='w-20 h-20  text-red-700'/>
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-900 text-2xl title-font font-medium mb-2">Understanding your business</h2>
          <p className="leading-relaxed text-lg">We know the biggest pain points of companies that recruit programmers and IT specialists. Expect us to be a great partner and to relieve your recruitment team.</p>
          
        </div>
      </div>
     
    </div>
  </div>
  <div className="mx-5 my-8 ">
    <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start p-16 mx-auto rounded-br-full bg-black">
      <GiChatBubble className='w-16 h-16 text-white'/>
      <h1 className="flex-grow sm:pr-16 text-4xl font-medium pl-7 text-red-900">What IT talent
are you looking for?
</h1>
      <button className="flex-shrink-0 text-red-900 bg-white border-0 py-2 font-medium px-8 focus:outline-none hover:bg-white rounded-br-full text-lg mt-10 sm:mt-0">Request a Call</button>
    </div>
  </div>

  </div>
  )
}

export default Recruitment