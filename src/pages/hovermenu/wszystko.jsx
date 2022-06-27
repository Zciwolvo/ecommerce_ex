import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import HoverMenuItem from "../components/hovermenuitem";

import Dekoracja1 from "../../src/photos/dekoracja1.png";
import Dekoracja2 from "../../src/photos/dekoracja2.png";
import Dekoracja3 from "../../src/photos/dekoracja3.png";

const Text = styled.p`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 0.01em;
  margin: 0;
`;

const BoldText = styled.p`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0.01em;
  margin-bottom: 2em;
  margin-top: 0;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2em 2em 2em 2em;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
`;

const Wszystko = (props) => {
  return (
    <Column>
      <Row>
        <Column>
          <BoldText>Wszystko</BoldText>
          <Text>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Donice
            </Link>
          </Text>
          <Text>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Dywany
            </Link>
          </Text>
          <Text>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Misa
            </Link>
          </Text>
          <Text>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Rzeźba
            </Link>
          </Text>
          <Text>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Taca
            </Link>
          </Text>
          <Text>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Wazony
            </Link>
          </Text>
          <br />
          <Text>
            <Link
              style={{
                textDecoration: "none",
                marginTop: "1em",
                color: "black",
              }}
              to="/"
            >
              View all
            </Link>
          </Text>
        </Column>
        <Row>
          <HoverMenuItem item={Dekoracja1} />
          <HoverMenuItem item={Dekoracja2} />
          <HoverMenuItem item={Dekoracja3} />
        </Row>
      </Row>
    </Column>
  );
};

export default Wszystko;
