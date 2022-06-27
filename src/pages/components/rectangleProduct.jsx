import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Column = styled.div`
  width: 68em;
  display: flex;
  flex-direction: column;
  margin: 2em;
  @media (max-width: 1550px) {
    width: 50em;
  }
  @media (max-width: 720px) {
    width: 100%;
    margin: 0;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const RectanglePhoto = styled.div`
  width: 68em;
  height: 32em;
  background-image: url(${(props) => props.props.product});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (max-width: 1600px) {
    width: 60em;
    height: 30em;
  }
  @media (max-width: 720px) {
    width: 100%;
    height: 11em;
    background-size: contain;
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
    margin-top: 0;
    font-family: Helvetica;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0.03em;
    text-align: left;
  }
`;

const RectangleProduct = (props) => {
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 720) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }, []);

  return (
    <Column>
      <RectanglePhoto props={{ product: props.product }}>
        {mobile ? (
          <SmallText style={{ margin: "1.5em", position: "absolute" }}>
            NAZWA MARKI
          </SmallText>
        ) : (
          <SmallText
            style={{ margin: "1.5em 1.5em 1.5em 1em", position: "absolute" }}
          >
            NAZWA MARKI
          </SmallText>
        )}
      </RectanglePhoto>
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

export default RectangleProduct;
