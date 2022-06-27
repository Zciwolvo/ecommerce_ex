import React from "react";
import styled from "styled-components";

import Item from "../../src/photos/dekoracja1.png";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 13em;
  width: 100%;
  margin-left: 2em;
  @media (max-width: 720px) {
    height: 10em;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 2em 0 2em 0;
`;

const Row2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 2em 0 2em 0;
  align-items: start;
  justify-content: flex-start;
  margin: 2em;
  height: 13em;
  @media (max-width: 720px) {
    max-height: 10em;
  }
`;

const Image = styled.img`
  width: 13em;
  height: 13em;
  @media (max-width: 720px) {
    width: 10em;
    height: 10em;
  }
`;

const SmallText = styled.p`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  letter-spacing: 0.01em;
`;

const Divider = styled.div`
  color: black;
  background-color: black;
  height: 1px;
  width: 95%;
  max-width: 1920px;
  margin: 0 auto;
`;

const VariantButton = styled.button`
  width: 15em;
  height: 3em;
  border-radius: 20px;
  background-color: white;
  border: 1px solid black;
`;

const BagItem = (props) => {
  return (
    <>
      <Row2>
        <Image src={Item} />
        <Column style={{ justifyContent: "space-between" }}>
          <Row
            style={{
              margin: "0",
              marginBottom: "0",
              justifyContent: "space-between",
            }}
          >
            <SmallText style={{ margin: "0" }}>
              <b>Nazwa nr 1</b>
            </SmallText>
            <SmallText style={{ margin: "0" }}>45$</SmallText>
          </Row>
          <SmallText>Wariant 1</SmallText>
          <SmallText>Wariant 2</SmallText>
          <SmallText style={{ alignSelf: "end", margin: "0 0 0 0" }}>
            X
          </SmallText>
        </Column>
      </Row2>
      <Divider />
    </>
  );
};

export default BagItem;
