import React from "react";
import styled from "styled-components";
import { SeriesSection } from "../components/sections/SeriesSection";

export const HomePage = ({ setSelectedSerie }) => {

  return (
    <MainContainer>
      <SeriesSection setSelectedSerie={setSelectedSerie} />
    </MainContainer>
  );
};

// CSS-in-JS Styling
const MainContainer = styled.main`
  width: 100%;
`;
