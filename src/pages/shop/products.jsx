import React from "react";
import styled from "styled-components";
import ShopProduct from "./product";
import chair from "../../src/photos/homepage/chair.png";

const Products = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 80px;
  margin-bottom: 61px;
  margin-left: 1em;
  margin-right: 1em;
`;

const ShopProducts = () => {
  return (
    <>
      <Products>
        <ShopProduct product={chair} />
        <ShopProduct product={chair} />
        <ShopProduct product={chair} />
        <ShopProduct product={chair} />
        <ShopProduct product={chair} />
      </Products>
    </>
  );
};

export default ShopProducts;
