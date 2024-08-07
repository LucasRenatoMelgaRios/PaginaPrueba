import React from "react";
import styled from "styled-components";
import { InfoObraSection } from "../components/sections/InfoObraSection";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const InfoObraPage = ({ selectedObra }) => { // Recibe la obra seleccionada
    const navigate = useNavigate(); // Inicializa useNavigate

    useEffect(() => {
      // Redirige a la página de inicio si no hay una serie seleccionada
      if (!selectedObra) {
        navigate("/"); // Redirige al inicio
      } else {
        // Si hay una serie seleccionada, desplaza hacia arriba
        window.scrollTo({
          top: 0,
          behavior: "smooth", // Desplazamiento suave
        });
      }
    }, [selectedObra, navigate]); // Dependencia de selectedSerie y navigate
  return (
    <MainContainer>
      <InfoObraSection selectedObra={selectedObra} />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  padding: 20px;
`;
