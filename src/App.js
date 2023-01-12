import { useEffect } from "react";
import Aos from 'aos'
import "./App.css";
import Excercise from "./components/Excercise";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Start from "./components/Start";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  useEffect(()=>{
    Aos.init();
  },[])
  return <>
    <Header />
    <Hero />
    <Excercise />
    <Start />
    <Pricing />
    <Testimonials />
    <Footer />
  </>;
}

export default App;
 