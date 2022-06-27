import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BagItem from "../components/cartsummaryitem";

import Decor2 from "../../src/photos/dekoracja2.png";
import Decor3 from "../../src/photos/dekoracja3.png";

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto 0 auto;
  display: flex;
  flex-direction: column;
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

const BagItemContainer = styled.div`
  height: auto;
  overflow-y: scroll;
`;

const Wishlist = (props) => {
  return (
    <LoginContainer>
      <Row>
        <BigText>Lista Zakupowa</BigText>
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
      <BagItemContainer>
        <BagItem />
      </BagItemContainer>
      <Divider />
      <Column style={{ width: "100%", marginLeft: "0", justifyContent: "end" }}>
        <Row style={{ marginTop: "10%" }}>
          <Text style={{ margin: "1em", paddingTop: "0" }}>
            <b>Podsumowanie</b>
          </Text>
          <Text style={{ paddingTop: "0" }}>45$</Text>
        </Row>
        <Column
          style={{ width: "100%", height: "3em", margin: "0 auto 1em auto" }}
        >
          <LoginButton>
            <ButtonText>Zaloguj się i zachowaj swoją listę</ButtonText>
          </LoginButton>
        </Column>
        <Row style={{ justifyContent: "center" }}>
          <Text style={{ margin: "1em 0 0 0", padding: "0" }}>
            <Link style={{ textDecoration: "none", color: "black" }} to={{}}>
              <b>Przejdź do koszyka</b>
            </Link>
          </Text>
        </Row>
      </Column>
    </LoginContainer>
  );
};

export default Wishlist;
