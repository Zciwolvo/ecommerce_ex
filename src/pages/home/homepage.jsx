import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Navbar from "../components/navbar";
import Artykuly from "./artykuly";
import Artykuly2 from "./artykuly2";
import Asortyment from "./asortyment";
import Asortyment2 from "./asortyment2";
import Asortyment3 from "./asortyment3";
import Asortyment4 from "./asortyment4";
import Banner from "./banner";
import BlogPromo from "./blogPromo";
import Community from "./community";
import Newsletter from "../components/newsletter";
import Promo from "./promo";
import Propo from "../components/propo";
import Contact from "../components/contact";
import Footer from "../components/footer";

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.props.open ? "rgba(55, 55, 55, 0.5)" : ""};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 1s;
`;

const Home = () => {
  const [open, setOpen] = useState(false);
  const [openHoverMenu, setOpenHoverMenu] = useState(false);

  return (
    <BackgroundFilter props={{ open: open }}>
      <Navbar
        open={open}
        setOpen={setOpen}
        openHoverMenu={openHoverMenu}
        setOpenHoverMenu={setOpenHoverMenu}
      />
      <Banner />
      <Asortyment />
      <BlogPromo />
      <Asortyment2 />
      <Asortyment3 />
      <Promo />
      <Artykuly />
      <Artykuly2 />
      <Community />
      <Newsletter />
      <Asortyment4 />
      <Propo />
      <Contact />
      <Footer />
    </BackgroundFilter>
  );
};

export default Home;
