import styled from "styled-components";

export const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0a0b09;
  padding: 50px 10px;
  position: relative;
  z-index: 1;
  margin-bottom: 300px;
`;

export const ServiceWapper = styled.div`
  max-widith: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 25px;
  padding: 0 50px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServiceCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transitions: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServiceIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServiceH1 = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServiceH2 = styled.h2`
  color: red;
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServiceP = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 10px;
`;
