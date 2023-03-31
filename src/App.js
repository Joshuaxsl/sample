import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import OurLocation from "./components/OurLocation";
import Service from "./components/Service";
import Sample from "./components/Sample";
import Joshua from "./components/Joshua";
import Calculator from "./components/Calculator";
import HeightCalculator from "./components/HeightCalculator";
import Practice from "./components/Practice";
import WeightCalculator from "./components/WeightCalculator";
import BMI from "./components/BMI";
import ShowHide from "./components/ShowHide";
import Drawer from "./components/Drawer";
import Excercise from "./Excercise";
import Task from "./components/Task";
import Reveal from "./components/Reveal";
import FunctionPractice from "./components/FunctionPractice";
import Map from "./components/Map";
import AddTask from "./components/AddTask";
import Notes from "./components/Notes";



function App() {
  return (
    <div>
      <Notes/>
      <AddTask/>
      <Map/>
      <FunctionPractice/>
      <Navigation/>
      <Hero/>
      <About/>
      <Service/>
      <OurLocation/>
      <Footer /> 
      <Sample/>
      <Joshua />
      <Calculator/>
      <HeightCalculator/>
      <ShowHide/>
      <BMI/>
      <WeightCalculator/>
      <Practice/>
      <Drawer/>
      <Reveal/>
      <Task/>
      <Excercise/>
    </div>
    
  );
}

export default App;
