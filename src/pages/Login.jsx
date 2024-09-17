import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing FontAwesome icons
import axios from "axios";
import { useDispatch } from "react-redux";
import loginFetch, { setToken ,userType } from "../features/loginSlice.js";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const[loading,setLoading] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    axios.post(`http://localhost:4000/login/`, { email, password })
      .then((response) => {
        console.log(response.data);
        dispatch(setToken(response.data.token))
        dispatch(userType(response.data.type))  
        setLoading(false)
        navigate('/courses')      
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="bg-white">
        <div className="w-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
          <div className="relative py-3 sm:max-w-xs sm:mx-auto">
            <div className="min-h-96 px-8 py-6 mt-4 text-left bg-[#F5D0FE] dark:bg-gray-900 rounded-xl shadow-lg">
              <div className="flex flex-col justify-center items-center h-full select-none">
                <div className="flex flex-col items-center justify-center gap-2 mb-8">
                  <Link to="/">
                    <img
                      src="https://amethgalarcio.web.app/assets/logo-42fde28c.svg"
                      className="w-8"
                      alt="Logo"
                    />
                  </Link>
                  <p className="m-0 text-[16px] font-semibold dark:text-white">
                    Login to your Account
                  </p>
                  <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">
                    Get started with our app, just start your session and enjoy
                    the experience.
                  </span>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="w-full flex flex-col gap-2">
                    <label
                      className="font-semibold text-xs text-gray-400"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <input
                      id="username"
                      className="border rounded-lg px-2 py-2 mb-5 text-sm w-full outline-none"
                      placeholder="Username"
                      aria-label="Username"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2 relative">
                    <label
                      className="font-semibold text-xs text-gray-400"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"} // Toggle input type
                      className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
                      placeholder="••••••••"
                      aria-label="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* Show/Hide Password Icon */}
                    <span
                      className="absolute right-3 top-10 cursor-pointer flex justify-center items-center "
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                  <div className="mt-5">
                    <button
                      type="submit"
                      className="py-1 px-8 bg-blue-500 hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none"
                    >
                     {loading ? "Please wait..." : "Login"} 
                    </button>
                     <Link to='/signup'><span>Signup Here?</span></Link> 
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
