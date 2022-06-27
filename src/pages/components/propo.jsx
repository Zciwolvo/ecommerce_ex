import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Laptop from "../../src/photos/architect.png";

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10em;
  @media (max-width: 720px) {
    max-width: 90vw;
    width: 90vw;
  }
`;

const SmallText = styled.p`
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
    text-align: left;
    width: 90vw;
  }
`;

const Text = styled.h1`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 3.5em;
  line-height: 64px;
  letter-spacing: 0.01em;
  @media (max-width: 720px) {
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0.01em;
    text-align: left;
  }
`;

const UnderlineText = styled.input`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5em;
  line-height: 29px;
  letter-spacing: 0.01em;
  text-decoration-line: underline;
  border: none;
  margin-top: 1.5em;
  ::-webkit-input-placeholder {
    color: black;
  }
  @media (max-width: 720px) {
    //styleName: dane kontaktowe ;
    font-family: Helvetica;
    font-size: 16px;
    font-weight: 700;
    line-height: 25px;
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
    border-radius: 10px;
    width: 90vw;
    height: 5em;
  }
`;

const Image = styled.img`
  max-width: 960px;
  width: 50vw;
  height: auto;
  margin: 0.5em;
  @media (max-width: 720px) {
    max-width: 90vw;
    width: 90vw;
    height: 90vw;
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
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

const Propo = () => {
  const [mail, setMail] = useState("");
  const [firma, setFirma] = useState("");

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
        <Column style={{ marginLeft: "119px" }}>
          <Text>Jesteś architektem?</Text>
          <SmallText>
            In a professional context it often happens that private or corporate
            clients corder a publication to be made and presented.
          </SmallText>
          <UnderlineText
            onChange={(e) => setMail(e.target.value)}
            placeholder="Wpisz swój adres email"
            value={mail}
          ></UnderlineText>
          <UnderlineText
            style={{ marginBottom: "3em" }}
            onChange={(e) => setFirma(e.target.value)}
            placeholder="Nazwa twojej firmy"
            value={firma}
          ></UnderlineText>
          <Button>
            <ButtonText>Wyślij Kontakt</ButtonText>
          </Button>
        </Column>
        <Column />
      </Row>
    </Container>
  ) : (
    <Container>
      <Row>
        <Text style={{ alignSelf: "center" }}>Jesteś architektem?</Text>
        <Image src={Laptop} />
        <Column>
          <SmallText style={{ marginBottom: "0em" }}>
            In a professional context it often happens that private or corporate
            clients corder a publication to be made and presented.
          </SmallText>
          <UnderlineText
            onChange={(e) => setMail(e.target.value)}
            placeholder="Wpisz swój adres email"
            value={mail}
          ></UnderlineText>
          <UnderlineText
            style={{ marginBottom: "2em" }}
            onChange={(e) => setFirma(e.target.value)}
            placeholder="Nazwa twojej firmy"
            value={firma}
          ></UnderlineText>
          <Button>
            <ButtonText style={{ margin: "8% 10% 10% 10%" }}>
              WYŚLIJ KONTAKT
            </ButtonText>
          </Button>
        </Column>
        <Column />
      </Row>
    </Container>
  );
};

export default Propo;
