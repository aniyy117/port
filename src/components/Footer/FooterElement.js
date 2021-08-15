import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 85%;
  height: 300px;
  background: #191919;
  position: fixed;
  z-index: -1;
  bottom: 0;
`;

export const FooterContent = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FooterH1 = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 2.5rem;
  @media screen and (max-width: 786px) {
    font-size: 1.5rem;
  }
`;

export const FooterLinksTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterLinks = styled.a`
  font-size: 1.4rem;
  margin: 50px 50px;
  text-decoration: none;
  color: #fff;
  &:hover {
    color: red;
  }
  @media screen and (max-width: 786px) {
    margin: 30px 10px;
    font-size: 1rem;
  }
`;

export const FooterSpan = styled.span`
  color: red;
`;

export const FooterCopy = styled.p`
  text-align: center;
  color: #fff;
  @media screen and (max-width: 786px) {
    font-size: 0.9rem;
  }
`;
