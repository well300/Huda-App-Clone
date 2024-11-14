import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
      {/* Navbar Component */}
      <Navbar />
      
      <section id="home" className="pt-16 pb-20 bg-white">
        <Home /> {/* This will display your Home component */}
      </section>


    </div>
  );
};

export default App;
