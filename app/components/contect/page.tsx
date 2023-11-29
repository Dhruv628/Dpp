import React from "react";
import Footer from "../footer/page";
import { NavBar } from "../navbar/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="bg-white text-black">
      <NavBar></NavBar>


      <div className="flex justify-center items-center mt-10">



      <div className=" items-center w-[1100px] ml-50 mt-10  ">
        <h1 className="text-blue-400 leading-6 text-5xl font-bold ">Contect Us</h1>

        <p className="mt-10 text-gray-600 leading-101">
          Feel free to get in touch with us, we are always open to discuss new
          projects, creative ideas or opportunities to be a part of your vision.
          Let’s make something awesome together!
        </p>

        <div className="flex  mt-10">
          <div className="flex items-center mb-4 flex-col w-[400px]  justify-center mt-10" >
          <FontAwesomeIcon icon={faPhone} className="text-blue-500 mr-2 h-20" />
          <span className="text-gray-600 mt-5">+1 (555) 123-4567</span>
        </div>

        <div  className="flex items-center mb-4 flex-col w-[400px]  justify-center mt-10">
        <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 mr-2  h-20" />
          <span className="text-gray-600 mt-5">abhayratnakar03@gamil.com</span>
        </div>


        <div  className="flex items-center mb-4 flex-col w-[400px]  justify-center mt-10">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 mr-2  h-20" />
          <span className="text-gray-600 mt-5">Bareilly</span>

        </div>

        </div>

      </div>

      </div>

      {/* contect form  */}
      <div className="container mt-20 mx-auto my-8 p-8 bg-white rounded shadow-2xl mb-20">
        <p className="text-gray-600 mb-6">
          Have questions or want to book a session? Reach out to us!
        </p>

        <form action="submit_form.php" method="post">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Your Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Your Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-600"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="mt-1 p-2 w-full border rounded-md"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded-md hover:bg-green-600"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
