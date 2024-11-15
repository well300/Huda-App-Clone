import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar"
import KeyFeatures from "./components/KeyFeatures";
import InteractiveVid from "./components/InteractiveVid"
import ForReverts from "./components/ForReverts"

const App = () => {
  return (
    <div className="App">
      {/* Navbar Component */}
      <NavBar />
      
      <section id="home" className="pt-16 bg-white">
        <Home /> 
      </section>

      <section id="keyfeatures" className=" pt-24 bg-white">
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
