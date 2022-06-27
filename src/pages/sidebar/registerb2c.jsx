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
  height: 40%;
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

const RegisterB2C = (props) => {
  const [nazwa, setNazwa] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [mail, setMail] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setshowPassword] = useState(false);
  const [showConfirm, setshowConfirm] = useState(false);

  return props.mobile ? (
    <>
      <LoginContainer>
        <Row>
          <BigText>Rejestracja</BigText>
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
            placeholder="Nazwa użytkownika*"
            onChange={(e) => setNazwa(e.target.value)}
            value={nazwa}
          ></InputBar>
          <InputBar
            placeholder="Email*"
            onChange={(e) => setMail(e.target.value)}
            value={mail}
          ></InputBar>
          <InputBar
            placeholder="Haslo*"
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
          ></InputBar>
          <InputBar
            placeholder="Powtórz haslo*"
            onChange={(e) => setConfirm(e.target.value)}
            type={showConfirm ? "text" : "password"}
          ></InputBar>

          <Column
            style={{
              width: "100%",
              height: "3em",
              position: "absolute",
              bottom: "10%",
              left: "0%",
            }}
          >
            <Row>
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
            <LoginButton>
              <ButtonText>Zarejestruj się</ButtonText>
            </LoginButton>
            <Row style={{ justifyContent: "center", marginTop: "1em" }}>
              <Text style={{ margin: "0", padding: "0" }}>
                Masz już konto?{" "}
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "black" }}
                  onClick={() => props.setSideBar(0)}
                >
                  <b>Zaloguj się</b>
                </Link>
              </Text>
            </Row>
          </Column>
        </Column>
      </LoginContainer>
    </>
  ) : (
    <>
      <LoginContainer>
        <Row>
          <BigText>Rejestracja</BigText>
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
        <Column style={{ marginBottom: "0" }}>
          <InputBar
            placeholder="Nazwa użytkownika*"
            onChange={(e) => setNazwa(e.target.value)}
            value={nazwa}
          ></InputBar>
          <InputBar
            placeholder="Email*"
            onChange={(e) => setMail(e.target.value)}
            value={mail}
          ></InputBar>
          <InputBar
            placeholder="Haslo*"
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
          ></InputBar>
          <InputBar
            placeholder="Powtórz haslo*"
            onChange={(e) => setConfirm(e.target.value)}
            type={showConfirm ? "text" : "password"}
          ></InputBar>

          <Column
            style={{
              width: "90vw",
              height: "3em",
              margin: "0",
              alignItems: "center",
            }}
          >
            <Row>
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
            <LoginButton>
              <ButtonText>Zarejestruj się</ButtonText>
            </LoginButton>
            <Row style={{ justifyContent: "center", marginTop: "1em" }}>
              <Text style={{ margin: "0", padding: "0" }}>
                Masz już konto?{" "}
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "black" }}
                  onClick={() => props.setSideBar(0)}
                >
                  <b>Zaloguj się</b>
                </Link>
              </Text>
            </Row>
          </Column>
        </Column>
      </LoginContainer>
    </>
  );
};

export default RegisterB2C;
