import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import photoBig from "../../src/photos/blogPromo1.jpg";
import photoSmall from "../../src/photos/blogPromo2.jpg";

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: center;
  margin-bottom: 5em;
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const BigText = styled.p`
  max-width: 18em;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 29px;
  letter-spacing: 0.02em;
  text-align: center;
  @media (max-width: 720px) {
    max-width: 90vw;
    font-family: Helvetica;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.01em;
    text-align: left;
    margin-bottom: 0;
  }
`;

const SmallText = styled.p`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  letter-spacing: 0.03em;
  color: black;
  @media (max-width: 720px) {
    font-family: Helvetica;
    font-size: 14px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0.01em;
    text-align: left;
    align-self: flex-start;
    margin-bottom: 3em;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Photo1 = styled.img`
  width: 48em;
  height: 56em;
  display: grid;
  grid-row: span 2;
  @media (max-width: 720px) {
    width: 100%;
    height: auto;
  }
`;

const Photo2 = styled.img`
  width: 29.5em;
  height: 25em;
  display: grid;
  grid-row: span 2;
  @media (max-width: 720px) {
    width: 0;
    height: 0;
  }
`;

const BlogPromo = () => {
  return (
    <Container>
      <Column>
        <Photo1 src={photoBig} />
      </Column>
      <Column>
        <Photo2 src={photoSmall} />
        <BigText>
          In a professional context it often happens that private or corporate
          clients corder a publication to be made and presented.
        </BigText>
        <SmallText>
          <Link
            style={{
              textDecoration: "none",
              height: "0",
              width: "0",
              color: "black",
            }}
            to="/"
          >
            POCZYTAJ
          </Link>
        </SmallText>
      </Column>
    </Container>
  );
};

export default BlogPromo;
