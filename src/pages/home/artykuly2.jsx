import React, { useState, useEffect } from "react";
import styled from "styled-components";

import photo1 from "../../src/photos/1.png";
import photo2 from "../../src/photos/2.png";
import photo3 from "../../src/photos/3.png";
import photo4 from "../../src/photos/4.png";
import photo5 from "../../src/photos/5.png";

import ArrowRight from "../../src/logos/arrow.svg";
import ArrowLeft from "../../src/logos/arrowback.svg";

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5em;
  @media (max-width: 720px) {
    width: 100vw;
  }
`;

const BigText = styled.h1`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 64px;
  letter-spacing: 0.01em;
  text-align: center;
  @media (max-width: 720px) {
    font-family: Helvetica;
    font-size: 28px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0.01em;
    text-align: center;
    max-width: 90vw;
  }
`;

const SmallText = styled.p`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  line-height: 27px;
  letter-spacing: 0.01em;
  margin: 0;
`;

const BoldText = styled.p`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 1em;
  line-height: 25px;
  letter-spacing: 0.01em;
  margin-bottom: 2em;
`;

const Image = styled.div`
  width: 100%;
  height: 50em;
  margin: 0.1em;
  background-image: url(${(props) => props.props.product});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  @media (max-width: 720px) {
    width: 20em;
    height: 38em;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 5em;
`;

const Arrows = styled.img`
  width: 1.5em;
  height: 1em;
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

const Artykuly2 = () => {
  const [mobile, setMobile] = useState(true);
  const [count, setCount] = useState(0);

  const Images = [photo1, photo2, photo3, photo4];

  useEffect(() => {
    if (window.innerWidth < 720) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }, []);
  return mobile ? (
    <Container>
      <BigText>Najnowsze artykuły</BigText>
      <Row>
        <Image props={{ product: photo1 }}>
          <BoldText>Nazwa 1</BoldText>
        </Image>
        <Image props={{ product: photo2 }}>
          <BoldText>Nazwa 2</BoldText>
        </Image>
        <Image props={{ product: photo3 }}>
          <BoldText>Nazwa 3</BoldText>
        </Image>
        <Image props={{ product: photo4 }}>
          <BoldText>Nazwa 4</BoldText>
        </Image>
        <Image props={{ product: photo5 }}></Image>
      </Row>
      <BigText style={{ width: "18em", marginTop: "0" }}>
        In a professional context it often happens that private or corporate
        clients corder a publication to be made and presented.
      </BigText>
      <SmallText>Jack Bronson</SmallText>
    </Container>
  ) : (
    <Container>
      <BigText>Najnowsze artykuły</BigText>

      <Image props={{ product: Images[count] }} style={{ marginBottom: "2em" }}>
        <BoldText>Nazwa 1</BoldText>
      </Image>
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

      <BigText style={{ width: "18em", marginTop: "0" }}>
        In a professional context it often happens that private or corporate
        clients corder a publication to be made and presented.
      </BigText>
      <SmallText>Jack Bronson</SmallText>
    </Container>
  );
};

export default Artykuly2;
