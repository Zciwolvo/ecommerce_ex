import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import BronsonLogo from "../../src/logos/bronsonLogo.svg";
import searchLogo from "../../src/logos/search.svg";
import translationLogo from "../../src/logos/translation.svg";
import wishlistLogo from "../../src/logos/wishlist.svg";
import cartLogo from "../../src/logos/cart.svg";
import profileLogo from "../../src/logos/profile.svg";
import Login from "../sidebar/login";
import SideBar from "../sidebar/sidebar";
import RegisterB2B from "../sidebar/registerb2b";
import RegisterB2C from "../sidebar/registerb2c";
import LoginB2B from "../sidebar/loginB2B";
import HoverMenu from "../hovermenu/hovermenu";
import Dekoracje from "../hovermenu/dekoracje";
import Oswietlenia from "../hovermenu/oswietlenia";
import Meble from "../hovermenu/meble";
import Siedziska from "../hovermenu/siedziska";
import Wszystko from "../hovermenu/wszystko";
import Bag from "../sidebar/cartlist";
import BagSummary from "../sidebar/cartsummary";
import Wishlist from "../sidebar/wishlist";

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  @media (max-width: 720px) {
    width: 0;
    height: 0;
  }
`;

const ContainerMobile = styled.div`
  width: 0;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  @media (max-width: 720px) {
    width: 100%;
    height: 3em;
  }
`;

const NavbarHorizontalSection = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NavbarBlackText = styled.p`
  font-size: 1em;
  font-weight: 400;
  font-family: "Helvetica";
  margin: 1em;
  color: black;
`;

const NavbarWhiteText = styled.p`
  font-size: 1em;
  font-weight: 400;
  font-weight: 700;
  font-family: "Helvetica";
  margin: 1em;
  color: white;
  text-transform: uppercase;
`;

const Logo = styled.img`
  width: 13em;
  height: auto;
  margin: 0.5em;
`;

const SmallLogo = styled.img`
  width: 1.5em;
  height: 1.5em;
  margin: 0.5em;
`;

const Divider = styled.div`
  color: black;
  background-color: black;
  height: 1px;
  width: 100vw;
  max-width: 1920px;
  margin: 0 auto;
`;

const SearchBarSegment = styled.div`
  width: ${(props) => (props.searchBar ? "90%" : "0%")};
  height: ${(props) => (props.searchBar ? "3em" : "0")};
  visibility: ${(props) => (props.searchBar ? "visible" : "hidden")};
  transition: all 1s;
  margin: ${(props) => (props.searchBar ? "0.5em 0 0.5em 0" : "0")};
`;

const SearchBarInput = styled.input`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  font-family: Helvetica;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  border: none;
  border-bottom: 2px solid black;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: auto;
  border-bottom: 2px solid black;
  justify-content: center;
  align-items: center;
`;

const NavbarDesktop = (props) => {
  const [currency, setCurrency] = useState(true);
  const [sideBar, setSideBar] = useState(0);
  const [hoverMenu, setHoverMenu] = useState(0);
  const [searchBar, setSearchBar] = useState(false);

  const [searchValue, setSearchValue] = useState("");

  const SideBarSteps = [
    Login,
    RegisterB2B,
    RegisterB2C,
    LoginB2B,
    Bag,
    BagSummary,
    Wishlist,
  ];
  const HoverMenuSteps = [Oswietlenia, Meble, Dekoracje, Siedziska, Wszystko];

  const OpenLogin = () => {
    setSideBar(0);
    props.setOpen(!props.open);
  };

  const OpenB2B = () => {
    setSideBar(3);
    props.setOpen(!props.open);
  };

  const OpenBag = () => {
    setSideBar(4);
    props.setOpen(!props.open);
  };

  const OpenBagSummary = () => {
    setSideBar(5);
    props.setOpen(!props.open);
  };

  const OpenWishlist = () => {
    setSideBar(6);
    props.setOpen(!props.open);
  };

  const OpenHoverOswietlenia = () => {
    if (props.open === false) {
      setHoverMenu(0);
      props.setOpenHoverMenu(true);
    }
  };

  const OpenHoverMeble = () => {
    if (props.open === false) {
      setHoverMenu(1);
      props.setOpenHoverMenu(true);
    }
  };

  const OpenHoverDekoracje = () => {
    if (props.open === false) {
      setHoverMenu(2);
      props.setOpenHoverMenu(true);
    }
  };

  const OpenHoverSiedziska = () => {
    if (props.open === false) {
      setHoverMenu(3);
      props.setOpenHoverMenu(true);
    }
  };

  const OpenHoverWszystko = () => {
    if (props.open === false) {
      setHoverMenu(4);
      props.setOpenHoverMenu(true);
    }
  };

  return (
    <>
      <HoverMenu
        openHoverMenu={props.openHoverMenu}
        setOpenHoverMenu={props.setOpenHoverMenu}
        setSideBar={setSideBar}
        hover={HoverMenuSteps[hoverMenu]}
      />
      <SideBar
        open={props.open}
        setOpen={props.setOpen}
        setSideBar={setSideBar}
        login={SideBarSteps[sideBar]}
      />
      <ContainerMobile></ContainerMobile>
      <Container>
        <NavbarHorizontalSection>
          <Link
            style={{ textDecoration: "none" }}
            to={{}}
            onMouseEnter={() => OpenHoverWszystko()}
          >
            <NavbarBlackText>WSZYSTKO</NavbarBlackText>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to={{}}
            onMouseEnter={() => OpenHoverOswietlenia()}
          >
            <NavbarBlackText>OŚWIETLENIE</NavbarBlackText>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to={{}}
            onMouseEnter={() => OpenHoverMeble()}
          >
            <NavbarBlackText>MEBLE</NavbarBlackText>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to={{}}
            onMouseEnter={() => OpenHoverDekoracje()}
          >
            <NavbarBlackText>DEKORACJE</NavbarBlackText>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to={{}}
            onMouseEnter={() => OpenHoverSiedziska()}
          >
            <NavbarBlackText>SIEDZISKA</NavbarBlackText>
          </Link>
        </NavbarHorizontalSection>
        <Link style={{ textDecoration: "none" }} to="/">
          <NavbarHorizontalSection>
            <Logo src={BronsonLogo} />
          </NavbarHorizontalSection>
        </Link>
        <NavbarHorizontalSection>
          <Link style={{ textDecoration: "none" }} to="/b2b">
            <NavbarBlackText>B2B</NavbarBlackText>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/">
            <NavbarBlackText>BLOG</NavbarBlackText>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/about">
            <NavbarBlackText>O NAS</NavbarBlackText>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/contakt">
            <NavbarBlackText>KONTAKT</NavbarBlackText>
          </Link>
          {currency === true ? (
            <NavbarBlackText onClick={() => setCurrency(!currency)}>
              <b>PLN</b>/EUR
            </NavbarBlackText>
          ) : (
            <NavbarBlackText onClick={() => setCurrency(!currency)}>
              PLN/<b>EUR</b>
            </NavbarBlackText>
          )}
          <Link to={{}} onClick={() => setSearchBar(!searchBar)}>
            <SmallLogo src={searchLogo} />
          </Link>
          <Link to={{}}>
            <SmallLogo src={translationLogo} />
          </Link>
          <Link to={{}} onClick={() => OpenWishlist()}>
            <SmallLogo src={wishlistLogo} />
          </Link>
          <Link to={{}} onClick={() => OpenBagSummary()}>
            <SmallLogo src={cartLogo} />
          </Link>
          <Link to={{}} open={props.open} onClick={OpenLogin}>
            <SmallLogo src={profileLogo} />
          </Link>
        </NavbarHorizontalSection>
      </Container>
      <Divider />
      <Container style={{ justifyContent: "center" }}>
        <NavbarBlackText>IVANO REDAELLI</NavbarBlackText>
        <NavbarBlackText>BROKIS</NavbarBlackText>
        <NavbarBlackText>NORDICLINE</NavbarBlackText>
      </Container>
      <Container
        style={{ justifyContent: "center", backgroundColor: "#1C1C1C" }}
      >
        <NavbarWhiteText>
          Wielkie otwarcie Showroom | 01.07.2022 | Wrocław, rynek 1
        </NavbarWhiteText>
      </Container>
      <SearchBarSegment searchBar={searchBar}>
        <Row>
          <SearchBarInput
            placeholder="Type to search"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
          <NavbarBlackText>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to={{}}
              onClick={() => setSearchBar(false)}
            >
              Close
            </Link>
          </NavbarBlackText>
        </Row>
      </SearchBarSegment>
    </>
  );
};

export default NavbarDesktop;
