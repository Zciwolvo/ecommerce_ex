import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/navbar";
import AdressPanel from "./adress";
import BillingPanel from "./billing";
import DeliveryPanel from "./delivery";
import DetailsPanel from "./details";
import MainPanel from "./main";
import ProfileSide from "./profileside";
import Footer from "../components/footer";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5em auto;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

const Panel = () => {
  const [open, setOpen] = useState(false);
  const [openHoverMenu, setOpenHoverMenu] = useState(false);
  const [currentSub, setCurrentSub] = useState(0);

  const Subs = [
    MainPanel,
    AdressPanel,
    BillingPanel,
    DeliveryPanel,
    DetailsPanel,
  ];

  const Page = Subs[currentSub];

  return (
    <>
      <Navbar
        open={open}
        setOpen={setOpen}
        openHoverMenu={openHoverMenu}
        setOpenHoverMenu={setOpenHoverMenu}
      />
      <Row>
        <ProfileSide setCurrentSub={setCurrentSub} />
        <Page setCurrentSub={setCurrentSub} />
      </Row>
      <Footer />
    </>
  );
};

export default Panel;
