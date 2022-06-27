import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, BrowserRouter as Router, HashRouter } from "react-router-dom";

import cross from "../../../src/logos/cross.svg";
import arrow from "../../../src/logos/arrow.svg";

const Ul = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0em;
  right: 0;
  width: 100%;
  background-color: white;
  z-index: 1000;
  height: 100vh;
  overflow-y: scroll;
  transform: ${(props) =>
    props.open ? "translateX(0%)" : "translateX(-100%)"};
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
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 1.5em;
  height: 1.5em;
  margin: 2em 1em 1em 1em;
  object-fit: content;
`;

const Arrow = styled.img`
  width: 2em;
  height: auto;
  margin: 2em;
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

const RightNav = (props) => {
  const [currency, setCurrency] = useState(true);
  const [language, setLanguage] = useState(true);

  return (
    <Ul open={props.open}>
      <Logo src={cross} onClick={() => props.setOpen(false)}></Logo>
      <Divider />
      <Link
        to={{}}
        style={{ textDecoration: "none", color: "black" }}
        onClick={() => props.setOpenLights(true)}
      >
        <NavLinks>
          Oświetlenie
          <Arrow src={arrow} />
        </NavLinks>
      </Link>
      <Divider />
      <Link
        to={{}}
        style={{ textDecoration: "none", color: "black" }}
        onClick={() => props.setOpenFurni(true)}
      >
        <NavLinks>
          Meble
          <Arrow src={arrow} />
        </NavLinks>
      </Link>
      <Divider />
      <Link
        to={{}}
        style={{ textDecoration: "none", color: "black" }}
        onClick={() => props.setOpenDecor(true)}
      >
        <NavLinks>
          Dekoracje
          <Arrow src={arrow} />
        </NavLinks>
      </Link>
      <Divider />
      <Link
        to={{}}
        style={{ textDecoration: "none", color: "black" }}
        onClick={() => props.setOpenSeats(true)}
      >
        <NavLinks>
          Siedziska
          <Arrow src={arrow} />
        </NavLinks>
      </Link>
      <Divider />
      <Link to="/b2b" style={{ textDecoration: "none", color: "black" }}>
        <NavLinks>B2B</NavLinks>
      </Link>
      <Divider />
      <Link
        to={{}}
        onClick={() => props.OpenBag()}
        style={{ textDecoration: "none", color: "black" }}
      >
        <NavLinks>BLOG</NavLinks>
      </Link>
      <Divider />
      <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
        <NavLinks>O nas</NavLinks>
      </Link>
      <Divider />
      <Link to="/contakt" style={{ textDecoration: "none", color: "black" }}>
        <NavLinks>Kontakt</NavLinks>
      </Link>
      <Divider />
      <Link to={{}} style={{ textDecoration: "none", color: "black" }}>
        <NavLinks>Lista zakupowa</NavLinks>
      </Link>
      <Divider />
      <Link to={{}} style={{ textDecoration: "none", color: "black" }}>
        <NavLinks>Panel logowania</NavLinks>
      </Link>
      <Divider />
      <Link
        onClick={() => setCurrency(!currency)}
        to={{}}
        style={{ textDecoration: "none", color: "black" }}
      >
        <NavLinks style={{ justifyContent: "start" }}>
          Waluta:
          {currency ? (
            <>
              <b>EURO</b>/Złoty
            </>
          ) : (
            <>
              euro/<b>ZŁOTY</b>
            </>
          )}
        </NavLinks>
      </Link>
      <Divider />
      <Link
        onClick={() => setLanguage(!language)}
        to={{}}
        style={{ textDecoration: "none", color: "black" }}
      >
        <NavLinks style={{ justifyContent: "start" }}>
          Język:
          {language ? (
            <>
              <b>polski</b>/angielski
            </>
          ) : (
            <>
              polski/<b>angielski</b>
            </>
          )}
        </NavLinks>
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

export default RightNav;
