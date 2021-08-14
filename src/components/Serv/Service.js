import React from "react";
import {
  ServiceContainer,
  ServiceWapper,
  ServiceH1,
  ServiceH2,
  ServiceCard,
  ServiceP,
  ServiceIcon,
} from "./ServiceElement";

import Icon1 from "../images/Icon1.svg";
import Icon2 from "../images/icon2.svg";
import Icon3 from "../images/Icon3.svg";
import Icon4 from "../images/icon4.svg";

function Service() {
  return (
    <>
      <ServiceContainer id="service">
        <ServiceH1>My Services</ServiceH1>
        <ServiceWapper>
          <ServiceCard>
            <ServiceIcon src={Icon1} />
            <ServiceH2>Full Stack Development</ServiceH2>
            <ServiceP>
              {" "}
              I can work on full stack project(Frontend + Backend) from scratch.
            </ServiceP>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon src={Icon2} />
            <ServiceH2>Responsive web design</ServiceH2>
            <ServiceP>
              I can develop Responsive Web Designs using latest Frontend
              technologies
            </ServiceP>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon src={Icon3} />
            <ServiceH2>Wordpress Solutions</ServiceH2>
            <ServiceP>
              {" "}
              I also provide WordPress Solutions. I can work on your WordPress
              Projects from Scratch.
            </ServiceP>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon src={Icon4} />
            <ServiceH2>Android Applications</ServiceH2>
            <ServiceP>
              {" "}
              I can also develop Fully Featured Android Apps using Java and
              Android Studio.
            </ServiceP>
          </ServiceCard>
        </ServiceWapper>
      </ServiceContainer>
    </>
  );
}

export default Service;