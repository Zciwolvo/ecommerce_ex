import React from "react";
import styled from "styled-components";

const HeadLine2 = styled.h2`
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0.01em;
  text-align: left;
`;

const Text = styled.p`
  max-width: 40em;
  font-family: Helvetica;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.03em;
  text-align: left;
`;

const Column = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SideDesc = () => {
  return (
    <>
      <Column>
        <Text>
          In a professional context it often happens that private or corporate
          clients corder a publication to be made and presented.
        </Text>
      </Column>
    </>
  );
};

export default SideDesc;
