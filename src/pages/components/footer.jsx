import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 75%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5em;
  @media (max-width: 720px) {
    width: 100%;
  }
`;

const Text = styled.p`
  max-width: 15em;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  line-height: 1.5em;
  letter-spacing: 0.01em;
  color: black;

  @media (max-width: 720px) {
    //styleName: warianty, fitry 12pkt;
    font-family: Helvetica;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0.03em;
    text-align: left;
  }
`;

const BoldText = styled.p`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 1em;
  line-height: 29px;
  letter-spacing: 0.01em;
  color: black;
  @media (max-width: 720px) {
    //styleName: stopka;
    font-family: Helvetica;
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 0.03em;
    text-align: left;
  }
`;

const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 720px) {
    align-items: flex-start;
    justify-content: start;
    max-width: 90vw;
    width: 90vw;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const Grid = styled.div`
  width: 100%;
  max-width: 18em;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr;
  justify-content: space-evenly;
  @media (max-width: 720px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Grid2 = styled.div`
  width: 100%;
  max-width: 18em;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr;
  justify-content: space-evenly;
  @media (max-width: 720px) {
    width: 0;
    height: 0;
    visibility: hidden;
  }
`;

const Divider = styled.div`
  color: black;
  background-color: black;
  height: 1px;
  width: 100vw;
  max-width: 1920px;
  margin: 0 auto;
`;

const Footer = () => {
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 720) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }, []);
  return mobile ? (
    <Container>
      <Row style={{ justifyContent: "center" }}>
        <Grid2>
          <BoldText>O NAS</BoldText>
          <Text>
            BronsonHome to e-showroom Jack Bronson, do którego masz dostęp w
            dowolnym miejscu. Baza inspiracji i magazyn składników do stworzenia
            nowych niepowtarzalnych projektów. Wyselekcjonowane marki,
            wyselekcjonowane produkty – design, który Cię zachwyci i odmieni
            każde wnętrze.
          </Text>
          <Row>
            <Text>Facebook</Text>
            <Text>Instagram</Text>
            <Text>Pinterest</Text>
          </Row>
        </Grid2>
        <Grid>
          <BoldText>MENU</BoldText>
          <Text>Wszystko</Text>
          <Text>Meble</Text>
          <Text>Oświetlenia</Text>
          <Text>Dekoracje</Text>
          <Text>Siedziska</Text>
          <Text>Inspiracje</Text>
          <Text>BLOG</Text>
        </Grid>
        <Grid>
          <BoldText>INFORMACJE</BoldText>
          <Text>Regulamin</Text>
          <Text>Dostawy</Text>
          <Text>Zwroty</Text>
          <Text>Centrum pomocy</Text>
        </Grid>
        <Grid>
          <BoldText>PANEL KLIENTA</BoldText>
          <Text>Moje konto</Text>
          <Text>Śledzenie zamówień</Text>
          <Text>Polityka prywatności</Text>
        </Grid>
        <Grid style={{ gridRowStart: "2" }}>
          <BoldText>DANE FIRMOWE</BoldText>
          <Text>
            JACK BRONSON sp. z o.o. <br />
            KRS 0000835668
            <br />
            NIP 8952216846
            <br />
            REGON 385852390
            <br />
            SIEDZIBA Kleczkowska 30-32/2, <br />
            50-227 Wrocław,
            <br />
            Polska
          </Text>
        </Grid>
      </Row>
      <Text style={{ alignSelf: "end", maxWidth: "30em" }}>
        2022 - BronsonHome. All Rights Reserved.
      </Text>
    </Container>
  ) : (
    <Container>
      <Row style={{ width: "90vw", textAlign: "left" }}>
        <Column>
          <BoldText>MENU</BoldText>
          <Text>Wszystko</Text>
          <Text>Meble</Text>
          <Text>Oświetlenia</Text>
          <Text>Dekoracje</Text>
          <Text>Siedziska</Text>
          <Text>Inspiracje</Text>
          <Text>BLOG</Text>
        </Column>
        <Column>
          <BoldText>INFORMACJE</BoldText>
          <Text>Regulamin</Text>
          <Text>Dostawy</Text>
          <Text>Zwroty</Text>
          <Text>Centrum pomocy</Text>
        </Column>
        <Column>
          <BoldText>PANEL KLIENTA</BoldText>
          <Text>Moje konto</Text>
          <Text>Śledzenie zamówień</Text>
          <Text>Polityka prywatności</Text>
        </Column>
      </Row>
      <Column>
        <BoldText>DANE FIRMOWE</BoldText>
        <Text>
          <b>JACK BRONSON sp. z o.o.</b> <br />
          <b>KRS</b> 0000835668
          <br />
          <b>NIP</b> 8952216846
          <br />
          <b>REGON</b> 385852390
          <br />
          <b>SIEDZIBA</b> Kleczkowska 30-32/2, 50-227 Wrocław,
          <br />
          Polska
        </Text>
      </Column>
      <Divider />
      <Text style={{ alignSelf: "center", maxWidth: "30em" }}>
        2022 - BronsonHome. All Rights Reserved.
      </Text>
    </Container>
  );
};

export default Footer;
