import React, { useEffect, useState } from "react";
import AddCourse from "./AddCourse";
import ViewAllCourse from "./ViewAllCourse";
import ViewAllUser from "./ViewAllUser";
import Default_Page from "./Default_Page";
import { FaUsersViewfinder } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa";
import { IoIosBook } from "react-icons/io";
import { useSelector } from "react-redux";
import Login from "../pages/Login";

function Admin_layout() {
  const { token_login } = useSelector((state) => state.login); // Corrected state structure
  const [activeComponent, setActiveComponent] = useState("none");
  if (!token_login) {
    return <Login />;
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleShowComponent = (component) => {
    console.log(`Setting active component to: ${component}`); // Debug log
    setActiveComponent(component);
  };

  // Conditional rendering of the layout or Login component
  if (!token_login) {
    return <Login />;
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="sm:w-20 w-auto p-4 fixed left-0 h-screen overflow-auto z-0 border-r-2">
        <button
          className="w-full mb-2 py-2 px-2 sm:px-4 bg-blue-500 text-white rounded flex items-center justify-center space-x-1 sm:space-x-2"
          onClick={() => handleShowComponent("AddCourse")}
        >
          <FaAddressBook />
          {/* <span className="hidden sm:block">Add Course</span> */}
        </button>

        <button
          className="w-full py-2 px-2 sm:px-4 bg-green-500 text-white rounded flex items-center justify-center space-x-1 sm:space-x-2"
          onClick={() => handleShowComponent("ViewAllCourse")}
        >
          <IoIosBook />
          {/* <span className="hidden sm:block">View All Courses</span> */}
        </button>

        <button
          className="w-full py-2 px-2 sm:px-4 mt-2 bg-cyan-500 text-white rounded flex items-center justify-center space-x-1 sm:space-x-2"
          onClick={() => handleShowComponent("ViewAllUser")}
        >
          <FaUsersViewfinder />
          {/* <span className="hidden sm:block">View All Users</span> */}
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 ml-16 sm:ml-20 p-4 h-full overflow-auto">
        {activeComponent === "AddCourse" && <AddCourse />}
        {activeComponent === "ViewAllCourse" && <ViewAllCourse />}
        {activeComponent === "ViewAllUser" && <ViewAllUser />}
        {activeComponent === "none" && <Default_Page />}
      </div>
    </div>
  );
}

export default Admin_layout;
