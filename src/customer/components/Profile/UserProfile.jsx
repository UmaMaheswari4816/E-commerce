import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  // Fetch user data from local storage on component mount
  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('userDetails'));
    setUserData(storedUserData);
  }, []);
  const handleSignout = () => {
    // Clear user details from local storage
    localStorage.removeItem('userDetails');
    // Update state to null to hide user profile
    setUserData(null);
  };

  return (
    <div className="container mx-auto mt-8">
      {userData ? (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img className="h-48 w-full object-cover md:w-48" src="https://th.bing.com/th/id/OIP.CsCEiIgcxJ54PXFJ-Ep5nQHaHa?rs=1&pid=ImgDetMain" alt="User Avatar" />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">User Profile</div>
              <h1 className="block mt-1 text-lg leading-tight font-medium text-black">{userData.name}</h1>
              <p className="mt-2 text-gray-500">{userData.phone}</p>
              <div className="mt-4">
                <div className="flex items-center">
                  <span className="mr-2">
                    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M13 4a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4zm-7 0a1 1 0 011-1h6a1 1 0 011 1v12a1 1 0 01-1 1H7a1 1 0 01-1-1V4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-gray-600">{userData.email}</span>
                </div>
                <button onClick={handleSignout} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Sign Out</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
        <p>To access profile page you need to Login first.</p>
        <p>.....</p>
        <Link to="/login" className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Login</Link>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
