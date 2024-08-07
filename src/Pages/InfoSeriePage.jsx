import React from "react";
import styled from "styled-components";
import { InfoSerieSection } from "../components/sections/InfoSerieSection";

export const InfoSeriePage = ({ selectedSerie }) => {
  return (
    <MainContainer>
      <InfoSerieSection selectedSerie={selectedSerie} />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  padding: 20px;
`;
