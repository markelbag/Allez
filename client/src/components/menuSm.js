import React, { useState, useRef } from 'react'
import { Transition } from '@tailwindui/react'
import { Link } from 'gatsby'
import useOutsideClick from './outside'
export default MenuSm;

function MenuSm() {
  const [isOpen, setIsOpen] = useState(false)

    const ref = useRef();

  useOutsideClick(ref, () => {
    setIsOpen(false)
  });
  
  return (
    <div className="relative ...">
      
            <button ref={ref} type="button" onClick={() => setIsOpen(!isOpen)} className="inline-flex z-50 items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Close menu">
            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
 {/* <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg> */}
</button>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        
           <div ref={ref} className="absolute z-50 w-64 rounded-md shadow-lg">
           <div className="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
          <div  className="rounded-lg shadow-md">
            <div className="px-5 pt-4 flex z-90 items-center justify-between">
              <div>
                {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt=""></img> */}
              </div>
              <div className="-mr-2">
        <div ref={ref}  className="px-2 pt-2 z-10 pb-3">
<a href="#"  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem"><Link to="/whyfencing">Why Fencing?</Link></a>
<a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem"><Link to="/about">About Us</Link></a>
<a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem"><Link to="/prices">Membership Options</Link></a>
<a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem"><Link to="/calendar">Schedule</Link></a>
<a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem"><Link to ="/contact">Contact Us</Link></a>
<a href="#" className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out" role="menuitem">
Log in
</a>
        </div>
        </div>
        </div>
      </div>
    </div>
    </div>
              {/* // Snipped */}
            
        
        )
      </Transition>
</div>
  )
}

