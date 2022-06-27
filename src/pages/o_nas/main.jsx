import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Image from "../../src/photos/promo_cut.png";
import SmallImage from "../../src/photos/promo_cut2.png";

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 5em auto;
  @media (max-width: 720px) {
    margin-top: 1em;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 720px) {
    align-items: center;
    width: 100vw;
    margin: 0 auto;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 5em;
  justify-content: space-between;
  @media (max-width: 720px) {
    flex-direction: column;
    width: 90vw;
  }
`;

const Header = styled.h1`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 64px;
  letter-spacing: 0.01em;
  @media (max-width: 720px) {
    font-family: Helvetica;
    font-size: 20px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0.01em;
    text-align: left;
    margin-left: 1em;
    margin-bottom: 1em;
  }
`;

const Text = styled.p`
  max-width: 25em;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 29px;
  letter-spacing: 0.02em;
  @media (max-width: 720px) {
    //styleName: tekst;
    font-family: Helvetica;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.01em;
    text-align: left;
  }
`;

const Button = styled.button`
  width: 20em;
  height: 6em;
  background: #1c1c1c;
  border: 1px solid #1c1c1c;
  box-sizing: border-box;
  border-radius: 5px;
  @media (max-width: 720px) {
    width: 90vw;
    height: 4em;
    border-radius: 10px;
  }
`;

const ButtonText = styled.p`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.05em;
  color: white;
`;

const PromoImage = styled.img`
  width: 40em;
  height: 40em;
  @media (max-width: 720px) {
    width: 100vw;
    height: auto;
  }
`;

const MainSegment = () => {
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 720) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  });
  return mobile ? (
    <Container>
      <Row>
        <Column>
          <Header>Nagłówek dla O nas</Header>
          <Text
            style={{ maxWidth: "20em", marginTop: "3em", marginBottom: "3em" }}
          >
            In a professional context it often happens that private or corporate
            clients corder a publication to be made and presented.
          </Text>
          <Button>
            <ButtonText>Poznajmy się</ButtonText>
          </Button>
        </Column>
        <PromoImage src={Image} />
      </Row>
      <Row style={{ flexDirection: "row-reverse" }}>
        <Column>
          <Text>
            In a professional context it often happens that private or corporate
            clients corder a publication to be made and presented.
          </Text>
          <Text>
            In a professional context it often happens that private or corporate
            clients corder a publication to be made and presented.
          </Text>
          <Text>
            In a professional context it often happens that private or corporate
            clients corder a publication to be made and presented.
          </Text>
        </Column>
      </Row>
    </Container>
  ) : (
    <Container>
      <Row>
        <Header>Nagłówek dla O nas</Header>
        <PromoImage src={SmallImage} />
        <Column>
          <Text
            style={{ maxWidth: "90vw", marginTop: "3em", marginBottom: "3em" }}
          >
            In a professional context it often happens that private or corporate
            clients corder a publication to be made and presented.
          </Text>
          <Button>
            <ButtonText>Poznajmy się</ButtonText>
          </Button>
        </Column>
      </Row>
      <Row>
        <Column>
          <Text>
            In a professional context it often happens that private or corporate
            clients corder a publication to be made and presented.
          </Text>
          <Text>
            In a professional context it often happens that private or corporate
            clients corder a publication to be made and presented.
          </Text>
          <Text>
            In a professional context it often happens that private or corporate
            clients corder a publication to be made and presented.
          </Text>
        </Column>
      </Row>
    </Container>
  );
};

export default MainSegment;
