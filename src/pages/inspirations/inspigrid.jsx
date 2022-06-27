import React from "react";
import styled from "styled-components";

import Product1 from "../../src/photos/inspirations/1.jpg";
import Product2 from "../../src/photos/inspirations/2.jpg";
import Product3 from "../../src/photos/inspirations/3.jpg";
import Product4 from "../../src/photos/inspirations/4.jpg";

const SmallText = styled.p`
  font-family: Helvetica;
  font-size: 14px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0.03em;
  text-align: left;
  margin: auto;
  margin-top: 0;
  margin-right: 1em;
  @media (max-width: 720px) {
    //styleName: Produkt h3;
    font-family: Helvetica;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.03em;
    text-align: left;
  }
`;

const Text = styled.p`
  max-width: 28em;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.01em;
  margin: auto;
  margin-top: 0;
  margin-left: 5em;
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

const Image = styled.img`
  width: 684px;
  height: 558px;
  @media (max-width: 720px) {
    width: 90vw;
    height: 90vw;
  }
`;

const Grid2x2 = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-content: center;
  text-align: left;
  margin-top: 3em;
  @media (max-width: 720px) {
    width: 90vw;
    display: flex;
    flex-direction: column;
  }
`;

const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3em;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
`;

const BigText = styled.p`
  font-family: Helvetica;
  font-size: 25px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0.01em;
  text-align: left;
`;

const InspiGrid = () => {
  return (
    <Column style={{ alignItems: "" }}>
      <Grid2x2>
        <Column style={{ gridColumnStart: "1" }}>
          <Image src={Product1} />
          <Row>
            <SmallText>PRODUKT</SmallText>
            <Text>
              In a professional context it often happens that private or
              corporate clients corder a publication to be made and presented.
            </Text>
          </Row>
        </Column>
        <Column style={{ gridColumnStart: "2" }}>
          <Image src={Product2} />
          <Row>
            <SmallText>PRODUKT</SmallText>
            <Text>
              In a professional context it often happens that private or
              corporate clients corder a publication to be made and presented.
            </Text>
          </Row>
        </Column>
        <Column style={{ gridColumnStart: "1", gridRowStart: "2" }}>
          <Image src={Product3} />
          <Row>
            <SmallText>PRODUKT</SmallText>
            <Text>
              In a professional context it often happens that private or
              corporate clients corder a publication to be made and presented.
            </Text>
          </Row>
        </Column>
        <Column style={{ gridColumnStart: "2", gridRowStart: "2" }}>
          <Image src={Product4} />
          <Row>
            <SmallText>PRODUKT</SmallText>
            <Text>
              In a professional context it often happens that private or
              corporate clients corder a publication to be made and presented.
            </Text>
          </Row>
        </Column>
      </Grid2x2>
      <Row
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          width: "90%",
        }}
      >
        <BigText>Blog</BigText>
        <Text style={{ margin: "0 1em 0 0" }}>Wszystkie artykuły</Text>
      </Row>
    </Column>
  );
};

export default InspiGrid;
