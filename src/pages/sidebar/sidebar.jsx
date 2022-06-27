import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Side = styled.div`
  width: 50em;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  bottom: 0;
  right: ${(props) => (props.props.open ? "0%" : "-100%")};
  background-color: white;
  transition: all 1s;
  z-index: 1000;
  @media (max-width: 720px) {
    width: 100vw;
    right: ${(props) => (props.props.open ? "0%" : "-250%")};
  }
`;

const SideBar = (props) => {
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    if (props.open) {
      document.body.style.overflow = "hidden";
      if (window.innerWidth < 720) {
        setMobile(false);
      } else {
        setMobile(true);
      }
    } else {
      document.body.style.overflow = "";
    }
  });
  return (
    <Side props={{ open: props.open }}>
      <props.login
        setSideBar={props.setSideBar}
        open={props.open}
        setOpen={props.setOpen}
        mobile={mobile}
      />
    </Side>
  );
};

export default SideBar;
