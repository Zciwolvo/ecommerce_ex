import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import bannerHome from "../../src/photos/homepage/bannerHome.jpg";
import bannerMobile from "../../src/photos/homepage/bannerMobile.jpg";

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  margin-bottom: 5em;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
`;

const Photo = styled.div`
  width: 100%;
  height: 70em;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${bannerHome});
  display: flex;
  flex-direction: column;
  @media (max-width: 720px) {
    height: 35.5em;
    width: 100vw;
    background-image: url(${bannerMobile});
  }
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 0.5fr 5fr;
  grid-template-rows: 1fr 2fr 2fr;
  align-items: center;
  justify-content: center;
  @media (max-width: 720px) {
    grid-template-columns: auto;
    grid-template-rows: 1fr 2fr 2fr;
  }
`;

const PhotoText = styled.h1`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 6em;
  letter-spacing: 0.03em;
  color: white;
  grid-column-start: 2;
  grid-row-start: 2;
  @media (max-width: 720px) {
    font-size: 2.8em;
  }
`;

const DiscoverButton = styled.div`
  width: 16em;
  height: 4em;
  border: 1px solid #f4f4f4;
  box-sizing: border-box;
  border-radius: 5px;
  text-align: center;
  grid-column: span 2;
  grid-row-start: 3;
  cursor: pointer;
`;

const ButtonText = styled.p`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 1em;
  line-height: 1em;
  letter-spacing: 0.05em;
  color: #f4f4f4;
  margin: 10%;
`;

const Row = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Banner = () => {
  let navigate = useNavigate();
  return (
    <Container>
      <Photo>
        <Grid>
          <PhotoText>
            E-Showroom <br /> klasy Premium
          </PhotoText>
        </Grid>
        <Row>
          <DiscoverButton onClick={() => navigate("/e-showroom")}>
            <ButtonText>ODKRYJ</ButtonText>
          </DiscoverButton>
        </Row>
      </Photo>
    </Container>
  );
};

export default Banner;
