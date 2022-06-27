import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Laptop from "../../src/photos/laptop.png";

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5em;
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
    margin-top: 8%;
  }
`;

const SmallText = styled.p`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5em;
  line-height: 29px;
  letter-spacing: 0.02em;
`;

const Text = styled.input`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 64px;
  letter-spacing: 0.01em;
  text-decoration-line: underline;
  border: none;
  margin: 1em 0 2em 0;
  @media (max-width: 720px) {
    width: 100vw;
    height: auto;
    font-family: Helvetica;
    font-size: 16px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0.01em;
    text-align: left;
  }

  ::-webkit-input-placeholder {
    color: black;
  }
`;

const Button = styled.button`
  width: 20em;
  height: 5em;
  background-color: #1c1c1c;
  box-sizing: border-box;
  border-radius: 5px;
  text-align: center;
  grid-row-start: 4;
  @media (max-width: 720px) {
    border-radius: 10px;
    width: 90vw;
  }
`;

const Image = styled.img`
  width: 30em;
  height: 40em;
  margin: 0.5em;
  @media (max-width: 720px) {
    width: 100%;
    height: auto;
    margin: 0;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width: 720px) {
    flex-direction: column;
    width: 90vw;
  }
`;

const Newsletter = () => {
  const [mail, setMail] = useState("");

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
        <Image src={Laptop} />
        <Column>
          <SmallText>Join our mailing list</SmallText>
          <Text
            onChange={(e) => setMail(e.target.value)}
            placeholder="Write your email"
            value={mail}
          ></Text>
          <Button>
            <ButtonText>Newsletter</ButtonText>
          </Button>
        </Column>
      </Row>
    </Container>
  ) : (
    <Container>
      <Row>
        <SmallText>Join our mailing list</SmallText>
        <Image src={Laptop} />
        <Column>
          <Text
            onChange={(e) => setMail(e.target.value)}
            placeholder="Write your email"
            value={mail}
          ></Text>
          <Button>
            <ButtonText>NEWSLETTER</ButtonText>
          </Button>
        </Column>
      </Row>
    </Container>
  );
};

export default Newsletter;
