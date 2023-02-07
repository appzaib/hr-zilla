import React from 'react'

const ContactUs = () => {
  return (
    <div className="container">
        <div> <h1 class="text-5xl font-bold text-red-900 text-center mx-auto mt-12">GET IN TOUCH</h1> </div> 
    <div className=" px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden bg-no-repeat  bg-cover sm:bg-cover w-full sm:mr-10 p-10 flex items-end justify-start relative"  style={{
      backgroundImage: `url("/aboutteam.jpg")`,
    }}>
        
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md bg-gradient-to-r from-rose-50 via-sky-50 to-teal-50 ">
          <div className="lg:w-1/2 px-6">
            <h2 className=" font-semibold text-purple-900 tracking-widest text-xs">ADDRESS</h2>
            <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className=" font-semibold text-purple-900 tracking-widest text-xs">EMAIL</h2>
            <a className="text-blue-500 leading-relaxed">nadiaiqbal2600@gmail.com</a>
            <h2 className=" font-semibold text-purple-900 tracking-widest text-xs mt-4">PHONE</h2>
            <p className="leading-relaxed">123-456-7890</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 ">
        <h2 className="text-red-900 text-lg mb-1 font-medium ">Request For Consultation</h2>
         <div className="relative mb-4">
          <label for="name" className="leading-7 text-sm text-red-600">Name</label>
          <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative mb-4">
          <label for="email" className="leading-7 text-sm text-red-600">Email</label>
          <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative mb-4">
          <label for="message" className="leading-7 text-sm text-red-600">Message</label>
          <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
        <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded-full text-lg">Send</button>
       </div>
    </div>
</div>
  )
}

export default ContactUs