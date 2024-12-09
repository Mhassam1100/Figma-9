import Item from "./components/Item";
import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import About from "./components/About";
import Choose from "./components/Choose";
import Our from "./components/our";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>

      <Navbar/>
      <Hero/>
      <About/>
      <Item/>
      <Choose/>
      <Our />
      <Footer />
    </div> 
    
  );
}