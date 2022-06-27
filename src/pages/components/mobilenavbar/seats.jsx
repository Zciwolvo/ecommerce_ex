import React, { useState } from "react";
import styled from "styled-components";
import { Link, BrowserRouter as Router, HashRouter } from "react-router-dom";

import cross from "../../../src/logos/cross.svg";
import arrow from "../../../src/logos/arrowback.svg";

const Ul = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0em;
  right: 0;
  height: 100vh;
  overflow-y: scroll;
  width: 100%;
  background-color: white;
  overflow-x: hidden;
  z-index: 1001;
  transform: ${(props) =>
    props.openSeats ? "translateX(0%)" : "translateX(100%)"};
  transition: transform 0.3s ease-in-out;
`;

const NavLinks = styled.a`
  height: 1em;
  font-size: 1em;
  font-weight: 400;
  font-family: "Helvetica";
  margin: 1em;
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Logo = styled.img`
  width: 1.5em;
  height: 1.5em;
  margin: 2em 1em 1em 1em;
`;

const Arrow = styled.img`
  width: 2em;
  height: auto;
  margin: 2em 0.5em 2em 0;
`;

const Divider = styled.div`
  color: black;
  background-color: black;
  height: 1px;
  width: 100%;
  margin: 0 auto;
`;

const ScrollTop = () => {
  window.scrollTo(0, 0);
};

const Close = (open, openCurrent) => {
  open(false);
  openCurrent(false);
};

const Seats = (props) => {
  return (
    <Ul openSeats={props.openSeats}>
      <Logo
        src={cross}
        onClick={() => Close(props.setOpenSeats, props.setOpen)}
      ></Logo>
      <Divider />
      <Link
        to={{}}
        style={{ textDecoration: "none", color: "black" }}
        onClick={() => props.setOpenSeats(false)}
      >
        <NavLinks>
          <Arrow src={arrow} />

          <b>Oświetlenie</b>
        </NavLinks>
      </Link>
      <Divider />
      <Link to={{}} style={{ textDecoration: "none", color: "black" }}>
        <NavLinks>Fotele</NavLinks>
      </Link>
      <Divider />
      <Link to={{}} style={{ textDecoration: "none", color: "black" }}>
        <NavLinks>Krzesła</NavLinks>
      </Link>
      <Divider />
      <Link to={{}} style={{ textDecoration: "none", color: "black" }}>
        <NavLinks>Hokery</NavLinks>
      </Link>
      <Divider />
      <Link to={{}} style={{ textDecoration: "none", color: "black" }}>
        <NavLinks>Stoliki</NavLinks>
      </Link>
      <Divider />
      <Link to={{}} style={{ textDecoration: "none", color: "black" }}>
        <NavLinks>Sofy i łóżka</NavLinks>
      </Link>
      <Divider />
      <Link to={{}} style={{ textDecoration: "none", color: "black" }}>
        <NavLinks>Łóżka</NavLinks>
      </Link>
      <Divider />
      <Link to={{}} style={{ textDecoration: "none", color: "black" }}>
        <NavLinks>Pufy</NavLinks>
      </Link>
      <Divider />
      <Link to={{}} style={{ textDecoration: "none", color: "black" }}>
        <NavLinks>Sofy</NavLinks>
      </Link>
      <Divider />

      <NavLinks style={{ justifyContent: "center" }}>
        <Link to={{}} style={{ textDecoration: "none", color: "black" }}>
          Facebook | Instagram | Pinterest
        </Link>
      </NavLinks>
    </Ul>
  );
};

export default Seats;
