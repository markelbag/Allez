import React, { useState, useRef } from 'react'
import { Transition } from '@tailwindui/react'
import { Link } from 'gatsby'
import useOutsideClick from './outside'

export default Menu;
function Menu() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef();

  useOutsideClick(ref, () => {
    setIsOpen(false)
  });
  return (
    <div className="relative ...">
      
      <button type="button" onClick={() => setIsOpen(!isOpen)} className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out" id="user-menu" aria-label="User menu" aria-haspopup="true">
              <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
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
        
          
          <div ref={ref} className="origin-top-right z-50 absolute right-0 mt-2 w-48 rounded-md shadow-lg">
            <div className="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
              <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem"><Link to="/profile">Your Profile</Link></a>
              <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem"><Link to="/billing">Billing</Link></a>
              <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Sign out</a>
              <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem"><Link to="/admin">Admin</Link></a>
            </div>
          </div>
        
              {/* // Snipped */}
            
        
        )
      </Transition>
    </div>
  )
  }