import React from "react";
import {
  HeroContainer,
  HeroBg,
  Video,
  HeroH1,
  HeroContent,
  HeroP,
} from "./HeroElements";
import video from "../videos/Pexels.mp4";

function Hero() {
  return (
    <div>
      <HeroContainer id="home">
        <HeroBg>
          <Video autoPlay loop muted src={video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>Hello.I'm a Frontend Developer</HeroH1>
          <HeroP>
            My name's Aniket Jadhav. I craft user interface using mordern
            frontend web technologies
          </HeroP>
        </HeroContent>
      </HeroContainer>
    </div>
  );
}

export default Hero;
