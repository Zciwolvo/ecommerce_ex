import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import SquareProduct from "../components/squareProduct";
import RectangleProduct from "../components/rectangleProduct";

import Photo1 from "../../src/photos/jog1.png";
import Photo2 from "../../src/photos/jog2.png";
import Photo3 from "../../src/photos/lounge1.png";
import Photo4 from "../../src/photos/homepage/jogwide.png";

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 5em;
`;

const BoldText = styled.p`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5em;
  line-height: 18px;
  letter-spacing: 0.05em;
  color: black;
  @media (max-width: 720px) {
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0.01em;
    text-align: right;
  }
`;

const Text = styled.p`
  width: 20em;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5em;
  line-height: 29px;
  letter-spacing: 0.02em;
  @media (max-width: 720px) {
    //styleName: tekst;
    font-family: Helvetica;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.01em;
    text-align: right;
    max-width: 90vw;
    align-self: end;
    margin-right: 5vw;
    width: 23em;
  }
`;

const SmallText = styled.p`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  letter-spacing: 0.01em;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  margin: 2em;
  @media (max-width: 720px) {
    width: 90vw;
    margin: 0 auto;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 720px) {
    width: 100vw;
    flex-direction: column;
  }
`;

const Asortyment4 = () => {
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 720) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }, []);
  return mobile ? (
    <Container>
      <Column>
        <Row>
          <RectangleProduct product={Photo1} />
          <Column>
            <BoldText>POLECANE PRODUKTY</BoldText>
            <Text>
              In a professional context it often happens that private or
              corporate clients corder a publication to be made and presented.
            </Text>
            <SmallText>
              <Link
                style={{
                  textDecoration: "none",
                  height: "0",
                  width: "0",
                  color: "black",
                }}
                to="/"
              >
                ZOBACZ PEŁNY ASORTYMENT
              </Link>
            </SmallText>
          </Column>
        </Row>
        <Row>
          <SquareProduct product={Photo3} />
          <RectangleProduct product={Photo2} />
        </Row>
      </Column>
    </Container>
  ) : (
    <Container>
      <Column>
        <BoldText>POLECANE PRODUKTY</BoldText>
        <RectangleProduct product={Photo1} />
        <RectangleProduct product={Photo2} />
        <RectangleProduct product={Photo4} />
      </Column>
      <Text>
        In a professional context it often happens that private or corporate
        clients corder a publication to be made and presented.
      </Text>
    </Container>
  );
};

export default Asortyment4;
