import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar"
import KeyFeatures from "./components/KeyFeatures";
import InteractiveVid from "./components/InteractiveVid"
import ForReverts from "./components/ForReverts"
import Footer from "./components/Footer";
import DawahCenters from "./components/DawahCenters"
import NewUpdates from "./components/NewUpdates";

const App = () => {
  return (
    <div className="App">
      {/* Navbar Component */}
      <NavBar />
      
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
      
      <section id="dawahcenters" className=" pb-12 bg-white">
        <DawahCenters />
      </section>

      <section className="pb-16">
        <NewUpdates />
      </section>

      <footer >
       <Footer />
      </footer>


    </div>
  );
};

export default App;
