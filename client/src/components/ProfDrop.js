import React, { useState, useRef }  from "react"
import { Transition } from '@tailwindui/react'
import "../components/color.css"
import useOutsideClick from './outside'


function ProfDrop() {
  const [isOpens, setIsOpens] = useState(false)
  const ref = useRef();

  useOutsideClick(ref, () => {
    setIsOpens(false)
  });
    return(
        <div className="flex-shrink-0 pr-2">
<button onClick={() => setIsOpens(!isOpens)} id="pinned-project-options-menu-0" aria-has-popup="true" className="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition ease-in-out duration-150">
<svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
</svg>
</button>
<Transition
show={isOpens}
enter="transition ease-out duration-100"
enterFrom="transform opacity-0 scale-95"
enterTo="transform opacity-100 scale-100"
Leave="transition ease-in duration-75"
leaveFrom="transform opacity-100 scale-100"
leaveTo="transform opacity-0 scale-95"
>

<div className="z-10 mx-3 origin-top-right absolute right-10 top-3 w-48 mt-1 rounded-md shadow-lg">
<div className="z-50  rounded-md bg-white shadow-xs " role="menu" aria-orientation="vertical" aria-labelledby="pinned-project-options-menu-0">
  <div className="py-1">
    <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">View</a>
  </div>
  <div className="border-t border-gray-100"></div>
  <div className="py-1">
    <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Removed from pinned</a>
    <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Share</a>
  </div>
</div>
</div>
</Transition>
</div>
    )}

export default ProfDrop;