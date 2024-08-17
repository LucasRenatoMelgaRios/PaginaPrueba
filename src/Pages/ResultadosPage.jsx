import styled from "styled-components";
import { ResultadosSection } from "../components/sections/ResultadosSection";

export const ResultadosPage = ({ searchQuery, setSearchQuery, setSelectedObra }) => { // Recibe searchQuery como prop directamente

  return (
    <MainContainer>
        <ResultadosSection searchQuery={searchQuery} setSelectedObra={setSelectedObra} setSearchQuery={setSearchQuery}/>
    </MainContainer>
  );
};

// CSS-in-JS Styling
const MainContainer = styled.main`
  width: 100%;
`;
