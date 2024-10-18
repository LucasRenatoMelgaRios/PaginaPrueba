import React from "react";
import styled from "styled-components";
import { SeriesSection } from "../components/sections/SeriesSection";
import Slider from "../components/Slider";

export const HomePage = ({ setSelectedSerie }) => {

  return (
    <MainContainer>
      <Slider/>
      <SeriesSection setSelectedSerie={setSelectedSerie} />
    </MainContainer>
  );
};

// CSS-in-JS Styling
const MainContainer = styled.main`
  max-width: 100%;
  min-width: 100%;
`;
