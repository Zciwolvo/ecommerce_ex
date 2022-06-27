import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/navbar";
import Contact from "../components/contact";
import Footer from "../components/footer";
import ShopProducts from "./products";
import Filters from "../components/filters";

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.props.open ? "rgba(55, 55, 55, 0.5)" : ""};
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 1s;
`;

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <BackgroundFilter props={{ open: open }}>
      <Navbar open={open} setOpen={setOpen} />
      <Filters />
      <ShopProducts />
      <Contact />
      <Footer />
    </BackgroundFilter>
  );
};

export default Home;
