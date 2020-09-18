import React from "react"
import { Link } from "gatsby";
import "./color.css"
import result1 from "../img/result1.jpg"
import result2 from "../img/result2.jpg"
import homeday from "../img/homeday.jpg"
// import Coaches from "../img/IMG_7375.jpg"



function Landing() {
    
    return (
<div className="relative bg-white overflow-hidden">
<div className="max-w-screen-xl h-screen mx-auto xs:h-32">
  <div className="relative z-10 pb-8 pt-20 bg-white sm:pb-16 md:pb-20 lg:max-w-3xl lg:w-full lg:pb-28 xl:pb-32">
    <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon points="50,0 100,0 50,100 0,100" />
    </svg>

    <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
      <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="#" aria-label="Home">
              {/* <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Logo"></img> */}
            </a>
            {/* <div className="-mr-2 flex items-center md:hidden">
              <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" id="main-menu" aria-label="Main menu" aria-haspopup="true">
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div> */}
          </div>
        </div>
        {/* <div className="hidden md:block md:ml-10 md:pr-4"> */}
          {/* <a href="#" className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Product</a>
          <a href="#" className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Features</a>
          <a href="#" className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Marketplace</a>
          <a href="#" className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Company</a>
          <a href="#" className="ml-8 font-medium text-indigo-600 hover:text-indigo-900 transition duration-150 ease-in-out">Log in</a> */}
        {/* </div> */}
      </nav>
    </div>


   

    <main className="mt-10 mx-auto max-w-screen-8xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
          <text className="text">Master</text> the Olympic sport of
          <br className="xl:hidden"></br>
          <span className="text"> Fencing</span>
        </h2>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        Welcome and en garde! Fencing is a fun, fast-paced sport. It has been called the Physical Chess of the Olympics, because it requires highly developed mental, emotional, and physical acuity and agility.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg hover:bg-gray-700 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
              <Link to="/account">Get started</Link>
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
          </div>
        </div>
      </div>
    </main>
  </div>
</div>
<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
  <img className="block lg:mt-48 h-4xl w-full object-cover sm:h-72 sm:pt-0 md:h-96 lg:w-4xl" src="https://firebasestorage.googleapis.com/v0/b/allez-47904.appspot.com/o/IMG_7375.jpg?alt=media&token=7c7da9be-1584-4c3c-831e-6ee5ae63d34f" alt="coaches"></img>
</div>
<div>
<section className="pt-64 px-4 marg lg:w-3/4 m-auto">
  <h2 className="text-3xl text-center mb-8 font-heading">Latest posts</h2>
  <div className="flex flex-wrap -mx-4">
    <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
      <div className="h-full pb-8 rounded shadow-md">
        <a href="#">
          <img className="mb-4" src={result2} alt=""></img>
          <div className="px-6">
            <small>22 Oct 2019 | By Michael Scott</small>
            <h3 className="text-xl text my-3 font-heading">Local event results!</h3>
            <p className="text-gray-500">The wise man once said: Friend first, boss second, entertainer third. That man was me.</p>
          </div>
        </a>
      </div>
    </div>
    <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
      <div className="h-full pb-8 rounded shadow-md">
        <a href="#">
          <img className="mb-4" src={result1}  alt=""></img>
          <div className="px-6">
            <small>22 Oct 2019 | By Dwight K. Schrute</small>
            <h3 className="text-xl text my-3 font-heading">National event results!</h3>
            <p className="text-gray-500">So you think you know everything about paper? False, you know nothing. Let me illuminate your first steps into my world.</p>
          </div>
        </a>
      </div>
    </div>
    <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
      <div className="h-full pb-8 rounded shadow-md">
        <a href="#">
          <img className="mb-4" src={homeday} alt=""></img>
          <div className="px-6">
            <small>22 Oct 2019 | By Jim Halpert</small>
            <h3 className="text-xl text my-3 font-heading">Announcements</h3>
            <p className="text-gray-500">Read it and finally find out that Dwight Schrute is merely a scammer.</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>
</div>
</div>
)
}

export default Landing;