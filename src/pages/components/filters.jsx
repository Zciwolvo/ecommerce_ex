import React from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 61px;
  margin-bottom: 61px;
  margin-left: 1em;
  margin-right: 1em;
`;

const Header = styled.p`
  font-weight: bold;
  margin-right: 30px;
`;

const Button = styled.button`
  background-color: #f4f4f4;
  width: 180px;
  height: 36px;
  border-radius: 20px;
  border: none;
  text-align: left;
  padding-left: 20px;
  filter: drop-shadow(0 4px 4px #bfbfbf);
  cursor: pointer;
`;

const Filters = (props) => {
  return (
    <Row>
      <Header>Filtry:</Header>
      <Button>Marka</Button>
      <Button>Kategoria</Button>
      <Button>Cena</Button>
    </Row>
  );
};

export default Filters;
