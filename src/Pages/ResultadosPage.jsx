import styled from "styled-components";
import { ResultadosSection } from "../components/sections/ResultadosSection";

export const ResultadosPage = ({ searchQuery, setSelectedObra }) => { // Recibe searchQuery como prop directamente

  return (
    <MainContainer>
        <ResultadosSection searchQuery={searchQuery} setSelectedObra={setSelectedObra}/>
    </MainContainer>
  );
};

// CSS-in-JS Styling
const MainContainer = styled.main`
  width: 100%;
`;
