import React from "react";

export const NavBar = () => {
  return (
    <nav className="bg-[#f1f5f9] p-6 flex justify-between shadow-md">
    <div className="logo font-bold text-2xl text-black">Your Logo</div>
    <ul className="nav-links flex space-x-10">
      <li>
        <a href="#" className="text-black hover:text-gray-500">
          Home
        </a>
      </li>
      <li>
        <a href="/about" className="text-black hover:text-gray-500">
          About
        </a>
      </li>
      <li>
        <a href="#" className="text-black hover:text-gray-500">
          Services
        </a>
      </li>
      <li>
        <a href="/contect" className="text-black hover:text-gray-500">
          Contact
        </a>
      </li>
      {/* <SearchIcon */}
      <div className="text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
    </ul>
  </nav>
  
  );
};
