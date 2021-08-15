import React, { useEffect } from "react";
import {
  HeroContainer,
  HeroBg,
  Video,
  HeroH1,
  HeroContent,
  HeroP,
} from "./HeroElements";
import video from "../videos/Pexels.mp4";
import Aos from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <HeroContainer id="home">
      <HeroBg>
        <Video autoPlay loop muted src={video} type="video/mp4" />
      </HeroBg>
      <HeroContent data-aos="fade-up">
        <HeroH1>Hello.I'm a Frontend Developer</HeroH1>
        <HeroP>
          My name's Aniket Jadhav. I craft user interface using modern frontend
          web technologies
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
