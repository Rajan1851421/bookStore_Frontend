import React from "react";
import Navbar from "./components/Navbar";
import Router from "./routing/Router";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="select-none bg-[#F5F5F4]">
      <Navbar />
      <Router />
      <Footer/>
     
    </div>
  );
}

export default App;
