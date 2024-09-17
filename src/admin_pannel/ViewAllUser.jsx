import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllusers } from "../features/loginSlice";

function ViewAllUser() {
  const { loading, All_users,error } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllusers());
  }, []);


  const handleDelete =(id)=>{
    dispatch(deleteUser(id))
  }





  return (
    <div>
      <h1>All users</h1>
      <div className="w-[95%]">
        <h1 className="text-center text-gray-800 font-bold uppercase text-md md:text-2xl py-2 ">
          View All Courses
        </h1>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="w-full divide-y divide-gray-200 dark:divide-neutral-700 mx-auto">
                  <thead className="bg-slate-800 text-white ">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Type
                      </th>
                     
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                    {All_users &&
                      All_users.map((user) => (
                        <tr key={user._id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                            {user.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {user.email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {user.type}
                          </td>
                          
                          <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                            <button
                              type="button"
                              onClick={() => handleDelete(user._id)}
                              className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border 
                              border-transparent  hover:text-blue-800 focus:outline-none
                               focus:text-blue-800 dark:text-blue-500 dark:hover:text-blue-400
                                dark:focus:text-blue-400 bg-red-500 text-black px-2 py-1 "
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewAllUser;
