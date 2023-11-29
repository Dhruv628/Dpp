"use client";
import React from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css"; // Import the styles
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer";
import Typed from "react-typed";
import Link from "next/link";

// SwiperSlider.js

const HomePage = () => {
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
    <div className="bg-gray-100 w-full min-h-screen overflow-y-hidden">
      {/* Main Section */}
      <div className="bg-cover bg-center homePage min-h-screen flex flex-col items-center justify-center text-white">
        <div className="text-5xl font-extrabold text-indigo-800 mb-8">
          <Typed
            strings={[
              "Welcome to the Image Gallery and Photo Editor!",
              "Explore amazing images and unleash your creativity!",
              // Add more text as needed
            ]}
            typeSpeed={50}
            backSpeed={50}
            backDelay={1000}
            loop
          />
        </div>
      </div>

      {/* Studio Rental */}
      <div className="bg-gray-200 flex flex-col md:flex-row items-center justify-evenly p-8 mb-8">
        <div className="md:mt-24 md:text-center md:p-8">
          <div className="text-4xl font-bold mb-4 text-indigo-800">
            Studio Rental
          </div>
          <button className="bg-indigo-500 text-white px-6 py-3 rounded-md mt-5 hover:bg-indigo-700 transition duration-300">
            Book Now
          </button>
        </div>

        <div className="md:flex-shrink-0 md:mt-10 md:ml-10">
          {/* Add any relevant content, such as an embedded video */}
        </div>
      </div>

      {/* Services section */}
      <section className="bg-white py-16 mt-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-indigo-800 mb-10">
            Our Photography Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Service 1 */}
            <div className="p-8 bg-gray-300 rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105">
              <Link href="/components/Services/Photography">
                <img
                  src="https://res.cloudinary.com/ds5fdn2yu/image/upload/v1701055892/pgzzhspz0h6prfepjddr.jpg"
                  alt="Service 1"
                  className="mb-8 rounded-md w-full h-64 object-cover"
                />
                <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
                  Portrait Photography
                </h3>
                <p className="text-gray-600">
                  Capture beautiful and timeless portraits that tell your unique
                  story.
                </p>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="p-8 bg-gray-300 rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105">
              <Link href="/components/Services/Photography">
                <img
                  src="https://assets.architecturaldigest.in/photos/641575ee0b0aca3cd1591dd9/16:9/w_1920,c_limit/Untitled%20design%20(11).png"
                  alt="Service 2"
                  className="mb-8 rounded-md w-full h-64 object-cover"
                />
                <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
                  Event Coverage
                </h3>
                <p className="text-gray-600">
                  Document your special events and capture the essence of the
                  moment.
                </p>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="p-8 bg-gray-300 rounded-lg shadow-md transition-transform hover:shadow-lg hover:scale-105 ease-in">
              <Link href="/components/Services/Photography">
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/gemma-landon-naba-zabih-photography-640a5ca12a846.jpg?crop=1.00xw:0.334xh;0,0.249xh&resize=1200:*"
                  alt="Service 3"
                  className="mb-8 rounded-md w-full h-64 object-cover"
                />
                <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
                  Product Photography
                </h3>
                <p className="text-gray-600">
                  Showcase your products with stunning and professional
                  photography.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gray-300 mt-20 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-indigo-800 mb-10">
            Client Testimonials
          </h2>
          <Slider {...settings}>
            {testimonialData.map((testimonial) => (
              <div key={testimonial.id} className="mx-auto ">
                <p className="text-lg text-gray-800 mb-4">{testimonial.text}</p>
                <p className="text-md font-semibold text-indigo-500">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* {brand section } */}
      {/* {brand section } */}
      <section className="bg-gray-100 py-16 mt-20">
        <div className=" mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-20">
            Our Partners
          </h2>

          <Slider
            infinite
            speed={500}
            slidesToShow={3}
            slidesToScroll={1}
            autoplay
            autoplaySpeed={2000}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
          >
            {/* Branded Image 1 */}
            <div className="relative overflow-hidden rounded-lg shadow-md  ">
              <img
                src="https://as1.ftcdn.net/v2/jpg/05/19/52/52/1000_F_519525221_f40EiVbsqdV03yFXB25XgvbnEbDH2zH9.jpg"
                alt="Branded Image 1"
                className="w-full h-80 object-cover transition-transform transform-gpu hover:scale-105 hover:shadow-lg"
              />
            </div>

            {/* Branded Image 2 */}
            <div className="relative overflow-hidden rounded-lg shadow-md mx-4">
              <img
                src="https://assets.architecturaldigest.in/photos/641575ee0b0aca3cd1591dd9/16:9/w_1920,c_limit/Untitled%20design%20(11).png"
                alt="Branded Image 2"
                className="w-full h-80 object-cover transition-transform transform-gpu hover:scale-105 hover:shadow-lg"
              />
            </div>

            {/* Branded Image 3 */}
            <div className="relative overflow-hidden rounded-lg shadow-md mx-4">
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/gemma-landon-naba-zabih-photography-640a5ca12a846.jpg?crop=1.00xw:0.334xh;0,0.249xh&resize=1200:*"
                alt="Branded Image 3"
                className="w-full h-80 object-cover transition-transform transform-gpu hover:scale-105 hover:shadow-lg"
              />
            </div>

            {/* Branded Image 4 */}
            <div className="relative overflow-hidden rounded-lg shadow-md mx-4">
              <img
                src="https://res.cloudinary.com/dnr7thjlu/image/upload/v1701055344/sgd1s81vt7xjxsyw71qv.jpg"
                alt="Branded Image 4"
                className="w-full h-80 object-cover transition-transform transform-gpu hover:scale-105 hover:shadow-lg"
              />
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-md mx-4">
              <img
                src="https://res.cloudinary.com/ds5fdn2yu/image/upload/v1701055892/pgzzhspz0h6prfepjddr.jpg"
                alt="Branded Image 4"
                className="w-full h-80 object-cover transition-transform transform-gpu hover:scale-105 hover:shadow-lg"
              />
            </div>
          </Slider>
        </div>
      </section>

      {/* Hire Us Section */}
      <section className="bg-gray-400 text-white py-16 mt-10">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <img
              src="https://assets.architecturaldigest.in/photos/641575ee0b0aca3cd1591dd9/16:9/w_1920,c_limit/Untitled%20design%20(11).png"
              alt="Hire Us Image"
              className="mx-auto w-full max-w-2xl mb-4 rounded-md"
            />
          </div>
          <h2 className="text-4xl font-extrabold mb-8">
            Hire Us for Your Next Project
          </h2>
          <p className="text-lg mb-10">
            Ready to bring your ideas to life? The team at [Your Creative Studio
            Name] is here to turn your vision into reality. Whether it's a
            special event, a creative project, or professional photography
            services, we've got you covered. Let's create something
            extraordinary together!
          </p>

          <Link
           href="components/Contact"
          className="bg-white text-indigo-800 px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition duration-300">
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
