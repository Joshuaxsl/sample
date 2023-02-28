import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import OurLocation from "./components/OurLocation";
import Service from "./components/Service";


function App() {
  return (
    <div>
      <Navigation/>
      <Hero/>
      <About/>
      <Service/>
      <OurLocation/>
      <Footer /> 
    </div>
    
  );
}

export default App;
