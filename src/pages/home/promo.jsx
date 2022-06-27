import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Promo2 from "../../src/photos/promo2.jpg";
import PromoMini from "../../src/photos/homepage/bannerpromomini.png";

const Container = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 5em;
  @media (max-width: 720px) {
    width: 100%;
  }
`;

const BigText = styled.h1`
  width: 10em;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 90px;
  line-height: 100%;
  letter-spacing: 0.03em;
  color: #1c1c1c;
  grid-column-start: 2;
  grid-row-start: 1;
  margin-top: 0;
  @media (max-width: 720px) {
    width: 90vw;
    font-family: Helvetica;
    font-size: 45px;
    font-weight: 700;
    line-height: 54px;
    letter-spacing: 0.01em;
    text-align: left;
    align-self: center;
  }
`;

const SmallText = styled.p`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 29px;
  letter-spacing: 0.01em;
`;

const SmallestText = styled.p`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 0.01em;
  margin: 0;
  color: black;
`;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1920px;
  width: 90vw;
  height: 50vw;
  background-image: url(${Promo2});
  background-repeat: no-repeat;
  background-size: contain;
  justify-content: center;
  @media (max-width: 720px) {
    width: 100vw;
    height: 80vw;
    background-image: url(${PromoMini});
  }
`;

const DiscoverButton = styled.div`
  width: 16em;
  height: 4em;
  border: 1px solid #f4f4f4;
  box-sizing: border-box;
  border-radius: 5px;
  text-align: center;
  margin: auto;
  @media (max-width: 720px) {
    height: 48px;
    width: 197px;
    justify-content: center;
    align-items: center;
  }
`;

const ButtonText = styled.p`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.05em;
  color: #f4f4f4;
  margin: 10%;
  @media (max-width: 720px) {
    //styleName: button 14pkt;
    font-family: Helvetica;
    font-size: 14px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0.01em;
    text-align: left;
    padding: 10%;
    padding-top: 0%;
    margin-top: 5%;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-row-start: 3;
  grid-column-start: 1;
  grid-column: span 3;
  justify-content: space-between;
  @media (max-width: 720px) {
    width: 0;
    height: 0;
    visibility: hidden;
  }
`;

const Column = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  grid-row-start: 2;
  grid-column-start: 1;
  grid-column: span 3;
  justify-content: center;
  margin: auto;
`;

const Promo = () => {
  return (
    <Container>
      <BigText>We are angels of the design.</BigText>
      <Column>
        <Banner>
          <DiscoverButton>
            <ButtonText>ZOBACZ VIDEO</ButtonText>
          </DiscoverButton>
        </Banner>
        <Row>
          <SmallText>INSPIRACJE</SmallText>
          <SmallestText>
            <Link
              to="/inspirations"
              style={{ textDecoration: "none", color: "black" }}
            >
              Wszystkie Artykuły
            </Link>
          </SmallestText>
        </Row>
      </Column>
    </Container>
  );
};

export default Promo;
