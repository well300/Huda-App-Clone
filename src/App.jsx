import React from "react";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import KeyFeatures from "./components/KeyFeatures";
import InteractiveVid from "./components/InteractiveVid"
import ForReverts from "./components/ForReverts"

const App = () => {
  return (
    <div className="App">
      {/* Navbar Component */}
      <Navbar />
      
      <section id="home" className="pt-16 bg-white">
        <Home /> 
      </section>

      <section id="keyfeatures" className="pt-16 bg-white">
        <KeyFeatures />
        <InteractiveVid />
      </section>

      <section id="forreverts" className=" pb-16 bg-white">
        <ForReverts />
      </section>



    </div>
  );
};

export default App;
