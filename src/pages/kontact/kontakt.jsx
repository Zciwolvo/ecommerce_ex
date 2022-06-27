import React, { useState } from "react";
import styled from "styled-components";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Kontakt = () => {
  const [open, setOpen] = useState(false);
  const [openHoverMenu, setOpenHoverMenu] = useState(false);

  return (
    <>
      <Navbar
        open={open}
        setOpen={setOpen}
        openHoverMenu={openHoverMenu}
        setOpenHoverMenu={setOpenHoverMenu}
      />
      <Contact />
      <Footer />
    </>
  );
};

export default Kontakt;
