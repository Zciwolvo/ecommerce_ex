import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Column, Divider, Text, Title, TitleColumn } from "./styles";

const MainPanel = (props) => {
  return (
    <Column>
      <TitleColumn>
        <Title>
          Witaj <b>TestowyuserDC</b> (nie jesteś TestowyuserDC?){" "}
          <b>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Wyloguj się
            </Link>
          </b>
        </Title>
        <Divider />
      </TitleColumn>
      <Text>Przejdź do ustawień:</Text>
      <Text>
        <Link
          onClick={() => props.setCurrentSub(0)}
          to={{}}
          style={{ textDecoration: "none", color: "black" }}
        >
          <b>Ostatnie zamówienia</b>
        </Link>
      </Text>
      <Text>
        <Link
          onClick={() => props.setCurrentSub(1)}
          to={{}}
          style={{ textDecoration: "none", color: "black" }}
        >
          {" "}
          <b>Adresy płatności i dostawy</b>
        </Link>
      </Text>
      <Text>
        <Link
          onClick={() => props.setCurrentSub(4)}
          to={{}}
          style={{ textDecoration: "none", color: "black" }}
        >
          <b>Zmień hasło</b>
        </Link>
      </Text>
      <Divider />
    </Column>
  );
};

export default MainPanel;
