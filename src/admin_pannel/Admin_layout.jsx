import React, { useState } from "react";
import AddCourse from "./AddCourse";
import ViewAllCourse from "./ViewAllCourse";
import ViewAllUser from "./ViewAllUser";

function Admin_layout() {
  const [activeComponent, setActiveComponent] = useState("none");

  const handleShowComponent = (component) => {
    console.log(`Setting active component to: ${component}`); // Debug log
    setActiveComponent(component);
  };

  return (
    <div className="flex h-screen">
      {/* Fixed width div */}
      <div className="w-64  p-4 fixed  left-0 h-1/2 overflow-auto z-0 border-r-2">
        <button
          className="block w-full mb-2 py-2 px-4 bg-blue-500 text-white rounded"
          onClick={() => handleShowComponent("AddCourse")}
        >
          Add Course
        </button>
        <button
          className="block w-full py-2 px-4 bg-green-500 text-white rounded"
          onClick={() => handleShowComponent("ViewAllCourse")}
        >
          View All Courses
        </button>
        <button
          className="block w-full py-2 px-4 mt-2 bg-cyan-500 text-white rounded"
          onClick={() => handleShowComponent("ViewAllUser")}
        >
          View All User
        </button>
      </div>

      {/* Content area */}
      <div className="flex-1 ml-64 p-4 h-full overflow-auto">
        {activeComponent === "AddCourse" && <AddCourse />}
        {activeComponent === "ViewAllCourse" && <ViewAllCourse />}
        {activeComponent === "ViewAllUser" && <ViewAllUser/>}

        {activeComponent === "none" && <p>Please select an option.</p>}
      </div>
    </div>
  );
}

export default Admin_layout;
