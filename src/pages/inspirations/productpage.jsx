import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Image from "../../src/photos/homepage/brutus.png";
import Image2 from "../../src/photos/brutus2.png";
import Heart from "../../src/logos/wishlist.svg";
import Arrow from "../../src/logos/arrowwhite.svg";
import MainDesc from "./maindesc";
import SideDesc from "./sidedesc";

const Column = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 720px) {
    width: 90vw;
    margin: 0 auto;
  }
`;

const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 720px) {
    width: 90vw;
    margin: auto;
  }
`;

const Product = styled.img`
  width: 42.75em;
  height: 35em;
  margin: 2em;
`;

const HeadLine = styled.h1`
  font-family: Helvetica;
  font-size: 25px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0.01em;
  text-align: left;
`;

const HeadLine2 = styled.h2`
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0.01em;
  text-align: left;
`;

const Text = styled.p`
  font-family: Helvetica;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.03em;
  text-align: left;
`;

const Icon = styled.img`
  width: 2em;
  height: 2em;
  align-self: flex-end;
`;

const ArrowIcon = styled.img`
  width: 2em;
  height: 1em;
  margin-left: 15%;
`;

const Divider = styled.div`
  color: black;
  background-color: black;
  height: 1px;
  width: 100%;
  max-width: 1920px;
  margin: 1em;
  margin-left: 0;
  @media (max-width: 720px) {
    width: 100vw;
    margin-left: -5vw;
  }
`;

const Button = styled.button`
  width: 22em;
  height: 6em;
  background: #1c1c1c;
  border-radius: 10px;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2em 2em 4em 0;
  @media (max-width: 720px) {
    width: 90vw;
    height: 4em;
  }
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
  margin: 0;
  margin-left: 20%;
`;

const DisplayImage = styled.div`
  width: 90vw;
  height: 90vw;
  background-image: url(${(props) => props.props.Photo});
  background-size: contain;
  background-position: center;
  margin-top: 3em;
`;

const WariantName = styled.div`
  width: 5em;
  height: 2em;
  background: #f4f4f4;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

const Wariant = (props) => {
  return (
    <WariantName>
      <Text
        style={{
          margin: "0.5em",
          textAlign: "center",
        }}
      >
        {props.props.nazwa}
      </Text>
    </WariantName>
  );
};

const ProductPage = () => {
  const [focus, setFocus] = useState(true);
  const [mobile, setMobile] = useState(true);
  const [count, setCount] = useState(0);

  const Images = [Image, Image2];

  useEffect(() => {
    if (window.innerWidth < 720) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  });

  return mobile ? (
    <>
      <Row style={{ alignItems: "start", justifyContent: "center" }}>
        <Column>
          <Product src={Image} />
          <Product src={Image2} />
        </Column>
        <Column style={{ marginTop: "5em" }}>
          <HeadLine>Nazwa produktu</HeadLine>
          <Text>45$</Text>
          <Icon src={Heart} />
          <Divider />
          <Row
            style={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text>Wariant 1</Text>
            <Wariant props={{ nazwa: "Nazwa" }} />
            <Wariant props={{ nazwa: "Nazwa" }} />
            <Wariant props={{ nazwa: "Nazwa" }} />
          </Row>
          <Text style={{ color: "grey" }}>Wybrany</Text>
          <Divider />
          <Row
            style={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text>Wariant 2</Text>
            <Wariant props={{ nazwa: "Nazwa" }} />
            <Wariant props={{ nazwa: "Nazwa" }} />
            <Wariant props={{ nazwa: "Nazwa" }} />
          </Row>
          <Divider />
          <Button>
            <ButtonText>Dodaj do koszyka</ButtonText>
            <ArrowIcon src={Arrow} />
          </Button>
          <Row>
            {focus ? (
              <>
                <HeadLine2
                  onClick={() => setFocus(!focus)}
                  style={{ marginRight: "2em" }}
                >
                  Opis główny
                </HeadLine2>
                <Text onClick={() => setFocus(!focus)}>Opis dodatkowy</Text>
              </>
            ) : (
              <>
                <Text
                  onClick={() => setFocus(!focus)}
                  style={{ marginRight: "2em" }}
                >
                  Opis główny
                </Text>
                <HeadLine2 onClick={() => setFocus(!focus)}>
                  Opis dodatkowy
                </HeadLine2>
              </>
            )}
          </Row>
          <Divider />
          {focus ? <MainDesc /> : <SideDesc />}
        </Column>
      </Row>
      <Divider />
    </>
  ) : (
    <>
      <Row
        style={{
          alignItems: "start",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <DisplayImage
          onClick={() => {
            if (count < Images.length - 1) setCount(count + 1);
            if (count === Images.length - 1) setCount(0);
          }}
          props={{ Photo: Images[count] }}
        >
          <Column
            style={{
              Display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            <Icon src={Heart} style={{ margin: "1em" }} />
            <Text style={{ margin: "1em" }}>
              {count + 1}/{Images.length}
            </Text>
          </Column>
        </DisplayImage>
        <Column style={{ marginTop: "5em" }}>
          <HeadLine>Nazwa produktu</HeadLine>
          <Text>45$</Text>
          <Icon src={Heart} />
          <Divider />
          <Row
            style={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text>Wariant 1</Text>
            <Wariant props={{ nazwa: "Nazwa" }} />
            <Wariant props={{ nazwa: "Nazwa" }} />
            <Wariant props={{ nazwa: "Nazwa" }} />
          </Row>
          <Text style={{ color: "grey" }}>Wybrany</Text>
          <Divider />
          <Row
            style={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text>Wariant 2</Text>
            <Wariant props={{ nazwa: "Nazwa" }} />
            <Wariant props={{ nazwa: "Nazwa" }} />
            <Wariant props={{ nazwa: "Nazwa" }} />
          </Row>
          <Divider />
          <Button>
            <ButtonText>Dodaj do koszyka</ButtonText>
            <ArrowIcon src={Arrow} />
          </Button>
          <Row>
            {focus ? (
              <>
                <HeadLine2
                  onClick={() => setFocus(!focus)}
                  style={{ marginRight: "2em" }}
                >
                  Opis główny
                </HeadLine2>
                <Text onClick={() => setFocus(!focus)}>Opis dodatkowy</Text>
              </>
            ) : (
              <>
                <Text
                  onClick={() => setFocus(!focus)}
                  style={{ marginRight: "2em" }}
                >
                  Opis główny
                </Text>
                <HeadLine2 onClick={() => setFocus(!focus)}>
                  Opis dodatkowy
                </HeadLine2>
              </>
            )}
          </Row>
          <Divider />
          {focus ? <MainDesc /> : <SideDesc />}
        </Column>
      </Row>
      <Divider />
    </>
  );
};

export default ProductPage;
