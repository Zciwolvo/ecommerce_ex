import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NavbarMobile from "./mobilenavbar/Burger";
import NavbarDesktop from "./navbardesktop";

const Navbar = (props) => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 720) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  });
  return mobile ? (
    <NavbarMobile
      open={props.open}
      setOpen={props.setOpen}
      openHoverMenu={props.openHoverMenu}
      setOpenHoverMenu={props.setOpenHoverMenu}
    />
  ) : (
    <NavbarDesktop
      open={props.open}
      setOpen={props.setOpen}
      openHoverMenu={props.openHoverMenu}
      setOpenHoverMenu={props.setOpenHoverMenu}
    />
  );
};

export default Navbar;
