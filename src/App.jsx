import React from "react";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import KeyFeatures from "./components/KeyFeatures"

const App = () => {
  return (
    <div className="App">
      {/* Navbar Component */}
      <Navbar />
      
      <section id="home" className="pt-16 bg-white">
        <Home /> {/* This will display your Home component */}
      </section>

      <section id="keyfeatures" className=" bg-white">
        <KeyFeatures /> {/* This will display your Home component */}
      </section>


    </div>
  );
};

export default App;
