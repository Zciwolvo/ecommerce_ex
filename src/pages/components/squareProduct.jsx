import React from "react";
import styled from "styled-components";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2em;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SquarePhoto = styled.div`
  width: 32em;
  height: 32em;
  background-image: url(${(props) => props.props.product});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (max-width: 1600px) {
    width: 30em;
    height: 30em;
  }
  @media (max-width: 720px) {
    width: 21em;
    height: 21em;
  }
`;

const SmallText = styled.p`
  height: 1em;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  letter-spacing: 0.03em;
  @media (max-width: 720px) {
    font-family: Helvetica;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 0.03em;
    text-align: left;
  }
`;

const SquareProduct = (props) => {
  return (
    <Column>
      <SquarePhoto props={{ product: props.product }}>
        <SmallText style={{ margin: "1.5em", position: "absolute" }}>
          NAZWA MARKI
        </SmallText>
      </SquarePhoto>
      <Row>
        <SmallText>PRODUKT</SmallText>
        <SmallText>
          <b>CENA</b>
        </SmallText>
        <SmallText>
          <b>ODKRYJ</b>
        </SmallText>
      </Row>
    </Column>
  );
};

export default SquareProduct;
