import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import "../Cards.css";
import Footer from "../Footer";
import Services from "./Services";
import Skills from "../Skills";
import Military from "../Military";
import Education from "../Education";
import Experience from "../Experience";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      {/* <Footer /> */}
      {/* <Services /> */}
      <Skills />
      <Military />
      <Experience />
      <Education />
    </>
  );
}

export default Home;
