import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #0a0b09;
  diplay: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 30px 30px;
`;

export const AboutTitle = styled.h1`
  color: #fff;
  font-size: 3.5rem;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  padding: 50px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 20px 10px;
  }
`;

export const AboutImg = styled.div``;

export const Img = styled.img`
  width: 90vh;
  height: auto;
  @media screen and (max-width: 1024px) {
    width: 40vh;
  }
  @media screen and (max-width: 768px) {
    width: 40vh;
  }
  @media screen and (max-width: 480px) {
    width: 40vh;
  }
`;

export const AboutMe = styled.div`
  color: #fff;
  padding: 10px 50px;
  @media screen and (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const AboutH2 = styled.h2`
  font-size: 2.5rem;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const AboutP = styled.p`
  font-size: 1.2rem;
  text-align: left;
  margin-top: 25px;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const Span = styled.span`
  color: red;
`;
