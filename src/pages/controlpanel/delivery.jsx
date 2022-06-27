import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Column = styled.div`
  width: 100%;
  max-width: 40em;
  display: flex;
  flex-direction: column;
  margin-left: 10em;
  @media (max-width: 720px) {
    margin-left: 1em;
  }
`;

const Divider = styled.div`
  color: black;
  background-color: black;
  height: 1px;
  width: 100%;
  max-width: 1920px;
  margin-bottom: 1em;
`;

const Text = styled.a`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0.01em;
  text-align: left;
  color: black;
  margin-top: 1.5em;
`;

const InputBar = styled.input`
  width: 70%;
  height: 2em;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 1.5em;
  margin: 1em 1em 1em 0em;
`;

const LoginButton = styled.button`
  width: 40%;
  height: 5em;
  background: #1c1c1c;
  border-radius: 10px;
  margin-top: 1em;
`;

const ButtonText = styled.p`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #f4f4f4;
`;

const DeliveryPanel = (props) => {
  const [name, setName] = useState("");
  const [firm, setFirm] = useState("");
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [adress, setAdress] = useState("");
  const [postal, setPostal] = useState("");
  const [city, setCity] = useState("");
  return (
    <Column>
      <Text>Adres do wysyłki</Text>
      <Divider />
      <InputBar
        placeholder="Imię i Nazwisko*"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputBar
        placeholder="Nazwa firmy"
        value={firm}
        onChange={(e) => setFirm(e.target.value)}
      />
      <InputBar
        placeholder="Kraj/Region*"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <InputBar
        placeholder="Ulica* (Nazwa,numer budynku/lokalu)"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
      />
      <InputBar
        placeholder="Ciąg dalszy adresu"
        value={adress}
        onChange={(e) => setAdress(e.target.value)}
      />
      <InputBar
        placeholder="Kod pocztowy*"
        value={postal}
        onChange={(e) => setPostal(e.target.value)}
      />
      <InputBar
        placeholder="Miasto*"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <LoginButton>
        <ButtonText>Zapisz adres</ButtonText>
      </LoginButton>
    </Column>
  );
};

export default DeliveryPanel;
