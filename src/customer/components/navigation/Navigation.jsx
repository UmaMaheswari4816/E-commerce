import { useEffect, useState } from 'react';
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/outline'; 
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navigation() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    // Check if the user is logged in
    const userLoggedIn = localStorage.getItem('email');
    if (userLoggedIn) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [pathname]);

  const handleLogout = () => {
    // Clear login status and redirect to login page
    localStorage.removeItem('email');
    setIsLoggedIn(false);
    navigate("/login")
  };
  

  
  return (
      <div className="bg-white">
      <header className="relative bg-white">
         <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">           Get free delivery on orders over 500 rupees         </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">

               {/* Logo */}
               <div className="ml-4 flex lg:ml-0">

                <Link to="/">
                <span className="sr-only">Your Company</span>
                 <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {/* Women link */}
                  <Link to="/women">Women</Link>
                  <Link to="/men">Men</Link>
                  <Link to="/kids">Kids</Link>
                  
                  
                  
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">

                {/* Search */}
                <div className="flex lg:ml-6">
                <input type='search' placeholder='search' style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '5px' }}></input>
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    {/*<MagnifyingGlassIcon className="h-8 w-8" aria-hidden="true" />*/}
                  </a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
 
                  {/* <Link to="/login"> */}
                  {/* <UserCircleIcon className="h-8 w-8" aria-hidden="true" /></Link> */}
                 {isLoggedIn ? 
                  (<p onClick={handleLogout}>Logout</p>):(<p onClick={() => navigate("/login")}>Login</p>) 
                }
                </div>

                

                
                {/* Cart */}
              <div className="ml-4 flow-root lg:ml-6">

                <Link to="/cart">
                 
                  <ShoppingBagIcon className="h-8 w-8" aria-hidden="true" />
                  
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"></span>
                  <span className="sr-only">items in cart, view bag</span>
                </Link>
              </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      </div>
  );
}
