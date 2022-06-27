import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import AddButton from "../../src/logos/add.svg";

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

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1.5em;
`;

const Image = styled.img`
  width: 2em;
  height: 2em;
`;

const AdressPanel = (props) => {
  return (
    <Column>
      <Text>
        Następujące adresy zostaną domyślne użyte <b>na stronie zamówienia.</b>{" "}
      </Text>
      <Divider />
      <Text>
        <b>Adres rozliczeniowy</b>
      </Text>
      <Row>
        <Image src={AddButton} onClick={() => props.setCurrentSub(2)} />
        <Text style={{ marginLeft: "1em", marginTop: "0" }}>
          <Link
            to={{}}
            style={{ textDecoration: "none", color: "black" }}
            onClick={() => props.setCurrentSub(2)}
          >
            <b>Dodaj:</b>
          </Link>
        </Text>
      </Row>
      <Text>Nie ustawiłeś jeszcze adresu rozliczeniowego</Text>
      <Text style={{ marginTop: "5em" }}>
        <b>Adres do wysyłki</b>
      </Text>
      <Row>
        <Image src={AddButton} onClick={() => props.setCurrentSub(3)} />
        <Text style={{ marginLeft: "1em", marginTop: "0" }}>
          <Link
            to={{}}
            style={{ textDecoration: "none", color: "black" }}
            onClick={() => props.setCurrentSub(3)}
          >
            <b>Dodaj:</b>
          </Link>
        </Text>
      </Row>
      <Text>Nie ustawiłeś jeszcze adresu rozliczeniowego</Text>
    </Column>
  );
};

export default AdressPanel;
