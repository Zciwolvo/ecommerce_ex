import React from "react";
import styled from "styled-components";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 568px;
  height: 542px;
  cursor: pointer;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SquarePhoto = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.props.product});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (max-width: 1550px) {
    width: 25em;
    height: 25em;
  }
`;

const SmallText = styled.p`
  height: 1em;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  letter-spacing: 0.03em;
`;

const ShopProduct = (props) => {
  return (
    <Column>
      <SquarePhoto props={{ product: props.product }}>
        <SmallText style={{ margin: "1.5em" }}>NAZWA MARKI</SmallText>
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

export default ShopProduct;
