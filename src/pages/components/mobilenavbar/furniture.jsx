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
    props.openFurni ? "translateX(0%)" : "translateX(100%)"};
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

const Furniture = (props) => {
  return (
    <Ul openFurni={props.openFurni}>
      <Logo
        src={cross}
        onClick={() => Close(props.setOpenFurni, props.setOpen)}
      ></Logo>
      <Divider />
      <Link
        to={{}}
        style={{ textDecoration: "none", color: "black" }}
        onClick={() => props.setOpenFurni(false)}
      >
        <NavLinks>
          <Arrow src={arrow} />

          <b>Meble</b>
        </NavLinks>
      </Link>
      <Divider />
      <Link to={{}} style={{ textDecoration: "none", color: "black" }}>
        <NavLinks>Barek</NavLinks>
      </Link>
      <Divider />
      <Link to={{}} style={{ textDecoration: "none", color: "black" }}>
        <NavLinks>Biurka</NavLinks>
      </Link>
      <Divider />
      <Link to={{}} style={{ textDecoration: "none", color: "black" }}>
        <NavLinks>Komody</NavLinks>
      </Link>
      <Divider />
      <Link to={{}} style={{ textDecoration: "none", color: "black" }}>
        <NavLinks>Konsole</NavLinks>
      </Link>
      <Divider />
      <Link to={{}} style={{ textDecoration: "none", color: "black" }}>
        <NavLinks>Ławki</NavLinks>
      </Link>
      <Divider />
      <Link to={{}} style={{ textDecoration: "none", color: "black" }}>
        <NavLinks>Regały</NavLinks>
      </Link>
      <Divider />
      <Link to={{}} style={{ textDecoration: "none", color: "black" }}>
        <NavLinks>Stoliki kawowe</NavLinks>
      </Link>
      <Divider />
      <Link to={{}} style={{ textDecoration: "none", color: "black" }}>
        <NavLinks>Stoły</NavLinks>
      </Link>
      <Divider />
      <Link to={{}} style={{ textDecoration: "none", color: "black" }}>
        <NavLinks>Szafki RTV</NavLinks>
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

export default Furniture;
