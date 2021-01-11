import React from "react"
// import { Link } from "gatsby";
// import { Link } from "gatsby";
import "./color.css"
// import CheckoutWithStripe from "./CheckoutWithStripe"

function Membership() {
    return(
      <div>
        <div className="bg rounded xs:h-full">
        <div className="pt-12 sm:pt-16 lg:pt-6">
          <div className="max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
              <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
                
              </h2>
              <p className="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">
                Membership
              </p>
              <p className="text-sm leading-7 text-gray-300 ">
              In our classes we introduce you to footwork, bladework, and tactical aspects of this centuries old European martial art. You will learn how to concentrate on your breathing, to calm your mind, to master your emotions and push aside all other distractions, to attend to the most pertinent aspects of what is happening in the moment, to slow down time to see your options clearly, and to execute (or revise) your strategy most effectively.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
    <div className="relative z-0">
      <div className="absolute inset-0 h-5/6 bg lg:h-2/3 xs:h-full"></div>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative lg:grid lg:grid-cols-9"> */}
                  
          {/* <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-4">
            <div className="relative z-10 rounded-lg shadow-xl">
              <div className="pointer-events-none absolute inset-0 rounded-lg border-2 border-red-600"></div>
              <div className="absolute inset-x-0 top-0 transform translate-y-px">
                <div className="flex justify- transform -translate-y-1/2">
                  <span className="inline-flex rounded-full bg-red-600 px-4 py-1 text-sm leading-5 font-semibold tracking-wider uppercase text-white">
                    Free
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-t-lg px-6 pt-12 pb-10">
                <div>
                  <h3 className="text-center text-3xl leading-9 font-semibold text-gray-900 sm:-mx-6" id="tier-growth">
                    Free Trial
                  </h3>
                  <div className="mt-4 flex items-center justify-center ">
                    <span className="px-3 flex items-start text-6xl leading-none tracking-tight text-gray-900 sm:text-6xl">
                      <span className="mt-2 mr-2 text-4xl font-medium">
                        $
                      </span>
                      <span className="font-extrabold">
                        0
                      </span>
                    </span>
                    <span className="text-2xl leading-8 font-medium text-gray-500">
                    
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-white sm:px-10 sm:py-10">
                <ul>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                       Basic Footwork and bladework
                    </p>
                  </li>
                  <li className="mt-4 flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                      Intro to basic tactics
                    </p>
                  </li>
                  <li className="mt-4 flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                    Coordination drills
                    </p>
                  </li>
                  <li className="mt-4 flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                      Beginner bouting
                    </p>
                  </li>
                  <li className="mt-4 flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                      Lots of fun!
                    </p>
                  </li>
                </ul>
                <div className="mt-10">
                  <div className="rounded-lg shadow-md">
                    <b href="#" className="block w-full text-center rounded-lg border border-transparent bg-gray-700 px-6 py-4 text-xl leading-6 font-medium text-white b:hover focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150" aria-describedby="tier-growth">
                    <Link to="/Membershipform">Sign Up</Link>
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-4 lg:col-end-7 lg:row-start-1 lg:row-end-4">
            <div className="relative z-10 rounded-lg shadow-xl">
              <div className="pointer-events-none absolute inset-0 rounded-lg border-2 border-gray-700"></div>
              <div className="absolute inset-x-0 top-0 transform translate-y-px">
                <div className="flex justify-center transform -translate-y-1/2">
                  <span className="inline-flex rounded-full bg-gray-700 px-4 py-1 text-sm leading-5 font-semibold tracking-wider uppercase text-white">
                    New Member!
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-t-lg px-6 pt-12 pb-10">
                <div>
                  <h3 className="text-center text-3xl leading-9 font-semibold text-gray-900 sm:-mx-6" id="tier-growth">
                    Intro to Fencing
                  </h3>
                  <div className="mt-4 flex items-center justify-center">
                    <span className="px-3 flex items-start text-6xl leading-none tracking-tight text-gray-900 sm:text-6xl">
                      <span className="mt-2 mr-2 text-4xl font-medium">
                        $
                      </span>
                      <span className="font-extrabold">
                        100
                      </span>
                    </span>
                    <span className="text-2xl leading-8 font-medium text-gray-500">
                      /month
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-white sm:px-10 sm:py-10">
                <ul>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                       Basic Footwork and bladework
                    </p>
                  </li>
                  <li className="mt-4 flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                      Intro to basic tactics
                    </p>
                  </li>
                  <li className="mt-4 flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                    Coordination drills
                    </p>
                  </li>
                  <li className="mt-4 flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                      Beginner bouting
                    </p>
                  </li>
                  <li className="mt-4 flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                      Lots of fun!
                    </p>
                  </li>
                </ul>
                <div className="mt-10">
                  <div className="rounded-lg shadow-md">
                    <b href="#" className="block w-full text-center rounded-lg border border-transparent bg-gray-700 px-6 py-4 text-xl leading-6 font-medium text-white b:hover focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150" aria-describedby="tier-growth">
                    <Link to="/Membershipform">Sign Up</Link>
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-7 lg:col-end-10 lg:row-start-1 lg:row-end-4">
            <div className="relative z-10 rounded-lg shadow-xl">
              <div className="pointer-events-none absolute inset-0 rounded-lg border-2 border-gray-700"></div>
              <div className="absolute inset-x-0 top-0 transform translate-y-px">
                <div className="flex justify-center transform -translate-y-1/2">
              
                </div>
              </div>
              <div className="bg-white rounded-t-lg px-6 pt-12 pb-10">
                <div>
                  <h3 className="text-center text-3xl leading-9 font-semibold text-gray-900 sm:-mx-6" id="tier-growth">
                    Level 1
                  </h3>
                  <div className="mt-4 flex items-center justify-center">
                    <span className="px-3 flex items-start text-6xl leading-none tracking-tight text-gray-900 sm:text-6xl">
                      <span className="mt-2 mr-2 text-4xl font-medium">
                        $
                      </span>
                      <span className="font-extrabold">
                        100
                      </span>
                    </span>
                    <span className="text-2xl leading-8 font-medium text-gray-500">
                      /month
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-white sm:px-10 sm:py-10">
                <ul>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                       Basic Footwork and bladework
                    </p>
                  </li>
                  <li className="mt-4 flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                      Intro to basic tactics
                    </p>
                  </li>
                  <li className="mt-4 flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                    Coordination drills
                    </p>
                  </li>
                  <li className="mt-4 flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                      Beginner bouting
                    </p>
                  </li>
                  <li className="mt-4 flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                      Lots of fun!
                    </p>
                  </li>
                </ul>
                <div className="mt-10">
                  <div className="rounded-lg shadow-md">
                    <b href="#" className="block w-full text-center rounded-lg border border-transparent bg-gray-700 px-6 py-4 text-xl leading-6 font-medium text-white b:hover focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150" aria-describedby="tier-growth">
                    <Link to="/Membershipform">Sign Up</Link>
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-1 lg:col-end-4 lg:row-start-5 lg:row-end-9">
            <div className="relative z-10 rounded-lg shadow-xl">
              <div className="pointer-events-none absolute inset-0 rounded-lg border-2 border-gray-700"></div>
              <div className="absolute inset-x-0 top-0 transform translate-y-px">
                <div className="flex justify- transform -translate-y-1/2">
             
                </div>
              </div>
              <div className="bg-white rounded-t-lg px-6 pt-12 pb-10">
                <div>
                  <h3 className="text-center text-3xl leading-9 font-semibold text-gray-900 sm:-mx-6" id="tier-growth">
                    Level 2
                  </h3>
                  <div className="mt-4 flex ">
                    <span className="px-3 flex items-start text-6xl leading-none tracking-tight text-gray-900 sm:text-6xl">
                      <span className="mt-2 mr-2 text-4xl font-medium">
                        $
                      </span>
                      <span className="font-extrabold">
                        100
                      </span>
                    </span>
                    <span className="text-2xl leading-8 font-medium text-gray-500">
                      /month
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-white sm:px-10 sm:py-10">
                <ul>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                       Basic Footwork and bladework
                    </p>
                  </li>
                  <li className="mt-4 flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                      Intro to basic tactics
                    </p>
                  </li>
                  <li className="mt-4 flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                    Coordination drills
                    </p>
                  </li>
                  <li className="mt-4 flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                      Beginner bouting
                    </p>
                  </li>
                  <li className="mt-4 flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                      Lots of fun!
                    </p>
                  </li>
                </ul>
                <div className="mt-10">
                  <div className="rounded-lg shadow-md">
                    <b href="#" className="block w-full text-center rounded-lg border border-transparent bg-gray-700 px-6 py-4 text-xl leading-6 font-medium text-white b:hover focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150" aria-describedby="tier-growth">
                    <Link to="/Membershipform">Sign Up</Link>
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-4 lg:col-end-7 lg:row-start-5 lg:row-end-9">
            <div className="relative z-10 rounded-lg shadow-xl">
              <div className="pointer-events-none absolute inset-0 rounded-lg border-2 border-gray-700"></div>
              <div className="absolute inset-x-0 top-0 transform translate-y-px">
                <div className="flex justify-center transform -translate-y-1/2">
                  
                </div>
              </div>
              <div className="bg-white rounded-t-lg px-6 pt-12 pb-10">
                <div>
                  <h3 className="text-center text-3xl leading-9 font-semibold text-gray-900 sm:-mx-6" id="tier-growth">
                    Level 3
                  </h3>
                  <div className="mt-4 flex items-center justify-center">
                    <span className="px-3 flex items-start text-6xl leading-none tracking-tight text-gray-900 sm:text-6xl">
                      <span className="mt-2 mr-2 text-4xl font-medium">
                        $
                      </span>
                      <span className="font-extrabold">
                        100
                      </span>
                    </span>
                    <span className="text-2xl leading-8 font-medium text-gray-500">
                      /month
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-white sm:px-10 sm:py-10">
                <ul>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                       Basic Footwork and bladework
                    </p>
                  </li>
                  <li className="mt-4 flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                      Intro to basic tactics
                    </p>
                  </li>
                  <li className="mt-4 flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                    Coordination drills
                    </p>
                  </li>
                  <li className="mt-4 flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                      Beginner bouting
                    </p>
                  </li>
                  <li className="mt-4 flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                      Lots of fun!
                    </p>
                  </li>
                </ul>
                <div className="mt-10">
                  <div className="rounded-lg shadow-md">
                    <b href="#" className="block w-full text-center rounded-lg border border-transparent bg-gray-700 px-6 py-4 text-xl leading-6 font-medium text-white b:hover focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150" aria-describedby="tier-growth">
                    <Link to="/Membershipform">Sign Up</Link>
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-7 lg:col-end-10 lg:row-start-5 lg:row-end-9s">
            <div className="relative z-10 rounded-lg shadow-xl">
              <div className="pointer-events-none absolute inset-0 rounded-lg border-2 border-gray-700"></div>
              <div className="absolute inset-x-0 top-0 transform translate-y-px">
                <div className="flex justify-center transform -translate-y-1/2">
              
                </div>
              </div>
              <div className="bg-white rounded-t-lg px-6 pt-12 pb-10">
                <div>
                  <h3 className="text-center text-3xl leading-9 font-semibold text-gray-900 sm:-mx-6" id="tier-growth">
                    Private Lesson
                  </h3>
                  <div className="mt-4 flex items-center justify-center">
                    <span className="px-3 flex items-start text-6xl leading-none tracking-tight text-gray-900 sm:text-6xl">
                      <span className="mt-2 mr-2 text-4xl font-medium">
                        $
                      </span>
                      <span className="font-extrabold">
                        45
                      </span>
                    </span>
                    <span className="text-2xl leading-8 font-medium text-gray-500">
                      
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-white sm:px-10 sm:py-10">
                <ul>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                       Basic Footwork and bladework
                    </p>
                  </li>
                  <li className="mt-4 flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                      Intro to basic tactics
                    </p>
                  </li>
                  <li className="mt-4 flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                    Coordination drills
                    </p>
                  </li>
                  <li className="mt-4 flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                      Beginner bouting
                    </p>
                  </li>
                  <li className="mt-4 flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                      Lots of fun!
                    </p>
                  </li>
                </ul>
                <div className="mt-10">
                  <div className="rounded-lg shadow-md">
                    <b href="#" className="block w-full text-center rounded-lg border border-transparent bg-gray-700 px-6 py-4 text-xl leading-6 font-medium text-white b:hover focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150" aria-describedby="tier-growth">
                    <Link to="/Membershipform">Sign Up</Link>
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
</div>
</div>
</div>
</div>
</div>
 */}


<div className="mt-12 p-2 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
<div className="border border-gray-500 bg-white rounded-lg shadow-sm divide-y divide-gray-200">
  <div className="p-6">
    <h2 className="text-lg leading-6 font-medium text-gray-900">Free Trial</h2>
    <p className="mt-4 text-sm text-gray-500">A basic introduction to Olympic Fencing</p>
    <p className="mt-4 text-sm text-gray-500">Tuesdays or Thursdays 5pm to 6pm</p>
    <p className="mt-4 text-sm text-gray-500">60 min class.</p>
    <p className="mt-8">
    <div>
  <label htmlFor="location" className="block text-sm font-medium text-gray-700">Fees</label>
  <select id="location" name="location" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md rounded-md">
    <option selected>$0mo / 1x week</option>
  </select>
</div>
    <div>
  <label htmlFor="location" className="block text-sm font-medium text-gray-700">Equipment rental</label>
  <select id="location" name="location" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md rounded-md">
    <option selected>-----</option>
  </select>
</div>
    </p>
    <a href="#" className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">Register</a>
  </div>
  <div className="pt-6 pb-8 px-6">
    <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">Whats included</h3>
    <ul className="mt-6 space-y-4">
      <li className="flex space-x-3">
      
        <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm text-gray-500">Wear athletic clothing and shoes.</span>
      </li>

      <li className="flex space-x-3">
        <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm text-gray-500">We supply equipment.</span>
      </li>
    </ul>
  </div>
</div>

<div className="border  border-gray-500 bg-white rounded-lg shadow-sm divide-y divide-gray-200">
  <div className="p-6">
    <h2 className="text-lg leading-6 font-medium text-gray-900">Intro to Fencing</h2>
    <p className="mt-4 text-sm text-gray-500">A four week introduction to Olympic Fencing.</p>
    <p className="mt-4 text-sm text-gray-500">Tuesdays or Thursdays 5pm to 6pm</p>
    <p className="mt-4 text-sm text-gray-500">60 min class.</p>
    <p className="mt-8">
    <div>
  <label htmlFor="location" className="block text-sm font-medium text-gray-700">Fees</label>
  <select id="location" name="location" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md rounded-md">
    <option selected>$100mo / 1x week</option>
  </select>
</div>
<div>
  <label htmlFor="location" className="block text-sm font-medium text-gray-700">Equipment rental</label>
  <select id="location" name="location" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md rounded-md">
    <option selected>----</option>
  </select>
</div>
    </p>
    <a href="#" className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">Register</a>
  </div>
  <div className="pt-6 pb-8 px-6">
    <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">Whats included</h3>
    <ul className="mt-6 space-y-4">
      <li className="flex space-x-3">
        <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm text-gray-500">Basic footwork and bladework. </span>
      </li>

      <li className="flex space-x-3">
        <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm text-gray-500">Intro to basic tactics.</span>
      </li>

      <li className="flex space-x-3">
        <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm text-gray-500">Beginner Bouting.</span>
      </li>
      <li className="flex space-x-3">
        <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm text-gray-500">Rental gear included.</span>
      </li>
    </ul>
    <div className="pt-6 pb-8 ">
    <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">Whats required</h3>
    <ul className="mt-6 space-y-4">
      <li className="flex space-x-3">
        <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm text-gray-500">USFA non-competitive membership(Renewed yearly). </span>
      </li>
      </ul>
      {/* <CheckoutWithStripe /> */}
  </div>
  </div>
</div>

<div className="border border-gray-500 bg-white rounded-lg shadow-sm divide-y divide-gray-200">
  <div className="p-6">
    <h2 className="text-lg leading-6 font-medium text-gray-900">Level 1</h2>
    <p className="mt-4 text-sm text-gray-500">Level I will refine the basic technique and tactics.</p>
    <p className="mt-4 text-sm text-gray-500">Tuesday and Thursday 5pm to 6pm. Saturday 10am to 11am.</p>
    <p className="mt-4 text-sm text-gray-500">60 min class.</p>
    <p className="mt-8">
    <div>
  <label htmlFor="location" className="block text-sm font-medium text-gray-700">Fees</label>
  <select id="location" name="location" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md rounded-md">
    <option >$90mo / 1x week</option>
    <option selected>$145mo / 2x week</option>
  </select>
</div>
<div>
  <label htmlFor="location" className="block text-sm font-medium text-gray-700">Equipment rental</label>
  <select id="location" name="location" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md rounded-md">
    <option selected>$20/mo</option>
  </select>
</div>
    </p>
    <a href="#" className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">Register</a>
  </div>
  <div className="pt-6 pb-8 px-6">
    <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">Whats included</h3>
    <ul className="mt-6 space-y-4">
      <li className="flex space-x-3">
        <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm text-gray-500">Basic footwork and bladework refinement.</span>
      </li>

      <li className="flex space-x-3">
        <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm text-gray-500">Basic fencing tactics.</span>
      </li>

      <li className="flex space-x-3">
        <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm text-gray-500">Coordination drills.</span>
      </li>

      <li className="flex space-x-3">
        <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm text-gray-500">Open bouting.</span>
      </li>
    </ul>
    <div className="pt-6 pb-8 ">
    <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">Whats required</h3>
    <ul className="mt-6 space-y-4">
      <li className="flex space-x-3">
        <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm text-gray-500">USFA non-competitive membership(Renewed yearly). </span>
      </li>
      <li className="flex space-x-3">
        <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm text-gray-500">Gear rental or full equipment kit. </span>
      </li>
      </ul>
  </div>
  </div>
</div>

<div className="border border-gray-500 bg-white rounded-lg shadow-sm divide-y divide-gray-200">
  <div className="p-6">
    <h2 className="text-lg leading-6 font-medium text-gray-900">Level 2</h2>
    <p className="mt-4 text-sm text-gray-500">Level II continues to build and fine tune technique and tactics.</p>
    <p className="mt-4 text-sm text-gray-500">Tuesday and Thursday 6pm to 7:30pm. Saturday open bouting.</p>
    <p className="mt-4 text-sm text-gray-500">90 min class.</p>
    <p className="mt-8">
    <div>
  <label htmlFor="location" className="block text-sm font-medium text-gray-700">Fees</label>
  <select id="location" name="location" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md rounded-md">
    <option >$135mo / 1x week</option>
    <option >$205mo / 2x week</option>
    <option selected>$235mo / 3x week</option>
  </select>
</div>
<div>
  <label htmlFor="location" className="block text-sm font-medium text-gray-700">Equipment rental</label>
  <select id="location" name="location" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md rounded-md">
    <option selected>$20/mo</option>
  </select>
</div>
    </p>
    <a href="#" className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">Register</a>
  </div>
  <div className="pt-6 pb-8 px-6">
    <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">Whats included</h3>
    <ul className="mt-6 space-y-4">
      <li className="flex space-x-3">
        <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm text-gray-500">Improve Footwork and Bladework. </span>
      </li>

      <li className="flex space-x-3">
        <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm text-gray-500">Intermediate Tactics.</span>
      </li>

      <li className="flex space-x-3">
        <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm text-gray-500">Fencing Strength and Conditioning.</span>
      </li>

      <li className="flex space-x-3">
        <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm text-gray-500">Tempo and Technique Drills.</span>
      </li>

    </ul>
    <div className="pt-6 pb-8 ">
    <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">Whats required</h3>
    <ul className="mt-6 space-y-4">
      <li className="flex space-x-3">
        <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm text-gray-500">USFA non-competitive membership(Renewed yearly). </span>
      </li>
      <li className="flex space-x-3">
        <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm text-gray-500">Gear rental or full equipment kit. </span>
      </li>
      </ul>
  </div>
  </div>
</div>
</div>
</div>
</div>

    )
}

export default Membership;