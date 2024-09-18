import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import { getAllBooks } from "../features/bookSlice";

function Course() {
  const { All_Book } = useSelector((state) => state.book);
  const { token_login } = useSelector((state) => state.login);
  const [filterbook, setFilterBook] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    dispatch(getAllBooks());
    // Filter books where category is "Paid"
    const filteredBooks = All_Book.filter((book) => book.category === "Paid");
    setFilterBook(filteredBooks);

    console.log("Filtered Books:", filteredBooks);
  }, []); // Add All_Book as a dependency to re-run effect if it changes

  // Conditional rendering
  if (!token_login) {
    return <Login />;
  }

  return (
    <div className="bg-white container mx-auto">
      <h1 className="text-xl pt-2 md:pt-5 md:text-3xl font-semibold md:font-bold text-orange-500 text-center">
        All books are paid here...
      </h1>

      <div className="mt-2 md:mt-5 grid grid-cols-1 md:grid-cols-4 gap-5">
        {filterbook.length > 0 ? (
          filterbook.map((book, index) => (
            <div
              key={index}
              className="group my-10 flex w-full max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-md"
            >
              <a className="relative flex h-60 overflow-hidden" href="#">
                <img
                  className="absolute top-0 right-0 h-full w-full object-cover"
                  src={book.image}
                  alt="product image"
                />
                <div className="absolute bottom-0 mb-4 flex w-full justify-center space-x-4">
                  <div className="h-3 w-3 rounded-full border-2 border-white bg-white"></div>
                  <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
                  <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
                </div>
                <div className="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
                  <button className="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </a>
              <div className="mt-4 px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl tracking-tight text-slate-900">
                    {book.title}
                  </h5>
                </a>
                <div className="mt-2 mb-5 flex items-center justify-between">
                  <p>
                    <span className="text-3xl font-bold text-slate-900">
                      $79
                    </span>
                    <span className="text-sm text-slate-900 line-through">
                      {`INR ${book.price}`}
                    </span>
                  </p>
                </div>
                <button className="flex items-center justify-center bg-gray-900 px-2 py-1 text-sm text-white transition hover:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  Add to cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <h2 className="text-center text-xl">No books available</h2>
        )}
      </div>
    </div>
  );
}

export default Course;
