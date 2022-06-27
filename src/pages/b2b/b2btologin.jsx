import React from "react";
import styled from "styled-components";

import Photo1 from "../../src/photos/homepage/handsclose.png";

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
  grid-template-rows: 2fr 1fr;
  align-items: center;
  @media (max-width: 720px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: 720px) {
    flex-direction: column;
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
`;

const SmallText = styled.p`
  width: 20em;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 27px;
  letter-spacing: 0.01em;
  grid-row-start: 1;
  margin-top: 7em;
  @media (max-width: 720px) {
    width: 90vw;
    margin: 2em auto;
    //styleName: tekst;
    font-family: Helvetica;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.01em;
    text-align: left;
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
  @media (max-width: 720px) {
    margin-top: 5%;
  }
`;

const Button = styled.button`
  width: 20em;
  height: 6em;
  background-color: #1c1c1c;
  box-sizing: border-box;
  border-radius: 5px;
  text-align: center;
  grid-row-start: 4;
  @media (max-width: 720px) {
    width: 90vw;
    height: 4em;
    border-radius: 10px;
  }
`;

const Image = styled.img`
  max-width: 768px;
  width: 40vw;
  height: auto;
  margin: 0.5em;
  @media (max-width: 1550px) {
    width: 15em;
    height: 35em;
  }
  @media (max-width: 720px) {
    width: 90vw;
    height: auto;
    margin: 0 auto;
  }
`;

const B2Btologin = (props) => {
  return (
    <Container>
      <Row>
        <Row style={{ width: "auto" }}>
          <Image src={Photo1} />
        </Row>
        <Column style={{ marginRight: "5em" }}>
          <Grid>
            <SmallText>
              In a professional context it often happens that private or
              corporate clients corder
              <br /> a publication to be made and presented.
            </SmallText>
            <Button onClick={() => props.setOpen(true)}>
              <ButtonText>Zaloguj się</ButtonText>
            </Button>
          </Grid>
        </Column>
      </Row>
    </Container>
  );
};

export default B2Btologin;
