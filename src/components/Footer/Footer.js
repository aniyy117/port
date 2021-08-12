import React from "react";
import {
  FooterContainer,
  FooterH1,
  FooterContent,
  FooterLinksTab,
  FooterLinks,
  FooterSpan,
  FooterCopy,
} from "./FooterElement";

function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterContent>
          <FooterH1>
            Http<FooterSpan>.</FooterSpan>DittoSays
          </FooterH1>
          <FooterLinksTab>
            <FooterLinks
              href="https://www.instagram.com/http.aniyy/"
              target="_blank"
            >
              Instgram
            </FooterLinks>
            <FooterLinks
              href="https://www.linkedin.com/in/aniket-jadhav-847151157/"
              target="_blank"
            >
              LinkedIn
            </FooterLinks>
            <FooterLinks href="https://github.com/aniyy117" target="_blank">
              Github
            </FooterLinks>
          </FooterLinksTab>
          <FooterCopy>
            Copyright &#169; 2021 All rights reserved | Aniket Jadhav
          </FooterCopy>
        </FooterContent>
      </FooterContainer>
    </>
  );
}

export default Footer;
