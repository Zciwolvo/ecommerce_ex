import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import photoBig from "../../src/photos/table.png";
import photoSmall from "../../src/photos/sofa.png";

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 4fr 1fr;
  align-items: center;
  justify-content: center;
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 5em;
  }
`;

const BigText = styled.p`
  max-width: 31.5em;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2em;
  line-height: 2em;
  letter-spacing: 0.02em;
  line-height: 27px;
  @media (max-width: 720px) {
    max-width: 90vw;
    width: 100%;
    font-family: Helvetica;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.01em;
    text-align: left;
  }
`;

const SmallText = styled.p`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.03em;
  margin-top: 0;
  @media (max-width: 720px) {
    height: 0;
    width: 0;
    visibility: hidden;
  }
`;

const BoldText = styled.p`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 29px;
  letter-spacing: 0.01em;
  margin-top: 0;
  @media (max-width: 720px) {
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0.01em;
    text-align: left;
  }
`;

const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 720px) {
    width: 90vw;
  }
`;

const Column2 = styled.div`
  width: 38em;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 720px) {
    width: 90vw;
    margin-bottom: 2em;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 720px) {
    width: 90vw;
  }
`;

const Photo1 = styled.img`
  width: 38em;
  height: 46em;
  display: grid;
  @media (max-width: 720px) {
    width: 90vw;
    height: auto;
  }
`;

const Photo2 = styled.img`
  width: 38em;
  height: 46em;
  display: grid;
  @media (max-width: 720px) {
    width: 90vw;
    height: auto;
  }
`;

const Asortyment3 = () => {
  return (
    <Container>
      <Column style={{ gridRow: "span 2" }}>
        <Column2>
          <Photo1 src={photoBig} />
          <BigText>
            In a professional context it often happens that private or corporate
            clients corder a publication to be made and presented.
          </BigText>
          <Row>
            <BoldText>MEBLE</BoldText>
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
                ZOBACZ ZAWARTOŚĆ
              </Link>
            </SmallText>
          </Row>
        </Column2>
      </Column>
      <Column>
        <Column2>
          <Photo2 src={photoSmall} />
          <BigText>
            In a professional context it often happens that private or corporate
            clients corder a publication to be made and presented.
          </BigText>
          <Row>
            <BoldText>SIEDZISKA</BoldText>
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
                ZOBACZ ZAWARTOŚĆ
              </Link>
            </SmallText>
          </Row>
        </Column2>
      </Column>
    </Container>
  );
};

export default Asortyment3;
