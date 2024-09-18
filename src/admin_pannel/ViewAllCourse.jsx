import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  deleteBook, getAllBooks } from "../features/bookSlice";
import { deleteUser } from "../features/loginSlice";

function ViewAllCourse() {
  const { All_Book, status, loading, error } = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAllBooks());
  }, [dispatch]);

  useEffect(() => {
    if (status === "deleted") {
      // Fetch the updated list of books after deletion
      dispatch(getAllBooks());
    }
  }, [status, dispatch]);

  const handleDelete = (id) => {
    console.log(id);
    
    dispatch(deleteBook(id));
  };

  return (
    <>
      <div className="w-[95%]">
        <h1 className="text-center text-gray-800 font-bold uppercase text-md md:text-2xl py-2 ">View All Courses</h1>

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
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Image
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
                    {All_Book &&
                      All_Book.map((book) => (
                        <tr key={book._id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                            {book.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {book.price}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {book.category}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            <img
                              src={book.image}
                              alt={book.name}
                              className="w-16 h-16 object-cover"
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                            <button
                              type="button"
                              onClick={() => handleDelete(book._id)}
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
    </>
  );
}

export default ViewAllCourse;
