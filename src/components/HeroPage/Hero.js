import React from "react";
import video from "../videos/Pexels.mp4";
import styled from "styled-components";

export const HeroContainer = styled.div`
  font-family: "Encode Sans Expanded", sans-serif;
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 650px;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 768px) {
    height: 600px;
  }

  /*Add :before styles*/
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 900px;
  position: absolute;
  padding: 8px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 4rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 500px;

  @media screen and (max-width: 768px) {
    margin-top: 2px;
    font-size: 1rem;
  }
`;

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
