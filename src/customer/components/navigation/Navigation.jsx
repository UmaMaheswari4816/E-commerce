
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom';
import WomenProducts from '../Products/WomenProducts';
import MenProducts from '../Products/MenProducts';
import KidsProducts from '../Products/KidsProducts';
import LoginF from '../RegisterLogin/LoginF';
import RegisterF from '../RegisterLogin/RegisterF';
import HomeCarosal from '../homeCarosal/HomeCarosal';
import CartPage from '../Cart/CartPage';
import UserProfile from '../Profile/UserProfile';
import HomePage from '../../pages/homepage/HomePage';

export default function Navigation() {
  return (
    <Router>
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
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
 
                  <Link to="/login">Login</Link>
                  <Link to="/register">Create Account</Link>
                  <Link to="/profile">Profile</Link>
                </div>

                

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </div>

                
                {/* Cart */}
              <div className="ml-4 flow-root lg:ml-6">

                <Link to="/cart">
                <ShoppingBagIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                  <span className="sr-only">items in cart, view bag</span>
                </Link>
              </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
        
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/women" element={<WomenProducts />} />
          <Route path="/men" element={<MenProducts />} />
          <Route path="/kids" element={<KidsProducts />} />
          <Route path="/login" element={<LoginF />} />
          <Route path="/register" element={<RegisterF />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/profile" element={<UserProfile />} />

    
        </Routes>
      </div>
    </Router>
  );
}
