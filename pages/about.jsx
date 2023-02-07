import React from 'react'
import Link from 'next/link';


const About = () => {
  return (
    <div className='container'>
    <div className="flex flex-wrap">
  <div
    className="bg-no-repeat  bg-cover sm:bg-cover w-full sm:w-full sm:h-5/6 h-5/6 "
    style={{
      backgroundImage: `url("/aboutteam.jpg")`,
    }}
  >
    <div className="text-start md:px-24 sm:px-3 mt-80  pb-24 bg-blue-500 bg-opacity-25 pt-6">
      <h1 className=" sm:text-4xl text-3xl mb-4 font-medium text-white">Microdosing synth tattooed vexillologist</h1>
      <p className="mb-8 leading-relaxed text-white text-xl">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
      <div className="flex justify-start">
        <h1 className="inline-flex text-lg text-white">Hire the Best IT Talent Faster!</h1>
       <Link href={'/contact'}> <button className=" md:ml-72  sm:ml-12 inline-flex text-white border-2 py-2 px-6 focus:outline-none text-lg">Submit Request</button>
   </Link>
          </div>
    </div>
</div>
</div>
  <div className=" px-5 py-24 mx-auto bg-sky-200">
  <div className="pl-24 w-full mb-20">
      <h1 className="sm:text-3xl md:text-5xl font-medium mb-4 text-blue-900 pb-4">Staffing Partner in numbers</h1>
      <div className=" w-56 h-1 bg-blue-900 rounded mt-2 mb-4"></div>
      </div>
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className=" font-medium sm:text-4xl text-3xl text-blue-900">300 000</h2>
        <p className="p-4 text-lg font-medium text-blue-600">Candidates in our databse</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="font-medium sm:text-4xl text-3xl text-blue-900">2 1110</h2>
        <p className="p-4 text-lg font-medium text-blue-600">Closed Vacancies</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className=" font-medium sm:text-4xl text-3xl text-blue-900">138</h2>
        <p className="p-4 text-lg font-medium text-blue-600">satisfied customers</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-blue-900">100</h2>
        <p className="p-4 text-lg font-medium text-blue-600">in-house recruiters</p>
      </div>
    </div>
  </div>

  <div className="px-5 py-24 mx-auto  bg-sky-100">
  <div className="pl-24 w-full mb-20">
      <h1 className="sm:text-3xl md:text-5xl font-medium mb-4 text-blue-900 pb-4">Why Staffing Partner ?</h1>
      <div className=" w-56 h-1 bg-blue-900 rounded mt-2 mb-4"></div>
      </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
          <p className="text-white font-medium text-2xl bg-blue-700 bg-opacity-90 p-6">We can work on 30+ of your vacancies concurrently</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className=" p-6 rounded-lg">
          <p className="text-white font-medium text-2xl bg-blue-700 bg-opacity-90 p-6">We can work on 30+ of your vacancies concurrently</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className=" p-6 rounded-lg">
          <p className="text-white font-medium text-2xl bg-blue-700 bg-opacity-90 p-6">We can work on 30+ of your vacancies concurrently</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className=" p-6 rounded-lg">
          <p className="text-white font-medium text-2xl bg-blue-700 bg-opacity-90 p-6">We can work on 30+ of your vacancies concurrently</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className=" p-6 rounded-lg">
          <p className="text-white font-medium text-2xl bg-blue-700 bg-opacity-90 p-6">We can work on 30+ of your vacancies concurrently</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className=" p-6 rounded-lg">
          <p className="text-white font-medium text-2xl bg-blue-700 bg-opacity-90 p-6">We can work on 30+ of your vacancies concurrently</p>
        </div>
      </div>
    </div>
     </div>
  <div className=" ">
    <div className=" flex flex-col sm:flex-row sm:items-center items-start mx-auto">
      <h1 className="flex-grow w-5/6 p-32 text-end sm:pr-16 text-5xl font-medium  text-white bg-blue-900">88%</h1>
      <p className=" text-blue-900  border-0 py-2 px-8  text-5xl mt-10 sm:mt-0">Of Clients Choose Us Again</p>
    </div>
  </div>

</div>
  )
}

export default About