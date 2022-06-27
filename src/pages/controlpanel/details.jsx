import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Column = styled.div`
  width: 100%;
  max-width: 40em;
  display: flex;
  flex-direction: column;
  margin-left: 10em;
  @media (max-width: 720px) {
    margin-left: 1em;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

const Divider = styled.div`
  color: black;
  background-color: black;
  height: 1px;
  width: 100%;
  max-width: 1920px;
  margin-bottom: 1em;
`;

const Text = styled.a`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0.01em;
  text-align: left;
  color: black;
  margin-top: 1.5em;
`;

const InputBar = styled.input`
  max-width: 70%;
  height: 2em;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 1.5em;
  margin: 1em 1em 1em 0em;
`;

const LoginButton = styled.button`
  width: 40%;
  height: 5em;
  background: #1c1c1c;
  border-radius: 10px;
  margin-top: 1em;
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

const DetailsPanel = (props) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [nickname, setNickname] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [newpass, setNewpass] = useState("");
  const [passcon, setPasscon] = useState("");

  return (
    <Column>
      <Text>
        <b>Szczegóły konta</b>
      </Text>
      <Divider />
      <Row>
        <InputBar
          placeholder="Imię*"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputBar
          placeholder="Nazwisko*"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          style={{ width: "35%" }}
        />
      </Row>
      <InputBar
        placeholder="Nazwa wyświetlana"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <InputBar
        placeholder="Adres e-mail"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
      />
      <Text>
        <b>Zmiana hasła</b>
      </Text>
      <Divider />
      <InputBar
        placeholder="Aktualne hasło"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <InputBar
        placeholder="Nowe hasło"
        value={newpass}
        onChange={(e) => setNewpass(e.target.value)}
      />
      <InputBar
        placeholder="Potwierdź hasło"
        value={passcon}
        onChange={(e) => setPasscon(e.target.value)}
      />
      <LoginButton>
        <ButtonText>Zapisz zmianę</ButtonText>
      </LoginButton>
    </Column>
  );
};

export default DetailsPanel;
