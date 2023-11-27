import React from 'react'

const Footer = () => {
  return (
    
    <footer className="bg-gray-800 text-white py-12 mt-10">
    <div className="container mx-auto flex flex-col items-center">
      <p className="text-2xl font-bold mb-4">Contact Us</p>
      <p className="text-lg mb-2">Email: info@example.com</p>
      <p className="text-lg mb-6">Phone: (123) 456-7890</p>

      <div className="flex space-x-4 mb-8">
        <a href="#" className="text-gray-300 hover:text-white">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-gray-300 hover:text-white">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-gray-300 hover:text-white">
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      <p className="text-sm text-gray-500">&copy; 2023 Your Website. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer