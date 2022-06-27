import React from "react";
import styled from "styled-components";

export const Column = styled.div`
  width: 100%;
  max-width: 30em;
  display: flex;
  flex-direction: column;
  margin-left: 10em;
  @media (max-width: 720px) {
    margin-left: 0;
  }
`;

export const Divider = styled.div`
  color: black;
  background-color: black;
  height: 1px;
  width: 100%;
  max-width: 1920px;
  margin: 2em auto;
  @media (max-width: 720px) {
    width: 120vw;
    margin-left: -10%;
  }
`;

export const Text = styled.a`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0.01em;
  text-align: left;
  color: black;
  margin-top: 1.5em;
  @media (max-width: 720px) {
    margin-left: 1em;
    max-width: 90vw;
  }
`;

export const Title = styled.a`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0.01em;
  text-align: left;
  color: black;
  margin-top: 1.5em;
  @media (max-width: 720px) {
    margin-left: 1em;
  }
`;

export const TitleColumn = styled.div`
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 9em;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1.5em;
`;

export const Image = styled.img`
  width: 2em;
  height: 2em;
`;
