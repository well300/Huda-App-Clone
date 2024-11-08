import NavBar from './components/NavBar';
import Hero from './components/Hero'
import Footer from './components/Footer';
import KnowUsMore from './components/KnowUsMore';
import NewUpdates from './components/NewUpdates';
import KeyFeatures from './components/KeyFeatures';
import InteractiveVid from './components/InteractiveVid';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
     <div className='mb-8'> 
      <NavBar />
     </div>

     <div>
     <Hero />
     </div>
     
     <div>
      <KeyFeatures />
     </div>

    <div>
      <InteractiveVid />
      </div>  

      <div> 
        <NewUpdates />
      </div>

      <div > 
        <KnowUsMore />
      </div>

      <div> 
        <Footer />
      </div>
    </div>
  );
}

export default App;
