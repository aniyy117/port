import React from "react";
import myimg from "../images/myimage.jpeg";
import {
  AboutContainer,
  AboutTitle,
  AboutContent,
  AboutImg,
  Img,
  AboutMe,
  AboutH2,
  AboutP,
  Span,
} from "./AboutElements";

function About() {
  return (
    <div>
      <AboutContainer id="about" smooth={true} duration={500}>
        <AboutTitle>About</AboutTitle>
        <AboutContent>
          <AboutImg>
            <Img src={myimg} alt="myimage" />
          </AboutImg>
          <AboutMe>
            <AboutH2>
              Student, Programmer, Full Stack Developer, Content Creater
            </AboutH2>
            <AboutP>
              Hello, It's <Span> Aniket Jadhav</Span>, an Indian Web Developer,
              Freelancer and YouTuber
            </AboutP>
            <AboutP>
              I've worked on several community and private projects. I can make
              quality responsive websites and Android apps. I can do both
              frontend and backend projects. I mainly code in React, Javascript
              and Java. I can work with REST APIs, Frameworks, Full Stack
              projects and Apps.
            </AboutP>
          </AboutMe>
        </AboutContent>
      </AboutContainer>
    </div>
  );
}

export default About;
