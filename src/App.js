import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/homepage";
import Shop from "./pages/shop/index";
import Kontakt from "./pages/kontact/kontakt";
import O_nas from "./pages/o_nas/o_nas";
import B2B from "./pages/b2b/b2b";
import Panel from "./pages/controlpanel/panel";
import Inspirations from "./pages/inspirations/inspirations";

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  max-width: 1920px;
  overflow: hidden;
`;

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/e-showroom" element={<Shop />} />
          <Route path="/contakt" element={<Kontakt />} />
          <Route path="/about" element={<O_nas />} />
          <Route path="/b2b" element={<B2B />} />
          <Route path="/profile" element={<Panel />} />
          <Route path="/inspirations" element={<Inspirations />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
