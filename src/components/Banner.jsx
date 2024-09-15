import React from "react";
import Freebook from "./Freebook";

function Banner() {
  return (
    <>
      <div className="bg-white text-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen mx-10">
          {/* Right Side (Image) */}
          <div className= "flex justify-top md:justify-center order-1 md:order-2">
            <img src="https://img.freepik.com/free-photo/book-white-background_9975-6517.jpg?ga=GA1.1.1264475413.1713260550&semt=ais_hybrid"
             className="h-[450px]" alt="" />
          </div>

          {/* Left Side (Text and Form) */}
          <div className="order-2 md:order-1">
            <h1 className="text-3xl font-bold pt-2 md:pt-10 mt-4 md:mt-14 w-full md:w-[75%]">
              Hello, Welcome here to learn something{" "}
              <span className="text-pink-600">new everyday!!</span>
            </h1>
            <p className="mt-8 select-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              voluptates a cupiditate. Velit consectetur cupiditate ea,
              consequuntur itaque, esse tempore earum iste, at architecto enim
              eligendi?
            </p>
            <div className="mt-5">
              <input
                type="email"
                className="border border-gray-600 rounded-md w-[75%] outline-none"
                placeholder="Email"
              />
            </div>
            <button
              href="#_"
              className="inline-flex mt-4 items-center justify-center px-5 py-3 text-base font-medium text-center text-indigo-100 border border-pink-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-pink-500"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
              <span className="relative">Call Us</span>
            </button>
          </div>
        </div>

        <div>
          <Freebook/>
        </div>
      </div>
    </>
  );
}

export default Banner;
