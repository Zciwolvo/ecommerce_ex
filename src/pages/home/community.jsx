import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Photo1 from "../../src/photos/c1.png";
import Photo2 from "../../src/photos/c2.png";
import Photo3 from "../../src/photos/c3.png";

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5em;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr 1fr;
  align-items: center;
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: 720px) {
    width: 100vw;
  }
`;

const Row2 = styled.div`
  width: auto;
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: 720px) {
    width: 100vw;
  }
`;

const Text = styled.h1`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 29px;
  letter-spacing: 0.02em;
  grid-row-start: 1;
  @media (max-width: 720px) {
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0.01em;
    text-align: left;
  }
`;

const SmallText = styled.p`
  width: 20em;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.01em;
  grid-row-start: 2;
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
    margin: 5%;
  }
`;

const Button = styled.button`
  width: 24em;
  height: 6em;
  background-color: #1c1c1c;
  box-sizing: border-box;
  border-radius: 5px;
  text-align: center;
  grid-row-start: 4;
  @media (max-width: 720px) {
    height: 4em;
    border-radius: 10px;
    margin-top: 2em;
  }
`;

const Image = styled.img`
  width: 25em;
  height: 45em;
  margin: 0.5em;
  object-fit: cover;
  @media (max-width: 1550px) {
    width: 15em;
    height: 35em;
  }
  @media (max-width: 720px) {
    height: 20em;
    margin: 0.1em;
  }
`;

const Community = () => {
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
      <Row>
        <Row2>
          <Image style={{ width: "10em" }} src={Photo3} />
          <Image src={Photo2} />
          <Image src={Photo1} />
        </Row2>
        <Column style={{ marginRight: "10em" }}>
          <Grid>
            <Text>Join our global community</Text>
            <SmallText>
              In a professional context it often happens that private or
              corporate clients corder
              <br /> a publication to be made and presented.
            </SmallText>
            <Button>
              <ButtonText>Instagram</ButtonText>
            </Button>
          </Grid>
        </Column>
      </Row>
    </Container>
  ) : (
    <Container>
      <Text>
        <b>Join our global community</b>
      </Text>
      <Row>
        <Row2>
          <Image style={{ width: "20%" }} src={Photo3} />
          <Image style={{ width: "40%" }} src={Photo2} />
          <Image style={{ width: "40%" }} src={Photo1} />
        </Row2>
      </Row>
      <Button>
        <ButtonText>INSTAGRAM</ButtonText>
      </Button>
    </Container>
  );
};

export default Community;
