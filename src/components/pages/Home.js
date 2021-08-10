import React, { useState } from "react";
import Hero from "../HeroPage/Hero";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import About from "../About/About";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <About />
    </div>
  );
}

export default Home;
