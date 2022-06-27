import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Promo2 from "../../src/photos/promo2.jpg";
import PromoCut from "../../src/photos/promo_cut2.png";

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 5em auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 10em;
  @media (max-width: 720px) {
    margin-bottom: 5em;
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
  margin: 0 0em 1em 2em;
  @media (max-width: 720px) {
    font-family: Helvetica;
    font-size: 20px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0.01em;
    text-align: left;
  }
`;

const SmallText = styled.p`
  width: 50vw;
  max-width: 50em;
  height: auto;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 29px;
  letter-spacing: 0.01em;
  margin: auto;
  margin-top: 3em;
  @media (max-width: 720px) {
    width: 90vw;
    margin-top: 2em;
    //styleName: tekst;
    font-family: Helvetica;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.01em;
    text-align: left;
  }
`;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1920px;
  width: 100vw;
  height: 55vw;
  max-height: 70em;
  background-image: url(${(props) => props.props.photo});
  background-repeat: no-repeat;
  background-size: contain;
  justify-content: center;
  @media (max-width: 720px) {
    width: 100vw;
    height: 45vh;
    object-fit: cover;
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
    width: 0;
    height: 0;
    visibility: hidden;
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
`;

const BannerB2B = (props) => {
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 720) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  });
  return (
    <Container>
      <BigText>Nagłówek dla B2B</BigText>
      <Banner props={{ photo: mobile ? Promo2 : PromoCut }}>
        <DiscoverButton>
          <ButtonText>ZOBACZ VIDEO</ButtonText>
        </DiscoverButton>
      </Banner>
      <SmallText>
        In a professional context it often happens that private or corporate
        clients order a publication to be made and presented.
      </SmallText>
    </Container>
  );
};

export default BannerB2B;
