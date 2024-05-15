import React from 'react';

const UserProfile = () => {
  // Assuming user data is fetched from somewhere, like a context or props
  const userData = {
    username: 'example_user',
    email: 'example@example.com',
    fullName: 'Example User',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    // Other user data...
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src="https://th.bing.com/th/id/OIP.CsCEiIgcxJ54PXFJ-Ep5nQHaHa?rs=1&pid=ImgDetMain" alt="User Avatar" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">User Profile</div>
            <h1 className="block mt-1 text-lg leading-tight font-medium text-black">{userData.fullName}</h1>
            <p className="mt-2 text-gray-500">{userData.bio}</p>
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
              {/* Other user information can be displayed similarly */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

