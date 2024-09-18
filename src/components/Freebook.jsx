import React, { useEffect, useState } from "react";
import Glide from "@glidejs/glide";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "../features/bookSlice";

export default function CarouselControlsInside() {
  const dispatch = useDispatch();
  const { All_Book, status, loading } = useSelector((state) => state.book);
  const [freebook, setFreeBook] = useState([]);

  useEffect(() => {
    dispatch(getAllBooks());
    const freebook = All_Book && All_Book.filter((book) => book.category === "Free");
    // console.log("free:",freebook)
    setFreeBook(freebook)
  }, [dispatch]);

  useEffect(() => {
    if (freebook && freebook.length > 0) {
      const slider = new Glide(".glide-01", {
        type: "carousel",
        focusAt: "center",
        perView: 3,
        autoplay: 3000,
        animationDuration: 700,
        gap: 24,
        classNames: {
          nav: {
            active: "[&>*]:bg-wuiSlate-700",
          },
        },
        breakpoints: {
          1024: {
            perView: 2,
          },
          640: {
            perView: 1,
          },
        },
      }).mount();

      return () => {
        slider.destroy();
      };
    }
  }, [All_Book]);

  return (
    <>
      <div className=" px-10 bg-white">
        <h2 className=" text-center text-xl md:text-4xl underline font-bold capitalize mb-4 mt-2 md:mt-1 ">
          Our Free offer book
        </h2>
        <div className="glide-01 relative w-full bg-white text-gray-900 ">
          <div className="overflow-hidden" data-glide-el="track">
            <ul className="whitespace-no-wrap flex-no-wrap  relative flex w-full overflow-hidden py-4">
              {freebook &&
                freebook.map((item) => (
                  <li
                    key={item.id}
                    className="p-4 bg-white shadow-lg shadow-teal-500 rounded-md "
                  >
                    <img
                      className="p-2 w-32 h-32 object-cover mx-auto"
                      src={item.image}
                      alt="product image"
                    />
                    <p className="uppercase  ">
                      {" "}
                      Title :{" "}
                      <span className="italic text-gray-500 ">
                        {" "}
                        {` ${item.title.slice(0, 30)}`}{" "}
                      </span>{" "}
                    </p>
                    <div className="grid grid-cols-2">
                      {" "}
                      <span>{item.category} </span>{" "}
                    </div>
                    <div className="grid grid-cols-2">
                      {" "}
                      <p className="p-2 font-extrabold text-xl ">
                        {" "}
                        {`$ ${item.price}`}{" "}
                      </p>
                      <p className="p-2 font-extrabold text-md ">
                        {" "}
                        {`${item.name}`}{" "}
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Buy Now
                      </button>{" "}
                      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Add to Cart
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          <div
            className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4"
            data-glide-el="controls"
          >
            <button
              className="inline-flex h-8 w-8 items-center bg-red-200 opacity-30 justify-center rounded-full border border-slate-700 bg-white text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
              data-glide-dir="<"
              aria-label="prev slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <title>prev slide</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            </button>
            <button
              className="inline-flex h-8 w-8 bg-red-200 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
              data-glide-dir=">"
              aria-label="next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <title>next slide</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js"></script>
    </>
  );
}
