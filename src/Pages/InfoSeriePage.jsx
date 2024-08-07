import React from "react";
import styled from "styled-components";
import { InfoSerieSection } from "../components/sections/InfoSerieSection";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

export const InfoSeriePage = ({ selectedSerie }) => {
  const navigate = useNavigate(); // Inicializa useNavigate

  useEffect(() => {
    // Redirige a la página de inicio si no hay una serie seleccionada
    if (!selectedSerie) {
      navigate("/"); // Redirige al inicio
    } else {
      // Si hay una serie seleccionada, desplaza hacia arriba
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Desplazamiento suave
      });
    }
  }, [selectedSerie, navigate]); // Dependencia de selectedSerie y navigate

  // Si no hay serie seleccionada, no mostrará nada porque redirige antes
  return (
    <MainContainer>
      <InfoSerieSection selectedSerie={selectedSerie} />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  padding: 20px;
`;
