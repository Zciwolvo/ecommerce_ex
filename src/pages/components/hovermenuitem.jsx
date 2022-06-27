import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;
`;

const Image = styled.img`
  width: 18em;
  height: 18em;
`;

const Text = styled.p`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 0.01em;
  color: #1c1c1c;
`;

const HoverMenuItem = (props) => {
  return (
    <Column>
      <Image src={props.item} />
      <Text>
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          Odkryj --{">"}
        </Link>
      </Text>
    </Column>
  );
};

export default HoverMenuItem;
