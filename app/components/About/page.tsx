import React from 'react'
import { FaCamera, FaVideo, FaRing } from 'react-icons/fa'; 
import NavBar from '../Navbar/page';


 const About = () => {
  return (
    <div className='bg-gray-200 h-[100vh]'>
    <NavBar/>
    <div className="container mx-auto my-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="md:col-span-1">
        <img
          src="https://www.katebackdrop.com/cdn/shop/articles/cody-lannom-G95AReIh_Ko-unsplash.jpg?v=1599639728&width=1000" // Replace with your image URL
          alt="Photography Studio"
          className="w-full h-auto rounded-lg shadow-xl"
        />
      </div>
      <div className="md:col-span-1 mt-[20vh] flex flex-col shadow-xl justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">About Our Photography Studio</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to our photography studio, where we turn moments into memories. Our team of
            passionate photographers is dedicated to capturing the magic in every special occasion.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            At our studio, we blend creativity with precision to deliver captivating and timeless
            images. Whether it's a wedding, a portrait session, or a special event, we focus on
            creating visual stories that resonate with the heart.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            Our services include:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li className="flex items-center">
              <FaCamera className="text-indigo-500 mr-2" />
              Wedding Photography
            </li>
            <li className="flex items-center mt-2">
              <FaVideo className="text-indigo-500 mr-2" />
              Videography
            </li>
            <li className="flex items-center mt-2">
              <FaRing className="text-indigo-500 mr-2" />
              Engagement Photoshoots
            </li>
            {/* Add more services as needed */}
          </ul>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            Our journey is fueled by a love for art and a commitment to freeze moments that matter.
            We invite you to explore our world of photography and share your unique story with us.
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default About;
