import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SeriesSection } from "../components/sections/SeriesSection";

export const HomePage = () => {
 
  return (
    <MainContainer>
      <SeriesSection />
    </MainContainer>
  );
};

// CSS-in-JS Styling
const MainContainer = styled.main`
  width: 100%;
`;


