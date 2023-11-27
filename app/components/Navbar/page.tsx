import Link from "next/link";
import React from "react"; 
import ServiceDropDown from "../DropDown/ServiceDropDown";

 const NavBar = () => {
  return (
    <nav className="bg-[#f1f5f9] p-6 flex justify-between shadow-md">
    <div className="logo font-bold text-2xl text-black">Your Logo</div>
    <ul className="nav-links flex space-x-10">
      <li>
        <Link href="/" className="text-black hover:text-blue-500">
          Home
        </Link>
      </li>
      <li>
        <Link href="/components/About" className="text-black hover:text-blue-500">
          About
        </Link>
      </li>
      <li> 
         <ServiceDropDown/>
      </li>
      <li>
        <Link href="/components/ClientGallery" className="text-black hover:text-blue-500">
          Client Gallery
        </Link>
      </li>
      <li>
        <Link href="/components/Contact" className="text-black hover:text-blue-500">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
  
  );
};

export default NavBar;
