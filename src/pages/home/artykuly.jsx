import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Photo1 from "../../src/photos/hands.png";
import Photo2 from "../../src/photos/room.png";
import Photo3 from "../../src/photos/homepage/handsclose.png";

import ArrowRight from "../../src/logos/arrow.svg";
import ArrowLeft from "../../src/logos/arrowback.svg";

const Container = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 5em;
  @media (max-width: 1550px) {
    width: 100%;
  }
`;

const Row = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 720px) {
    flex-direction: column;
    margin-left: 0;
    align-items: center;
  }
`;
const Row2 = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 3em;
  @media (max-width: 720px) {
    flex-direction: column;
    margin-left: 0;
    align-items: center;
  }
`;

const Column = styled.div`
  margin-left: 2em;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 20em 3em;
  grid-template-rows: 0.5fr 1fr 1fr;
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin: auto;
  }
`;

const Photo = styled.img`
  width: 18em;
  height: 30em;
  @media (max-width: 720px) {
    width: 90vw;
    height: auto;
  }
`;

const Text = styled.p`
  width: 17em;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 29px;
  letter-spacing: 0.02em;
  grid-row-start: 2;
  margin: 0;
  @media (max-width: 720px) {
    width: 90vw;
    //styleName: tekst;
    font-family: Helvetica;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.01em;
    text-align: left;
    align-self: center;
  }
`;

const SmallText = styled.p`
  margin-top: 2em;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.03em;
  grid-row-start: 3;
  margin: 0;
  @media (max-width: 720px) {
    //styleName: button 14pkt;
    font-family: Helvetica;
    font-size: 14px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0.01em;
    text-align: left;
    margin-left: 5vw;
  }
`;

const Arrows = styled.img`
  width: 1.5em;
  height: 1em;
`;

const Artykuly = () => {
  const [mobile, setMobile] = useState(true);
  const [count, setCount] = useState(0);

  const Images = [Photo3, Photo2];

  useEffect(() => {
    if (window.innerWidth < 720) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }, []);
  return mobile ? (
    <Container>
      <Row>
        <Row>
          <Photo src={Photo1} />
          <Column>
            <SmallText style={{ gridRowStart: "1", gridColumnStart: "2" }}>
              01/05
            </SmallText>
            <Text>
              In a professional context it often happens that private or
              corporate clients corder a publication to be made and presented.
            </Text>
            <SmallText>CZYTAJ WIĘCEJ</SmallText>
          </Column>
        </Row>
        <Row2>
          <Photo src={Photo2} />
          <Column>
            <SmallText style={{ gridRowStart: "1", gridColumnStart: "2" }}>
              01/05
            </SmallText>
            <Text>
              In a professional context it often happens that private or
              corporate clients corder a publication to be made and presented.
            </Text>
            <SmallText>CZYTAJ WIĘCEJ</SmallText>
          </Column>
        </Row2>
      </Row>
    </Container>
  ) : (
    <Container>
      <SmallText style={{ marginBottom: "1em" }}>BLOG</SmallText>
      <Row>
        <Photo src={Images[count]} style={{ marginBottom: "1em" }} />
        <Column>
          <Text style={{ marginBottom: "1em" }}>
            In a professional context it often happens that private or corporate
            clients corder a publication to be made and presented.
          </Text>
          <SmallText style={{ marginBottom: "1em" }}>CZYTAJ WIĘCEJ</SmallText>
        </Column>
      </Row>
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
    </Container>
  );
};

export default Artykuly;
