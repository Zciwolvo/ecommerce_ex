import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Women from "../../src/photos/women.png";

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 5em;
  background: #1c1c1c;
`;

const Text = styled.p`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 3.5em;
  line-height: 64px;
  letter-spacing: 0.01em;
  color: #f4f4f4;
  align-self: center;
  @media (max-width: 720px) {
    //styleName: Nazwa produktu mobile;
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0.01em;
    text-align: left;
    margin-top: 2em;
  }
`;

const SmallText = styled.p`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 29px;
  letter-spacing: 0.01em;
  color: #f4f4f4;
  @media (max-width: 720px) {
    font-family: Helvetica;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.01em;
    text-align: center;
  }
`;

const SmallestText = styled.p`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  line-height: 21px;
  letter-spacing: 0.01em;
  color: #f4f4f4;
`;

const Image = styled.img`
  width: 380px;
  height: 411px;
`;

const Column = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  margin: 0 10em 0 10em;
  @media (max-width: 1550px) {
    margin: auto;
    width: 90vw;
    align-items: center;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: 1550px) {
    flex-direction: column-reverse;
  }
`;

const Input = styled.input`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5em;
  margin: 1.5em 0 1.5em 0;
  line-height: 29px;
  letter-spacing: 0.02em;
  text-decoration-line: underline;
  color: white;
  background-color: #1c1c1c;
  border: none;
  ::-webkit-input-placeholder {
    color: white;
  }

  @media (max-width: 720px) {
    //styleName: dane kontaktowe ;
    font-family: Helvetica;
    font-size: 16px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0.01em;
    text-align: left;
    margin: 0 0 1em 0;
  }
`;

const Area = styled.textarea`
  width: 22em;
  height: 7em;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5em;
  margin: 1.5em 0 1.5em 0;
  padding: 0.5em;
  line-height: 29px;
  letter-spacing: 0.02em;
  text-decoration-line: underline;
  color: white;
  background-color: #1c1c1c;
  border: 1px solid #f4f4f4;
  box-sizing: border-box;
  ::-webkit-input-placeholder {
    color: white;
  }
  @media (max-width: 1550px) {
    width: 90vw;
  }
`;

const ButtonText = styled.p`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.05em;
  color: #1c1c1c;
  margin: 10%;

  @media (max-width: 720px) {
    margin-top: 8%;
  }
`;

const Button = styled.div`
  width: 16em;
  height: 4em;
  background-color: white;
  box-sizing: border-box;
  border-radius: 5px;
  text-align: center;
  grid-row-start: 4;
  @media (max-width: 720px) {
    width: 90vw;
    border-radius: 10px;
    margin-bottom: 4em;
  }
`;

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

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
      <Column>
        <Text>Kontakt</Text>
        <Row style={{ justifyContent: "space-between" }}>
          <Column style={{ marginLeft: "0" }}>
            <Image src={Women} />
            <SmallestText style={{ alignSelf: "start" }}>
              Imię Nazwisko
            </SmallestText>
          </Column>
          <Column style={{ marginRight: "0", marginLeft: "0" }}>
            <Input
              style={{ alignSelf: "start" }}
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Imię i Nazwisko..."
            ></Input>
            <Input
              style={{ alignSelf: "start" }}
              onChange={(e) => setMail(e.target.value)}
              value={mail}
              placeholder="Adres e-mail..."
            ></Input>
            <Input
              style={{ alignSelf: "start" }}
              onChange={(e) => setNumber(e.target.value)}
              value={number}
              placeholder="Numer telefonu..."
            ></Input>
            <Area
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              placeholder="Treść wiadomości..."
            ></Area>
            <Button style={{ alignSelf: "end" }}>
              <ButtonText>Wyślij</ButtonText>
            </Button>
          </Column>
        </Row>
        <Row style={{ alignItems: "center", justifyContent: "space-between" }}>
          <Column style={{ margin: "0" }}>
            <SmallText style={{ marginBottom: "0" }}>
              ul. Kleczkowska 32, 50-227 Wrocław
            </SmallText>
            <SmallText>
              Pon - pt: 09:00 - 17:00 <br />
              Sb: 09:00 - 13:00
            </SmallText>
          </Column>
          <SmallText style={{ marginTop: "3em" }}>+ 48 694 000 610</SmallText>
          <SmallText style={{ marginTop: "3em" }}>
            biuro@bronsonhome.pl
          </SmallText>
        </Row>
      </Column>
    </Container>
  ) : (
    <Container>
      <Column>
        <Text>Kontakt</Text>
        <Row style={{ justifyContent: "space-between" }}>
          <Column style={{ marginLeft: "0" }}>
            <Image src={Women} />
            <SmallestText style={{ alignSelf: "center" }}>
              Imię Nazwisko
            </SmallestText>
          </Column>
          <Column style={{ marginRight: "0", marginLeft: "0" }}>
            <Input
              style={{ alignSelf: "start" }}
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Imię i Nazwisko..."
            ></Input>
            <Input
              style={{ alignSelf: "start" }}
              onChange={(e) => setMail(e.target.value)}
              value={mail}
              placeholder="Adres e-mail..."
            ></Input>
            <Input
              style={{ alignSelf: "start" }}
              onChange={(e) => setNumber(e.target.value)}
              value={number}
              placeholder="Numer telefonu..."
            ></Input>
            <Area
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              placeholder="Treść wiadomości..."
            ></Area>
            <Button style={{ alignSelf: "center" }}>
              <ButtonText>WYŚLIJ</ButtonText>
            </Button>
          </Column>
        </Row>
        <Column style={{ margin: "0" }}>
          <SmallText style={{ marginBottom: "0" }}>
            ul. Kleczkowska 32, 50-227 Wrocław
          </SmallText>
          <SmallText>
            Pon - pt: 09:00 - 17:00 <br />
            Sb: 09:00 - 13:00
          </SmallText>
        </Column>
        <SmallText style={{ marginTop: "0", marginBottom: "0" }}>
          + 48 694 000 610
        </SmallText>
        <SmallText style={{ marginTop: "0" }}>biuro@bronsonhome.pl</SmallText>
      </Column>
    </Container>
  );
};

export default Contact;
