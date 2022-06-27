import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const BigText = styled.h1`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 1em;
  letter-spacing: 0.01em;
  padding: 2em 1.5em 0em 1.5em;
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
  color: black;
  @media (max-width: 1550px) {
    padding: 0em 1.5em 0em 1.5em;
  }
  @media (max-width: 720px) {
    //styleName: tekst;
    font-family: Helvetica;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.01em;
    text-align: left;
  }
`;

const SmallText = styled.p`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  letter-spacing: 0.01em;
  padding: 2em 1.5em 0em 1.5em;
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
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 2em;
  margin-left: 1.5em;
  @media (max-width: 1550px) {
    height: 50%;
    width: 80%;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const GoogleLoginButton = styled.button`
  width: 30em;
  height: 6em;
  background: #ffffff;
  border: 1px solid black;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

const LoginButton = styled.button`
  width: 90%;
  height: 6em;
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

const InputBar = styled.input`
  width: 100%;
  height: 4em;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 1.5em;
  margin-bottom: 1em;
  @media (max-width: 720px) {
    padding: 1em;
    height: 3em;
  }
`;

const CheckBox = styled.input`
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 4px;
`;

const Logo = styled.img`
  width: 2em;
  height: 2em;
`;

const RegisterB2B = (props) => {
  const [firma, setFirma] = useState("");
  const [NIP, setNIP] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [www, setwww] = useState("");
  const [mail, setMail] = useState("");
  const [remember, setRemember] = useState(false);

  return props.mobile ? (
    <>
      <LoginContainer>
        <Row>
          <BigText>Rejestracja B2B</BigText>
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
        <Column style={{ marginBottom: "0", width: "60%" }}>
          <InputBar
            placeholder="Nazwa firmy*"
            onChange={(e) => setFirma(e.target.value)}
            value={firma}
          ></InputBar>
          <InputBar
            placeholder="NIP*"
            onChange={(e) => setNIP(e.target.value)}
            value={NIP}
          ></InputBar>
          <InputBar
            placeholder="Instagram"
            onChange={(e) => setInstagram(e.target.value)}
            value={instagram}
          ></InputBar>
          <InputBar
            placeholder="Facebook"
            onChange={(e) => setFacebook(e.target.value)}
            value={facebook}
          ></InputBar>
          <InputBar
            placeholder="Strona www"
            onChange={(e) => setwww(e.target.value)}
            value={www}
          ></InputBar>
          <InputBar
            placeholder="Adres e-mail*"
            onChange={(e) => setMail(e.target.value)}
            value={mail}
          ></InputBar>
        </Column>
        <Row style={{ marginLeft: "2em", marginTop: "1em" }}>
          <Row style={{ justifyContent: "flex-start" }}>
            <CheckBox
              type={"checkbox"}
              onChange={() => setRemember(!remember)}
            />
            <SmallText style={{ padding: "0 0 0 1em" }}>
              Zapisz się na newsletter
            </SmallText>
          </Row>
        </Row>
        <Divider />
        <Column
          style={{
            width: "100%",
            height: "3em",
            alignItems: "center",
            marginLeft: "0",
          }}
        >
          <LoginButton>
            <ButtonText>Weryfikuj</ButtonText>
          </LoginButton>
          <Row style={{ justifyContent: "center", marginTop: "2em" }}>
            <Text style={{ margin: "0", padding: "0" }}>
              Masz już konto?{" "}
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/"
                onClick={() => props.setSideBar(3)}
              >
                <b>Zaloguj się</b>
              </Link>
            </Text>
          </Row>
        </Column>
      </LoginContainer>
    </>
  ) : (
    <>
      <LoginContainer>
        <Row>
          <BigText>Rejestracja B2B</BigText>
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
        <Column style={{ marginBottom: "0", height: "auto" }}>
          <InputBar
            placeholder="Nazwa firmy*"
            onChange={(e) => setFirma(e.target.value)}
            value={firma}
          ></InputBar>
          <InputBar
            placeholder="NIP*"
            onChange={(e) => setNIP(e.target.value)}
            value={NIP}
          ></InputBar>
          <InputBar
            placeholder="Instagram"
            onChange={(e) => setInstagram(e.target.value)}
            value={instagram}
          ></InputBar>
          <InputBar
            placeholder="Facebook"
            onChange={(e) => setFacebook(e.target.value)}
            value={facebook}
          ></InputBar>
          <InputBar
            placeholder="Strona www"
            onChange={(e) => setwww(e.target.value)}
            value={www}
          ></InputBar>
          <InputBar
            placeholder="Adres e-mail*"
            onChange={(e) => setMail(e.target.value)}
            value={mail}
          ></InputBar>
        </Column>
        <Row style={{ marginLeft: "2em" }}>
          <Row style={{ justifyContent: "flex-start" }}>
            <CheckBox
              type={"checkbox"}
              onChange={() => setRemember(!remember)}
            />
            <SmallText style={{ padding: "0 0 0 1em" }}>
              Zapisz się na newsletter
            </SmallText>
          </Row>
        </Row>
        <Divider />
        <Column
          style={{
            width: "100%",
            height: "3em",
            alignItems: "center",
            marginLeft: "0",
          }}
        >
          <LoginButton>
            <ButtonText>Weryfikuj</ButtonText>
          </LoginButton>
          <Row style={{ justifyContent: "center", marginTop: "1em" }}>
            <Text style={{ margin: "0", padding: "0" }}>
              Masz już konto?{" "}
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/"
                onClick={() => props.setSideBar(3)}
              >
                <b>Zaloguj się</b>
              </Link>
            </Text>
          </Row>
        </Column>
      </LoginContainer>
    </>
  );
};

export default RegisterB2B;
