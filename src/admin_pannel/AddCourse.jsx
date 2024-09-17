import React, { useState } from "react";
import axios from 'axios'

function AddCourse() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    price: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:4000/books`, formData)
    .then((response) => {
      console.log(response);
    }).catch(error=>{
        console.log(error)
    })

    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <form
        className="bg-gray-300 p-6 rounded-lg shadow-sm w-[95%] md:w-[75%] mx-auto  "
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-semibold uppercase mb-6 text-center text-gray-800 ">
          Add a New Book
        </h2>

        {/* Book Name */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Book Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-gray-700"
            placeholder="Enter book name"
            required
          />
        </div>

        {/* Title */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <textarea
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-gray-700"
            placeholder="Enter book title"
            required
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-gray-700"
            placeholder="Enter book price"
            min="0" // Prevents negative values
            required
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="category"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-gray-700"
            required
          >
            <option value="" disabled>
              Select category
            </option>
            <option value="Paid">Paid</option>
            <option value="Free">Free</option>
          </select>
        </div>

        {/* Image */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Image URL{" "}
            <span className="text-[10px] text-red-500">
              Paste Only Iamge Url
            </span>
          </label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-gray-700"
            placeholder="Enter image URL"
            pattern="https?://.*" // Accepts URLs starting with http:// or https://
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCourse;
