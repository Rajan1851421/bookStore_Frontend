import React from "react";

function Default_Page() {
  return (
    <>
      <div className="w-full bg-white text-gray-800 text-center pt-2 md:pt-10  ">
        <div className="flex justify-items-center flex-col h-screen space-y-8 ">
          <h1
            className="text-xl uppercase md:text-4xl 
          font-extrabold sm:font-semibold text-blue-500  p-4 "
          >
            You Can Manage easily
          </h1>
          <p className= " w-full md:w-1/2 flex mx-auto italic  mt-4 sm:mt-2 text-teal-950  text-xl  px-14 sm:px-5 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta vero
            nihil quae consectetur dolorem? Eos doloribus inventore commodi
            voluptate ut.
          </p>

          <div className="flex justify-around mt-20 sm:mt-5">
            <span>
              <img
                className="h-10"
                src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/success-green-check-mark-icon.png"
                alt=""
              />
            </span>
            <span>
              <img
                className="h-10"
                src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/success-green-check-mark-icon.png"
                alt=""
              />
            </span>
            <span>
              <img
                className="h-10"
                src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/success-green-check-mark-icon.png"
                alt=""
              />
            </span>
          </div>
          <div className="grid grid-cols-2 mt-5 border mx-2 md:mx-10 p-4 bg-red-400">
            <div className="flex flex-col items-center space-y-5 col-span-2 md:col-span-1">
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-5">
                <div className="flex justify-center items-center">
                  <img
                    className="h-8"
                    src="https://uxwing.com/wp-content/themes/uxwing/download/editing-user-action/tick-mark-user-color-icon.png"
                    alt="Tick Mark Icon"
                  />
                </div>
                <div className="flex items-center justify-center w-full">
                  <p className="capitalize text-center font-bold w-full md:w-auto md:text-start">
                    Admin can manage all things.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 mt-5 border mx-2 md:mx-10 p-4 bg-red-400">
            <div className="flex flex-col items-center space-y-5 col-span-2 md:col-span-1">
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-5">
                <div className="flex justify-center items-center">
                  <img
                    className="h-8"
                    src="https://uxwing.com/wp-content/themes/uxwing/download/editing-user-action/tick-mark-user-color-icon.png"
                    alt="Tick Mark Icon"
                  />
                </div>
                <div className="flex items-center justify-center w-full">
                  <p className="capitalize text-center font-bold w-full md:w-auto md:text-start">
                    Admin can manage all things.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Default_Page;
