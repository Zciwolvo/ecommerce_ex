import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Column, Divider, Text, Row, Image } from "./styles";

import AddButton from "../../src/logos/add.svg";

const DataPanel = (props) => {
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
            <b>Edytuj:</b>
          </Link>
        </Text>
      </Row>
      <Text>Dane Kontaktowe</Text>
      <Text>Dane Kontaktowe</Text>
      <Text>Dane Kontaktowe</Text>
      <Text>Dane Kontaktowe</Text>
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

export default DataPanel;
