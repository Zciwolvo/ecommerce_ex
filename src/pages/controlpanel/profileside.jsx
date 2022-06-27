import React from "react";
import styled from "styled-components";

import KokpitLogo from "../../src/logos/kokpit.svg";
import OredersLogo from "../../src/logos/zamowienia.svg";
import FilesLogo from "../../src/logos/pliki.svg";
import AdressLogo from "../../src/logos/adresy.svg";
import DetailsLogo from "../../src/logos/szczegoly.svg";
import LogoffLogo from "../../src/logos/wyloguj.svg";
import { Link } from "react-router-dom";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1em;
`;

const Column = styled.div`
  width: 15vw;
  display: flex;
  flex-direction: column;
  margin-left: 20em;
  @media (max-width: 720px) {
    margin-left: 0;
    width: 100vw;
    margin-top: 1em;
  }
`;

const Divider = styled.div`
  color: black;
  background-color: black;
  height: 1px;
  width: 100%;
  max-width: 1920px;
`;

const Logo = styled.img`
  width: 2em;
  height: 2em;
`;

const Text = styled.a`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0.01em;
  text-align: left;
  color: black;
  margin-left: 1em;
`;

const ProfileSide = (props) => {
  return (
    <Column>
      <Row>
        <Logo src={KokpitLogo} />
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={{}}
          onClick={() => props.setCurrentSub(0)}
        >
          <Text>Kokpit</Text>
        </Link>
      </Row>
      <Divider />
      <Row>
        <Logo src={OredersLogo} />
        <Link style={{ textDecoration: "none", color: "black" }} to={{}}>
          <Text>Zamówienia</Text>
        </Link>
      </Row>
      <Divider />
      <Row>
        <Logo src={FilesLogo} />
        <Link style={{ textDecoration: "none", color: "black" }} to={{}}>
          <Text>Pliki do pobrania</Text>
        </Link>
      </Row>
      <Divider />
      <Row>
        <Logo src={AdressLogo} />
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={{}}
          onClick={() => props.setCurrentSub(1)}
        >
          <Text>Adresy</Text>
        </Link>
      </Row>
      <Divider />
      <Row>
        <Logo src={DetailsLogo} />
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={{}}
          onClick={() => props.setCurrentSub(4)}
        >
          <Text>Szczegóły konta</Text>
        </Link>
      </Row>
      <Divider />
      <Row>
        <Logo src={LogoffLogo} />
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          <Text>Wyloguj</Text>
        </Link>
      </Row>
      <Divider />
    </Column>
  );
};

export default ProfileSide;
