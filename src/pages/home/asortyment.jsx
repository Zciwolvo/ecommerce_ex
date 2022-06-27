import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SquareProduct from "../components/squareProduct";
import chair from "../../src/photos/homepage/chair.png";
import brutus from "../../src/photos/homepage/brutus.png";
import bed from "../../src/photos/homepage/bed.png";
import bedshort from "../../src/photos/homepage/bedshort.png";
import RectangleProduct from "../components/rectangleProduct";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-start: auto;
  align-items: center;
  justify-content: center;
  margin-bottom: 5em;
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
  }
`;

const BigText = styled.p`
  max-width: 22.5em;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 29px;
  letter-spacing: 0.02em;
  @media (max-width: 720px) {
    font-family: Helvetica;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.01em;
    text-align: left;
    margin-bottom: 0;
  }
`;

const SmallText = styled.p`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  letter-spacing: 0.03em;
  align-self: flex-start;
  color: black;
  @media (max-width: 720px) {
    font-family: Helvetica;
    font-size: 14px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0.01em;
    text-align: left;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7em;
  @media (max-width: 720px) {
    margin: 0;
    margin-bottom: 3em;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 720px) {
    width: 100vw;
    flex-direction: column;
    align-items: center;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-row: span 2;
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
  }
`;

const Asortyment = () => {
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 720) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }, []);

  return (
    <Container>
      <Column>
        <BigText>
          In a professional context it often happens that private or corporate
          clients corder a publication to be made and presented.
        </BigText>
        <Link
          style={{ textDecoration: "none", height: "0", maxWidth: "15em" }}
          to="/"
        >
          <SmallText>SPRAWDŹ ASORTYMENT</SmallText>
        </Link>
      </Column>
      <Grid>
        <Column>
          <Row>
            <SquareProduct product={chair} />
            <SquareProduct product={brutus} />
          </Row>
          <Row>
            {mobile ? (
              <RectangleProduct product={bed} />
            ) : (
              <SquareProduct product={bedshort} />
            )}
          </Row>
        </Column>
      </Grid>
    </Container>
  );
};

export default Asortyment;
