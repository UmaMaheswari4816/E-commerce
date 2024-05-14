
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import WomenProducts from '../Products/WomenProducts'
import KidsProducts from '../Products/KidsProducts'
import MenProducts from '../Products/MenProducts'
import LoginF from '../RegisterLogin/LoginF'
import RegisterF from '../RegisterLogin/RegisterF'
import HomeCarosal from '../homeCarosal/HomeCarosal'
import CartPage from '../Cart/CartPage'
import UserProfile from '../Profile/UserProfile'



export default function Navigation() {
  const [cartItemCount] = useState(0);

  
  const [activePage, setActivePage] = useState(null);

  const navigateToWomenProductsPage = () => {
    setActivePage('women');
  };
  const navigateToMenProductsPage = () => {
    setActivePage('men');
  };
  const navigateToKidsProductsPage = () => {
    setActivePage('kids');
  };
  const navigateToLoginPage = () => {
    setActivePage('login');
  };
  const navigateToRegisterPage = () => {
    setActivePage('register');
  };
  const navigateToHomePage = () => {
    setActivePage('home');
  };
  const navigateToCartPage = () => {
    setActivePage('cart');
  };
  const navigateToProfilePage = () => {
    setActivePage('profile');
  };


  return (
    <div className="bg-white">


      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over 500 rupees
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">


              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <button onClick={navigateToHomePage}>
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </button>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {/* Women link */}
                  <button onClick={navigateToWomenProductsPage} className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                    Women
                  </button>
                  <button onClick={navigateToMenProductsPage} className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                    Men
                  </button>
                  <button onClick={navigateToKidsProductsPage} className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                    Kids
                  </button>
                  
                  
                  
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <button onClick={navigateToLoginPage} className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                    Login
                  </button>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <button onClick={navigateToRegisterPage} className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                    Create Account
                  </button>
                  <button onClick={navigateToProfilePage} className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                    Profile
                  </button>
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
                <button onClick={navigateToCartPage}>
                  <ShoppingBagIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{cartItemCount}</span>
                  <span className="sr-only">items in cart, view bag</span>
                </button>
              </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {activePage === 'women' && <WomenProducts />}
      {activePage === 'men' && <MenProducts />}
      {activePage === 'kids' && <KidsProducts />}
      {activePage === 'login' && <LoginF />}
      {activePage === 'register' && <RegisterF />}
      {activePage === 'cart' && <CartPage />}
      {activePage === 'profile' && <UserProfile />}
      
    </div>
  )
}
