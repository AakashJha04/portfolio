import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

import { ThemeProvider } from './context/ThemeContext'


function App() {
  return (
    <ThemeProvider>
      <>
        <NavBar />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Testimonials />
        <Contact />
        <SocialLinks />
      </>
    </ThemeProvider>
  );
}

export default App;