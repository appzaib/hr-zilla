import {GiExpense,GiControlTower,GiLightBulb,GiTeamIdea,GiChatBubble } from 'react-icons/gi';
import {FaQuoteRight,FaLongArrowAltRight } from 'react-icons/fa';
import Link from 'next/link';


const Feature = () => {
  return (
    <div className=' text-gray-600'>
      <div className='container mx-auto px-4'>
  <div className="flex md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="md:text-3xl text-2xl mb-4 font-medium text-red-900">We Get People
        <br className="lg:inline-block"/>You Get Success
      </h1>
      <p className="mb-8 leading-relaxed md:text-xl px-4 md:px-0">HRzilla is everything HR. A configurable, scalable, blend of expert advice, services and technology tailored to both transform and help your organisation work.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-fuchsia-600 border-0 py-2 px-12 focus:outline-none hover:bg-fuchsia-700 rounded-br-full text-lg">HR Outsourcing</button>
        <button className="ml-4 inline-flex text-white bg-fuchsia-600 border-0 py-2 px-12 focus:outline-none hover:bg-fuchsia-700 rounded-br-full text-lg">HR Consultancy</button>
      </div>
    </div>
    <div className="w-full md:w-2/6 md:mb-0 mb-12">
    
      <img className="object-cover object-center rounded" alt="hero" src="/teamhr.png"/>

    </div>
  </div>
  <div>
      <h2 className="text-3xl text-red-900 font-medium">OUR SERVICES</h2>
      <div className="h-1 w-20 bg-fuchsia-500 rounded"></div>
    
  <div  className="md:px-10 py-16 flex flex-wrap">
    <div  className="flex flex-wrap -m-4">
      <div  className="p-4 lg:w-1/2 md:w-full">
        <div  className="flex p-8 sm:flex-row flex-col">
          <div  className=" w-64 h-32 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full flex-shrink-0">
            <img src="/recruitment.webp" alt="" />
          </div>
          <div  className="flex-grow">
            <Link href={'/recruitment'}><h2  className="text-red-900 md:text-3xl font-medium mb-3">IT Recruitment</h2></Link>
            <p  className="leading-relaxed text-base">Hire top software developers from Asia.</p>
            <a  className="mt-3 text-red-500 inline-flex items-center cursor-pointer">
<FaLongArrowAltRight/>
            </a>
          </div>
        </div>
      </div>
      <div  className="p-4 lg:w-1/2 md:w-full">
        <div  className="flex   p-8 sm:flex-row flex-col">
          <div  className=" w-64 h-32 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full  flex-shrink-0">
          <img src="/outstaff.jfif" alt="" />
          </div>
          <div  className="flex-grow">
            <Link href={'/outstaffing'}><h2  className="text-red-900 md:text-3xl font-medium mb-3">Outstaffing</h2></Link>
            <p  className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a  className="mt-3 text-red-500 inline-flex items-center cursor-pointer">
            <FaLongArrowAltRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

  <div className="flex md:flex-row flex-col items-center">
    <div className="w-full md:w-5/12 mb-10 md:mb-0">
      <img className="object-cover object-center rounded-tl-3xl rounded-br-3xl" alt="hero" src="/hrconsultant.jpeg"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center md:pr-28">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black -mt-3">About Us
      </h1>
      <p className="mb-5 leading-relaxed ">IT Smart Solutions has 13 years of experience in HR services, IT staff expansion and BPO.</p>
      <p className="mb-8 leading-relaxed">We help businesses find developers, launch back offices and support IT companies from around the world in Eastern Europe and Central Asia</p>
      <div className="flex justify-center">
        <Link href={'/about'}><button className="inline-flex text-white bg-fuchsia-600  border-0 shadow-md py-2 px-6 focus:outline-none hover:bg-fuchsia-700 rounded text-lg">About The Company</button>
        </Link></div>
    </div>
  </div>


    <div className="py-28">
      <div className="flex flex-col text-center w-full mb-4">
        <h1 className="sm:text-3xl text-2xl font-medium  text-black">You Will Recieve</h1>
        </div>
      <div className="flex flex-wrap">
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-red-200 border-opacity-60">
          <h2 className="text-lg sm:text-xl text-fuchsia-600 font-medium  mb-2">Key account manager</h2>
          <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-red-200 border-opacity-60">
          <h2 className="text-lg sm:text-xl text-fuchsia-600 font-medium  mb-2">Weekly Reports</h2>
          <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-red-200 border-opacity-60">
          <h2 className="text-lg sm:text-xl text-fuchsia-600 font-medium  mb-2">Advice and Support</h2>
          <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-red-200 border-opacity-60">
          <h2 className="text-lg sm:text-xl text-fuchsia-600 font-medium  mb-2">Candidates with proven track record</h2>
          <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
          </div>
      </div>
      </div>
      </div>
      <div className="bg-gradient-to-r from-red-900 to-fuchsia-700 py-16">
          <div className="text-center w-full">
          <h1 className=" sm:text-4xl text-3xl  font-bold text-white">CUSTOMER BENEFITS:</h1>
        </div>
      
    <div className="px-4 py-4 mx-auto flex flex-wrap">
      
      <div className="flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto">
        <div className="h-full w-6 absolute  flex items-center justify-center">
          <div className="h-full w-1 bg-white pointer-events-none"></div>
        </div>
        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-5 sm:mt-0 inline-flex items-center justify-center bg-fuchsia-500 text-white relative z-10 title-font font-medium text-sm">1</div>
        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div className="flex-shrink-0 w-16 h-16 bg-white text-fuchsia-500 rounded-full inline-flex items-center justify-center">
            <GiExpense className=' w-10 h-10'/>
          </div>
          <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h2 className="font-bold  text-white mb-2 text-2xl">No additional expenses</h2>
            <p className="leading-relaxed text-white font-medium">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
          </div>
        </div>
      </div>
      <div className="flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto">
        <div className="h-full w-6 absolute  flex items-center justify-center">
          <div className="h-full w-1 bg-white pointer-events-none"></div>
        </div>
        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-5 sm:mt-0 inline-flex items-center justify-center bg-fuchsia-500 text-white relative z-10 title-font font-medium text-sm">2</div>
        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div className="flex-shrink-0 w-16 h-16 bg-white text-fuchsia-500 rounded-full inline-flex items-center justify-center">
            <GiControlTower className=' w-10 h-10'/>
          </div>
          <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h2 className="font-bold text-white mb-2 text-2xl">Full control</h2>
            <p className="leading-relaxed text-white font-medium">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
          </div>
        </div>
      </div>
      <div className="flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto">
        <div className="h-full w-6 absolute  flex items-center justify-center">
          <div className="h-full w-1 bg-white pointer-events-none"></div>
        </div>
        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-5 sm:mt-0 inline-flex items-center justify-center bg-fuchsia-500 text-white relative z-10 title-font font-medium text-sm">3</div>
        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div className="flex-shrink-0 w-16 h-16 bg-white text-fuchsia-500 rounded-full inline-flex items-center justify-center">
            <GiLightBulb className=' w-10 h-10'/>
          </div>
          <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h2 className="font-bold text-white mb-2 text-2xl">Better solutions</h2>
            <p className="leading-relaxed text-white font-medium">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
          </div>
        </div>
      </div>
      <div className="flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto">
        <div className="h-full w-6 absolute  flex items-center justify-center">
          <div className="h-full w-1 bg-white pointer-events-none"></div>
        </div>
        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-5 sm:mt-0 inline-flex items-center justify-center bg-fuchsia-500 text-white relative z-10 title-font font-medium text-sm">4</div>
        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div className="flex-shrink-0 w-16 h-16 bg-white text-fuchsia-500 rounded-full inline-flex items-center justify-center">
            <GiTeamIdea className=' w-10 h-10'/>
          </div>
          <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h2 className="font-bold text-white mb-2 text-2xl">Complete team of developers</h2>
            <p className="leading-relaxed text-white font-medium">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
          </div>
        </div>
      </div>
    </div>
    
    
  
  </div>
  
  <div  className="px-4 py-16 mx-auto bg-gray-50">
    <div  className="flex flex-col text-center w-full mb-20">
      <h1  className="sm:text-3xl text-3xl font-medium  text-black">EXPERIENCED TEAMS</h1>
      </div>
    <div  className="flex flex-wrap -m-4 text-center">
      <div  className="md:w-1/4 sm:w-1/2 w-full">
        <div  className="border-2 border-b-0 border-l-0 border-gray-200 px-4 py-6 ">
          
          <h2  className="font-medium text-3xl text-gray-900">25+</h2>
          <p  className="leading-relaxed">Accounting Teams</p>
        </div>
      </div>
      <div  className="md:w-1/4 sm:w-1/2 w-full">
        <div  className="border-2 border-gray-200 px-4 py-6  border-b-0 border-l-0">
          
          <h2  className="font-bold text-3xl text-gray-900">25+</h2>
          <p  className="leading-relaxed">Users</p>
        </div>
      </div>
      <div  className="md:w-1/4 sm:w-1/2 w-full">
        <div  className="border-2 border-gray-200 px-4 py-6  border-b-0 border-l-0">
          
          <h2  className="font-bold text-3xl text-gray-900">30+</h2>
          <p  className="leading-relaxed">HR Teams</p>
        </div>
      </div>
      <div  className="md:w-1/4 sm:w-1/2 w-full">
        <div  className="border-2 border-gray-200 px-4 py-6  border-b-0 border-r-0 border-l-0">
          
          <h2  className="font-bold text-3xl text-gray-900">6+</h2>
          <p  className="leading-relaxed">Legal Teams</p>
        </div>
      </div>

    </div>
    <div  className="flex justify-center pt-12">
      <Link href={'/contact'} > <button  className="inline-flex text-white border-0 py-2 px-6 bg-fuchsia-600 hover:bg-fuchsia-700 focus:outline-none rounded font-medium text-lg">Request a Consultation</button>
       </Link>
         </div>
    
    
  </div>

  <div className="px-5 py-16 mx-auto bg-slate-200">
      <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
        <FaQuoteRight className="inline-block w-8 h-8 text-fuchsia-500 mb-8"/>
        <p className="leading-relaxed text-lg">Hiring Hrzilla is one of the best decisions. We've made in the history of our company recommending them is 1000% a no-brainer. Would'nt hire anyone else.</p>
        <span className="inline-block h-1 w-10 rounded bg-fuchsia-500 mt-8 mb-6"></span>
        <h2 className="text-gray-900 font-medium  tracking-wider text-sm">Nadya Khan</h2>
        <p className="text-gray-500"> Product Designer</p>
      </div>
    </div>
  
  <div className="mx-4 my-16 ">
    <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start p-16 mx-auto rounded-br-full bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900">
      <GiChatBubble className='w-16 h-16 text-white'/>
      <h1 className="flex-grow sm:pr-16 text-3xl font-medium pl-7 text-white">How can we help you?</h1>
     <Link href={'/contact'} > <button className="flex-shrink-0 text-red-900 font-medium bg-white border-0 py-2 px-8 focus:outline-none hover:bg-white rounded-br-full text-lg mt-10 sm:mt-0">Request a Call</button>
  </Link>
       </div>
  </div>

  </div>
  )
}

export default Feature












