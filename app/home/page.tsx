"use client";
import React from "react";
import { NavBar } from "../navbar/page";
import Typist from "react-typist";
import "react-typist/dist/Typist.css"; // Import the styles
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// SwiperSlider.js

const Home = () => {

  const testimonialData = [
    {
      id: 1,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 1,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 1,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 1,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    // Add more testimonials as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return (
    <div className="bg-white w-full">
      <NavBar />

      {/* Main Section  */}
      <div className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-white">
        <div className="text-4xl text-black font-bold mb-4">
          We Are a Creative Studio Focused On
        </div>
        <div className="text-4xl text-black font-bold">
          <Typist>
            <span>Videos</span>
            <Typist.Delay ms={500} />
            <Typist.Backspace count={6} delay={500} />
            <span>Images</span>
            <Typist.Delay ms={500} />
            <Typist.Backspace count={6} delay={500} />
            <span>Art</span>
          </Typist>
        </div>
      </div>

      {/* Studio Rental */}
      <div className="bg-gray-300 flex flex-col md:flex-row items-center justify-evenly p-8 mb-8">
        <div className="md:mt-24 md:text-center md:p-8 ">
          <div className="text-6xl font-bold mb-4 text-gray-800">
            Studio Rental
          </div>
          <button className="bg-indigo-500 text-white px-6 py-2 rounded-md mt-5">
            Book Now
          </button>
        </div>

        <div className="md:flex-shrink-0 md:mt-10 md:ml-10">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/K0QFWVp28M0"
            title="YouTube Video"
          ></iframe>
        </div>
      </div>

      {/* Services section  */}
      <section className="bg-white py-16 mt-20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-10">
            Our Photography Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-20">
            <div className="p-8 bg-gray-200 rounded-lg shadow-md">
              <img
                src="https://img.freepik.com/free-photo/old-rusty-fishing-boat-slope-along-shore-lake_181624-44902.jpg?w=1060&t=st=1700301479~exp=1700302079~hmac=92b8563d76ff6854e03405d38f80e9198db8eac6bc84398f81537028674653eb"
                alt="Service 1"
                className="mb-8 rounded-md w-full h-80 object-cover"
              />
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                Portrait Photography
              </h3>
              <p className="text-gray-600">
                Capturing beautiful and timeless portraits that tell your unique
                story.
              </p>
            </div>

            <div className="p-8 bg-gray-200 rounded-lg shadow-md">
              <img
                src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=1380&t=st=1700301518~exp=1700302118~hmac=8291f7db40c4103b44b9345c1ee09aa9a8762fca49b36f7e1381ab83bc36047c"
                alt="Service 2"
                className="mb-8 rounded-md w-full h-80 object-cover"
              />
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                Event Coverage
              </h3>
              <p className="text-gray-600">
                Documenting your special events and capturing the essence of the
                moment.
              </p>
            </div>

            <div className="p-8 bg-gray-200 rounded-lg shadow-md">
              <img
                src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=1380&t=st=1700301518~exp=1700302118~hmac=8291f7db40c4103b44b9345c1ee09aa9a8762fca49b36f7e1381ab83bc36047c"
                alt="Service 3"
                className="mb-8 rounded-md w-full h-80 object-cover"
              />
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                Product Photography
              </h3>
              <p className="text-gray-600">
                Showcasing your products with stunning and professional
                photography.
              </p>
            </div>
          </div>
        </div>
      </section>


       {/* Testimonial Section */}
        <section className="bg-white py-16  ">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-10">
            Client Testimonials
          </h2>
          <Slider {...settings}>
        {testimonialData.map((testimonial) => (
          <div key={testimonial.id} className="mx-auto max-w-51xl">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-xl text-gray-800 mb-4">{testimonial.text}</p>
              <p className="text-lg font-semibold text-indigo-500">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </Slider>
        </div>
      </section>

      {/* footer  */}

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

    </div>
  );
};

export default Home;
