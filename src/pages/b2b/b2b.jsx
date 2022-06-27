import React, { useState } from "react";
import styled from "styled-components";

import Navbar from "../components/navbar";
import B2Btologin from "./b2btologin";
import BannerB2B from "./banner";
import WorkTogether from "./worktogether";
import Contact from "../components/contact";
import Footer from "../components/footer";

const B2B = (props) => {
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
      <BannerB2B />
      <B2Btologin setOpen={setOpen} />
      <WorkTogether />
      <Contact />
      <Footer />
    </>
  );
};

export default B2B;
