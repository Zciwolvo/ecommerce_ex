import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import GoogleLogo from "../../src/logos/google.svg";
import Eye from "../../src/logos/eye.svg";

const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
  @media (max-width: 720px) {
    height: 100vh;
  }
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
  justify-content: space-between;
  @media (max-width: 1550px) {
    height: 10em;
  }
`;

const Row = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const GoogleLoginButton = styled.button`
  width: 15em;
  height: 4em;
  background: #ffffff;
  border: 1px solid black;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

const LoginButton = styled.button`
  width: 100%;
  height: 5em;
  background: #1c1c1c;
  border-radius: 10px;
  @media (max-width: 720px) {
    width: 90vw;
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

const Login = (props) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  return props.mobile ? (
    <>
      <LoginContainer>
        <Row>
          <BigText>Logowanie</BigText>
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
            placeholder="Email"
            onChange={(e) => setMail(e.target.value)}
            value={mail}
          ></InputBar>
          <InputBar
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
          ></InputBar>
          <Row>
            <Row style={{ justifyContent: "flex-start" }}>
              <CheckBox
                onClick={() => setRemember(!remember)}
                type={"checkbox"}
              />
              <SmallText style={{ padding: "0 0 0 1em" }}>
                Pamiętaj mnie
              </SmallText>
            </Row>
            <SmallText
              style={{ padding: "0", width: "100%", textAlign: "end" }}
            >
              <b>Przypomnij hasło</b>
            </SmallText>
          </Row>
        </Column>
        <Row>
          <Divider style={{ width: "42%" }} />
          <Text style={{ padding: "0" }}>Albo</Text>
          <Divider style={{ width: "42%" }} />
        </Row>
        <Column style={{ marginBottom: "0", height: "8em" }}>
          <GoogleLoginButton>
            <Row style={{ justifyContent: "center" }}>
              <Logo src={GoogleLogo} />
              <SmallText style={{ padding: "0", paddingLeft: "1em" }}>
                Login with Google
              </SmallText>
            </Row>
          </GoogleLoginButton>
        </Column>
        <Column
          style={{
            width: "100%",
            marginLeft: "0",
            height: "auto",
            alignItems: "center",
          }}
        >
          <Divider />
          <Text style={{ alignSelf: "start" }}>
            Jesteś dystrybutorem? - Przejdź do zakładki{" "}
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={{}}
              onClick={() => props.setSideBar(3)}
            >
              <b>B2B</b>
            </Link>
          </Text>
          <Column
            style={{
              width: "90%",
              height: "5em",
            }}
          >
            <Link to="/profile" style={{ width: "auto" }}>
              <LoginButton>
                <ButtonText>Zaloguj się</ButtonText>
              </LoginButton>
            </Link>
            <Row style={{ justifyContent: "center", marginTop: "2em" }}>
              <Text style={{ margin: "0", padding: "0" }}>
                Nie posiadasz konta?{" "}
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={{}}
                  onClick={() => props.setSideBar(2)}
                >
                  <b> Zarejestruj się</b>
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
          <BigText>Logowanie</BigText>
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
        <Column style={{ marginBottom: "0", height: "auto", width: "80%" }}>
          <InputBar
            placeholder="Email"
            onChange={(e) => setMail(e.target.value)}
            value={mail}
            style={{ marginBottom: "1em" }}
          ></InputBar>
          <InputBar
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
          ></InputBar>
          <Row
            style={{
              flexDirection: "column",
              height: "auto",
            }}
          >
            <Row style={{ justifyContent: "flex-start" }}>
              <CheckBox
                onClick={() => setRemember(!remember)}
                type={"checkbox"}
              />
              <SmallText style={{ padding: "0 0 0 1em" }}>
                Pamiętaj mnie
              </SmallText>
            </Row>
            <SmallText
              style={{
                padding: "auto",
                width: "100%",
                height: "auto",
                textAlign: "start",
              }}
            >
              <b>Przypomnij hasło</b>
            </SmallText>
          </Row>
        </Column>
        <Row>
          <Divider style={{ width: "42%" }} />
          <Text style={{ padding: "0" }}>Albo</Text>
          <Divider style={{ width: "42%" }} />
        </Row>
        <Column
          style={{
            marginBottom: "0",
            height: "4em",
            marginTop: "0",
            marginBottom: "1em",
          }}
        >
          <GoogleLoginButton style={{ marginTop: "0" }}>
            <Row style={{ justifyContent: "center" }}>
              <Logo src={GoogleLogo} />
              <SmallText style={{ padding: "0", paddingLeft: "1em" }}>
                Login with Google
              </SmallText>
            </Row>
          </GoogleLoginButton>
        </Column>
        <Divider />
        <Text>
          Jesteś dystrybutorem? - Przejdź do zakładki{" "}
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={{}}
            onClick={() => props.setSideBar(3)}
          >
            <b>B2B</b>
          </Link>
        </Text>
        <Column
          style={{
            width: "100%",
            height: "5em",
            margin: "0",
            alignItems: "center",
          }}
        >
          <Link to="/profile" style={{ width: "auto" }}>
            <LoginButton>
              <ButtonText>Zaloguj się</ButtonText>
            </LoginButton>
          </Link>
          <Row style={{ justifyContent: "center", marginTop: "1em" }}>
            <Text style={{ margin: "0", padding: "0" }}>
              Nie posiadasz konta?{" "}
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={{}}
                onClick={() => props.setSideBar(2)}
              >
                <b> Zarejestruj się</b>
              </Link>
            </Text>
          </Row>
        </Column>
      </LoginContainer>
    </>
  );
};

export default Login;
