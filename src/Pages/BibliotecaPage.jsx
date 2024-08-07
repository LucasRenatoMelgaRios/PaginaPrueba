import React from "react";
import styled from "styled-components";
import { BibliotecaSection } from "../components/sections/BibliotecaSection";

export const BibliotecaPage = ({ setSelectedObra }) => { // Recibe setSelectedObra
  return (
    <MainContainer>
      <BibliotecaSection setSelectedObra={setSelectedObra} /> {/* Pasa setSelectedObra */}
    </MainContainer>
  );
};

const MainContainer = styled.main`
  width: 100%;
`;

