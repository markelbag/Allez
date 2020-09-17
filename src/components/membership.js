import React from "react"
// import { Link } from "gatsby";
import { Link } from "gatsby";
import "./color.css"

function Membership() {
    return(
      <div>
        <div className="bg  xs:h-full">
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
        <div className="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
    <div className="relative z-0">
      <div className="absolute inset-0 h-5/6 bg lg:h-2/3 xs:h-full"></div>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative lg:grid lg:grid-cols-7">
          <div className="mx-auto rounded-lg border-gray-700 border-2 max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
            <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
              <div className="flex-1 flex flex-col">
                <div className="bg-white  px-6 py-10">
                  <div>
                    <h3 className="text-center text-2xl leading-8 font-medium text-gray-900" id="tier-hobby">
                      Member
                    </h3>
                    <div className="mt-4 flex items-center justify-center">
                      <span className="px-3  flex items-start text-6xl leading-none tracking-tight text-gray-900">
                        <span className="mt-2 mr-2 text-4xl font-medium">
                          $
                        </span>
                        <span className="font-extrabold">
                          200
                        </span>
                      </span>
                      <span className="text-xl leading-7 font-medium text-gray-500">
                        /month
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-white sm:p-10 lg:p-6 xl:p-10">
                  <ul>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                      Refined Footwork and bladework
                      </p>
                    </li>
                    <li className="mt-4 flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                        Advanced Tactics
                      </p>
                    </li>
                    <li className="mt-4 flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                        Live Bouting and more!
                      </p>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <div className="rounded-lg shadow-md">
                      <a href="#" className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base leading-6 font-medium text-gray-700 hover:text-indigo-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150" aria-describedby="tier-hobby">
                       <Link to="/Membershipform">Sign Up</Link>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
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
                    Beginner
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
          <div className="mt-10 rounded-lg border-gray-700 border-2 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
            <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
              <div className="flex-1 flex flex-col">
                <div className="bg-white px-6 py-10">
                  <div>
                    <h3 className="text-center text-2xl leading-8 font-medium text-gray-900" id="tier-scale">
                      Competitive
                    </h3>
                    <div className="mt-4 flex items-center justify-center">
                      <span className="px-3 flex items-start text-6xl leading-none tracking-tight text-gray-900">
                        <span className="mt-2 mr-2 text-4xl font-medium">
                          $
                        </span>
                        <span className="font-extrabold">
                          500
                        </span>
                      </span>
                      <span className="text-xl leading-7 font-medium text-gray-500">
                        /month
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-white sm:p-10 lg:p-6 xl:p-10">
                  <ul>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                      Mastery of Footwork and Bladework
                      </p>
                    </li>
                    <li className="mt-4 flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                      Competitive Level Fitness
                      </p>
                    </li>
                    <li className="mt-4 flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                      Competition Prep
                      </p>
                    </li>
                    <li className="mt-4 flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                      Video Analysis and more!
                      </p>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <div className="rounded-lg shadow-md">
                      <a href="#" className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base leading-6 font-medium text-gray-700 hover:text-indigo-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150" aria-describedby="tier-scale">
                        <Link to="/Membershipform">Sign Up</Link>
                      </a>
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
</div>
</div>
    )
}

export default Membership;