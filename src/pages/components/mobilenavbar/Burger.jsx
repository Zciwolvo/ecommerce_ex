import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

import burger from "../../../src/logos/burger.svg";
import cross from "../../../src/logos/cross.svg";
import profileLogo from "../../../src/logos/profile.svg";
import bronsonLogo from "../../../src/logos/logosmall.svg";
import wishlistLogo from "../../../src/logos/wishlist.svg";
import cartLogo from "../../../src/logos/cart.svg";
import Lights from "./lights";
import Furniture from "./furniture";
import Decorations from "./decorations";
import Seats from "./seats";
import SideBar from "../../sidebar/sidebar";
import Login from "../../sidebar/login";
import RegisterB2B from "../../sidebar/registerb2b";
import RegisterB2C from "../../sidebar/registerb2c";
import LoginB2B from "../../sidebar/loginB2B";
import Bag from "../../sidebar/cartlist";
import BagSummary from "../../sidebar/cartsummary";
import Wishlist from "../../sidebar/wishlist";
import { Link } from "react-router-dom";

const Logo = styled.img`
  width: 1.5em;
  height: 1.5em;
`;

const BronsonLogo = styled.img`
  width: 10em;
  height: 1.5em;
  margin: 1em;
`;

const ContainerMobile = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  overflow-x: hidden;
`;

const Divider = styled.div`
  color: black;
  background-color: black;
  height: 1px;
  width: 100%;
  margin: 0 auto;
`;

const NavbarBlackText = styled.p`
  max-width: 20em;
  font-size: 14px;
  font-weight: 400;
  font-family: "Helvetica";
  margin: 1em;
  color: black;
`;

const NavbarWhiteText = styled.p`
  font-size: 14px;
  font-weight: 400;
  font-weight: 700;
  font-family: "Helvetica";
  margin: 1em;
  color: white;
  text-transform: uppercase;
`;

const NavbarMobile = (props) => {
  const [open, setOpen] = useState(false);
  const [openLights, setOpenLights] = useState(false);
  const [openFurni, setOpenFurni] = useState(false);
  const [openDecor, setOpenDecor] = useState(false);
  const [openSeats, setOpenSeats] = useState(false);
  const [sideBar, setSideBar] = useState(0);

  const SideBarSteps = [
    Login,
    RegisterB2B,
    RegisterB2C,
    LoginB2B,
    Bag,
    BagSummary,
    Wishlist,
  ];

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

  return (
    <>
      <ContainerMobile>
        <Logo src={burger} onClick={() => setOpen(!open)} />
        <Logo src={profileLogo} onClick={() => OpenLogin()} />
        <Link to="/">
          <BronsonLogo src={bronsonLogo} />
        </Link>
        <Logo src={wishlistLogo} onClick={() => OpenWishlist()} />
        <Logo src={cartLogo} onClick={() => OpenBagSummary()} />
      </ContainerMobile>
      <Divider />
      <ContainerMobile style={{ justifyContent: "center" }}>
        <NavbarBlackText>IVANO REDAELLI</NavbarBlackText>
        <NavbarBlackText>BROKIS</NavbarBlackText>
        <NavbarBlackText>NORDICLINE</NavbarBlackText>
      </ContainerMobile>
      <ContainerMobile
        style={{ justifyContent: "center", backgroundColor: "black" }}
      >
        <NavbarWhiteText>
          Wielkie otwarcie Showroom | 01.07.2022
        </NavbarWhiteText>
      </ContainerMobile>

      <SideBar
        open={props.open}
        setOpen={props.setOpen}
        setSideBar={setSideBar}
        login={SideBarSteps[sideBar]}
      />

      <RightNav
        open={open}
        setOpen={setOpen}
        setOpenLights={setOpenLights}
        openFurni={openFurni}
        setOpenFurni={setOpenFurni}
        openDecor={openDecor}
        setOpenDecor={setOpenDecor}
        openSeats={openSeats}
        setOpenSeats={setOpenSeats}
        OpenBag={OpenBag}
      />

      <Lights
        setOpen={setOpen}
        openLights={openLights}
        setOpenLights={setOpenLights}
      />
      <Furniture
        setOpen={setOpen}
        openFurni={openFurni}
        setOpenFurni={setOpenFurni}
      />
      <Decorations
        setOpen={setOpen}
        openDecor={openDecor}
        setOpenDecor={setOpenDecor}
      />
      <Seats
        setOpen={setOpen}
        openSeats={openSeats}
        setOpenSeats={setOpenSeats}
      />
    </>
  );
};

export default NavbarMobile;
