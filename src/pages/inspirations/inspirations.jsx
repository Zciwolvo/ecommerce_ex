import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/navbar";
import Contact from "../components/contact";
import Footer from "../components/footer";
import ProductPage from "./productpage";
import InspiGrid from "./inspigrid";
import Artykuly from "../home/artykuly";
import Asortyment4 from "../home/asortyment4";
import Community from "../home/community";
import Newsletter from "../components/newsletter";
import Quote from "./quote";

const Inspirations = () => {
  const [open, setOpen] = useState(false);
  const [openHoverMenu, setOpenHoverMenu] = useState(false);
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 720) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  });

  return (
    <>
      <Navbar
        open={open}
        setOpen={setOpen}
        openHoverMenu={openHoverMenu}
        setOpenHoverMenu={setOpenHoverMenu}
      />
      <ProductPage />
      <InspiGrid />
      <Artykuly />
      <Asortyment4 />
      {mobile ? <Quote /> : <></>}
      <Community />
      <Newsletter />
      <Contact />
      <Footer />
    </>
  );
};

export default Inspirations;
