import styled from "styled-components";
import { BibliotecaSection } from "../components/sections/BibliotecaSection";

export const BibliotecaPage = () => {
    return (
        <>
         <MainContainer>
            <BibliotecaSection/>
         </MainContainer>
        </>
    )
}

const MainContainer = styled.main`
  width: 100%;
`;
