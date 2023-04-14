import React from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">

          {/* hero-section */}
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          
          {/* main-section */}
          <About/>
          <Experience/>
          <Tech/>
          <Works/>

          {/* contact-star section */}
          <div>
            <Contact/>
            <StarsCanvas/>
          </div>


        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
