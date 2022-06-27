import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Product from "../../src/photos/product.png";

import ArrowRight from "../../src/logos/arrow.svg";
import ArrowLeft from "../../src/logos/arrowback.svg";

const Header = styled.h1`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 64px;
  letter-spacing: 0.01em;
  @media (max-width: 720px) {
    //styleName: Nazwa produktu mobile;
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0.01em;
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
  @media (max-width: 720px) {
    //styleName: tekst;
    font-family: Helvetica;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.01em;
    text-align: left;
    width: 90vw;
  }
`;

const Image = styled.img`
  width: 40em;
  height: 40em;

  @media (max-width: 720px) {
    width: 90vw;
    height: auto;
  }
`;

const Grid2x2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr 8fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-content: center;
  text-align: left;
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90vw;
    margin: auto;
  }
`;

const Column = styled.div`
  max-width: 40em;
  display: flex;
  flex-direction: column;
  margin: auto auto 2em auto;
  @media (max-width: 720px) {
    align-items: center;
  }
`;

const Arrows = styled.img`
  width: 1.5em;
  height: 1em;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 5em;
  align-items: center;
  justify-content: center;
`;

const Grid = () => {
  const [mobile, setMobile] = useState(true);
  const [count, setCount] = useState(0);

  const Images = [Product];

  useEffect(() => {
    if (window.innerWidth < 720) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  });

  return mobile ? (
    <Grid2x2>
      <Column
        style={{ gridColumnStart: "2", alignItems: "center", margin: "auto" }}
      >
        <Header>Nagłówek dla O nas</Header>
      </Column>
      <Column style={{ gridColumnStart: "3" }}>
        <Image src={Product} />
        <Text>
          In a professional context it often happens that private or corporate
          clients corder a publication to be made and presented.
        </Text>
      </Column>
      <Column style={{ gridColumnStart: "2", gridRowStart: "2" }}>
        <Image src={Product} />
        <Text>
          In a professional context it often happens that private or corporate
          clients corder a publication to be made and presented.
        </Text>
      </Column>
      <Column style={{ gridColumnStart: "3", gridRowStart: "2" }}>
        <Image src={Product} />
        <Text>
          In a professional context it often happens that private or corporate
          clients corder a publication to be made and presented.
        </Text>
      </Column>
    </Grid2x2>
  ) : (
    <Grid2x2>
      <Column style={{ alignItems: "start", margin: "0" }}>
        <Header>Nagłówek dla O nas</Header>
      </Column>
      <Column style={{ gridColumnStart: "3" }}>
        <Image src={Images[count]} />
        <Text>
          In a professional context it often happens that private or corporate
          clients corder a publication to be made and presented.
        </Text>
        <Row
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Arrows
            src={ArrowLeft}
            onClick={() => {
              if (count > 0) setCount(count - 1);
            }}
          />
          <Text style={{ textAlign: "center", maxWidth: "1em" }}>
            {count + 1}
          </Text>
          <Arrows
            src={ArrowRight}
            onClick={() => {
              if (count < Images.length - 1) setCount(count + 1);
            }}
          />
        </Row>
      </Column>
    </Grid2x2>
  );
};

export default Grid;
