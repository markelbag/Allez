import React, { useState, useRef }  from "react"
import { Transition } from '@tailwindui/react'
import { Link } from "gatsby";
import "../components/color.css"
import useOutsideClick from './outside'
import SidebarOpen from "./sidebarOpen";
import ProfMain from './ProfMain'
import ProfSub from './ProfSub'
import ProfDrop from './ProfDrop'

function Prof() {
  const [editbarOpen, editbarIsOpen] = useState(false)
  const ref = useRef();

  useOutsideClick(ref, () => {
     editbarOpen(false)
  });
    return(
        <div>
        <div className="h-screen lg:hidden flex overflow-hidden bg-white">
        {/* <!-- Off-canvas menu for mobile --> */}
        <div className="">
          <div className="fixed inset-0 flex z-40">
            {/* <!--
              Off-canvas menu overlay, show/hide based on off-canvas menu state.
      
              Entering: "transition-opacity ease-linear duration-300"
                From: "opacity-0"
                To: "opacity-100"
              Leaving: "transition-opacity ease-linear duration-300"
                From: "opacity-100"
                To: "opacity-0"
            --> */}
            <div className="fixed inset-0">
              <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
            </div>
            {/* <!--
              Off-canvas menu, show/hide based on off-canvas menu state.
      
              Entering: "transition ease-in-out duration-300 transform"
                From: "-translate-x-full"
                To: "translate-x-0"
              Leaving: "transition ease-in-out duration-300 transform"
                From: "translate-x-0"
                To: "-translate-x-full"
            --> */}
              <SidebarOpen />
            </div>
            <div className="flex-shrink-0 w-14">
              {/* <!-- Dummy element to force sidebar to shrink to fit close icon --> */}
            </div>
          </div>
        </div>
        {/* <!-- Static sidebar for desktop --> */}
            <ProfMain />
        {/* <!-- Main column --> */}
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          {/* <!-- Search header --> */}
            <ProfSub />
            {/* <!-- Page title & actions --> */}
            
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabIndex="0">
            <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
              <div className="flex-1 min-w-0">
                <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
                  <text><Link to="/profile">Home</Link></text><text className="ml-16"><Link to="/billing">Billing</Link></text>
                </h1>
              </div>
              <div className="mt-4 flex sm:mt-0 sm:ml-4">
                <span className="order-1 ml-3 shadow-sm rounded-md sm:order-0 sm:ml-0">
                  <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out">
                    Share
                  </button>
                </span>
                <span className="order-0 sm:order-1 sm:ml-3 shadow-sm rounded-md">
                  <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg hover:bg-gray-700 focus:outline-none focus:shadow-outline-purple focus:border-purple-700 active:bg-yellow-400 transition duration-150 ease-in-out">
                    Create
                  </button>
                </span>
              </div>
            </div>
            {/* <!-- Pinned projects --> */}
            <div className="px-4 mt-6 sm:px-6 lg:px-8">
              <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Pinned Tasks</h2>
              <ul className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-2 mt-3">
                <li className="relative col-span-1 flex shadow-sm rounded-md">
                  <div className="flex-shrink-0 flex items-center justify-center w-16 bg-gray-700 text-white text-sm leading-5 font-medium rounded-l-md">
                    IF
                  </div>
                  <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                    <div className="flex-1 px-4 py-2 text-sm leading-5 truncate">
                      <a href="#" className="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">
                        Intro to fencing video course
                      </a>
                      <p className="text-gray-500">12 videos</p>
                    </div>
              <ProfDrop />
                  </div>
                </li>
      
                {/* <!-- More project cards... --> */}
              </ul>
            </div>
            {/* <!-- Projects list (only on smallest breakpoint) --> */}
            <div className="mt-10 sm:hidden">
              <div className="px-4 sm:px-6">
                <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Course</h2>
              </div>
              <ul className="mt-3 border-t border-gray-200 divide-y divide-gray-100">
                <li>
                  <a href="#" className="flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6">
                    <div className="flex items-center truncate space-x-3">
                      <div className="w-2.5 h-2.5 flex-shrink-0 rounded-full bg-pink-600"></div>
                      <p className="font-medium truncate text-sm leading-6">GraphQL API <span className="truncate font-normal text-gray-500">in Engineering</span></p>
                    </div>
                    <svg className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
      
                {/* <!-- More project rows... --> */}
              </ul>
            </div>
            {/* <!-- Projects table (small breakpoint and up) --> */}
            <div className="hidden mt-8 sm:block">
              <div className="align-middle inline-block min-w-full border-b border-gray-200">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-t border-gray-200">
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        <span className="lg:pl-2">Course</span>
                      </th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Members
                      </th>
                      <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Last updated
                      </th>
                      <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="px-6 py-3 max-w-0 w-full whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                        <div className="flex items-center space-x-3 lg:pl-2">
                          <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-gray-700"></div>
                          <a href="#" className="truncate hover:text-gray-600">
                            <span>Video 3 <span className="text-gray-500 font-normal">Advance lunging and basic parries</span> </span>
                          </a>
                        </div>
                      </td>
                      <td className="px-6 py-3 text-sm leading-5 text-gray-500 font-medium">
                        <div className="flex items-center space-x-2">
                          <div className="flex flex-shrink-0 -space-x-1">
                            <img className="max-w-none h-6 w-6 rounded-full text-white shadow-solid" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
      </img>
                            <img className="max-w-none h-6 w-6 rounded-full text-white shadow-solid" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
      </img>
                            <img className="max-w-none h-6 w-6 rounded-full text-white shadow-solid" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
      </img>
                            <img className="max-w-none h-6 w-6 rounded-full text-white shadow-solid" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            </img>
                          </div>
      
                          <span className="flex-shrink-0 text-xs leading-5 font-medium">+8</span>
                        </div>
                      </td>
                      <td className="hidden md:table-cell px-6 py-3 whitespace-no-wrap text-sm leading-5 text-gray-500 text-right">
                        March 17, 2020
                      </td>
                      <td className="pr-6">
                        <div className="relative flex justify-end items-center">
                          <button onClick={() => editbarIsOpen(!editbarOpen)} id="project-options-menu-0" aria-has-popup="true" type="button" className="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition ease-in-out duration-150">
                            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                          </button>
                          <Transition
                            show={editbarOpen}
                            Enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                            Leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                          >
                          <div ref={ref} className="mx-3 origin-top-right absolute right-7 top-0 w-48 mt-1 rounded-md shadow-lg">
                            <div className="z-10 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="project-options-menu-0">
                              <div className="py-1">
                                <a href="#" className="group flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                                  <svg className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                    <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                                  </svg>
                                  Edit
                                </a>
                                <a href="#" className="group flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                                  <svg className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
                                    <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
                                  </svg>
                                  Duplicate
                                </a>
                                <a href="#" className="group flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                                  <svg className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                                  </svg>
                                  Share
                                </a>
                              </div>
                              <div className="border-t border-gray-100"></div>
                              <div className="py-1">
                                <a href="#" className="group flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                                  <svg className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                  </svg>
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                          </Transition>
                        </div>
                      </td>
                    </tr>
      
                    {/* <!-- More project rows... --> */}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>

    
    )
}

export default Prof;