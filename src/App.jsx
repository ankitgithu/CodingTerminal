import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Content from "./Components/Content";
import Contact from "./Components/Contact";



const App = () => {
  return (
    <div>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Add margin-top to avoid overlap with Navbar */}
      <div className="mt-16">
        <Home />
      </div>
      <div>
        <Content/>
      </div>

      <div>
        <Contact/>
      </div>
      
    </div>
  );
};

export default App;
