import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 5em auto;
  align-items: center;
  justify-content: center;
`;

const BigText = styled.h1`
  max-width: 15em;
  font-family: Helvetica;
  font-size: 56px;
  font-weight: 400;
  line-height: 64px;
  letter-spacing: 0em;
  text-align: center;
`;

const SmallText = styled.h3`
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-top: 0;
`;

const Quote = () => {
  return (
    <Container>
      <BigText>
        In a professional context it often happens that private or corporate
        clients corder a publication to be made and presented.
      </BigText>
      <SmallText>Jack Bronson</SmallText>
    </Container>
  );
};

export default Quote;
