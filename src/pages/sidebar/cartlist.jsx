import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BagItem from "../components/cartitem";

import Decor2 from "../../src/photos/dekoracja2.png";
import Decor3 from "../../src/photos/dekoracja3.png";

const LoginContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 1550px) {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100vh;
  }
`;

const BigText = styled.h1`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 1em;
  letter-spacing: 0.01em;
  padding: 0em 1.5em 0em 1.5em;
  @media (max-width: 1550px) {
    padding: 0em 1.5em 0em 1.5em;
  }
`;

const Text = styled.p`
  max-width: 25em;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 1.1em;
  letter-spacing: 0.01em;
  padding: 2em 1.5em 0em 1.5em;
  @media (max-width: 1550px) {
    padding: 0em 1.5em 0em 1.5em;
  }
`;

const SmallText = styled.p`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  letter-spacing: 0.01em;
  padding: 0em 1.5em 0em 1.5em;
  @media (max-width: 1550px) {
    padding: 0em 1.5em 0em 1.5em;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Column = styled.div`
  width: 60%;
  height: 20%;
  display: flex;
  flex-direction: column;
  margin: 0.5em 2em 0em 1.5em;

  justify-content: space-between;
  align-items: center;
  @media (max-width: 1550px) {
    height: 10em;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LoginButton = styled.button`
  width: 90%;
  height: 5em;
  background: #1c1c1c;
  border-radius: 10px;
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

const Divider = styled.div`
  color: black;
  background-color: black;
  height: 1px;
  width: 95%;
  max-width: 1920px;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 10em;
  height: 10em;
`;

const ItemsRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 720px) {
    width: 100vw;
    overflow-x: scroll;
    overflow-y: hidden;
  }
`;

const Bag = (props) => {
  return (
    <LoginContainer>
      <Row>
        <BigText>Koszyk po dodaniu produktu</BigText>
        <Link to={{}} style={{ textDecoration: "none", color: "black" }}>
          <SmallText onClick={() => props.setOpen(!props.open)}>
            Zamknij
          </SmallText>
        </Link>
      </Row>
      <Divider />
      <Text style={{ paddingTop: "0" }}>
        In a professional context it often happens that private or corporate
        clients corder a publication to be made and presented.
      </Text>
      <Divider />
      <BagItem />
      <Divider />
      <Text style={{ margin: "0.5em 0 0 0", paddingTop: "0.5em" }}>
        <b>Wybierz dodatek</b>
      </Text>
      <ItemsRow style={{ justifyContent: "start", minHeight: "15em" }}>
        <Column style={{ width: "10em" }}>
          <Image src={Decor2} />
          <Row>
            <SmallText style={{ padding: "0" }}>Nazwa nr 1</SmallText>
            <SmallText style={{ padding: "0" }}>+</SmallText>
          </Row>
        </Column>
        <Column style={{ width: "10em" }}>
          <Image src={Decor3} />
          <Row>
            <SmallText style={{ padding: "0" }}>Nazwa nr 1</SmallText>
            <SmallText style={{ padding: "0" }}>+</SmallText>
          </Row>
        </Column>
      </ItemsRow>
      <Divider />
      <Row>
        <Text style={{ margin: "1em", paddingTop: "0" }}>
          <b>Całkowity koszt</b>
        </Text>
        <Text style={{ paddingTop: "0" }}>45$</Text>
      </Row>
      <Column
        style={{ width: "100%", height: "3em", margin: "0 auto 1em auto" }}
      >
        <LoginButton onClick={() => props.setSideBar(5)}>
          <ButtonText>Dodaj do koszyka</ButtonText>
        </LoginButton>
      </Column>
      <Row style={{ justifyContent: "center" }}>
        <Text style={{ margin: "0", padding: "0" }}>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to={{}}
          >
            <b>Dodaj do listy zakupowej</b>
          </Link>
        </Text>
      </Row>
    </LoginContainer>
  );
};

export default Bag;
