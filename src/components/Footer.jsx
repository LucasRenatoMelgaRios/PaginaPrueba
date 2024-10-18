// src/components/Footer.jsx
import React from "react";
import styled from "styled-components";
import marca from "../assets/nombrePagina.png";
import { FaDiscord } from "react-icons/fa6";

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <ElementsColumnContainer>
          <img src={marca} alt="Marca" />
          <Parrafo>9 de cada 10 médicos recomiendan leer su serie en ikigai mangas.</Parrafo>
          <FaDiscord />
        </ElementsColumnContainer>
        <ButtonsContainer>
          <Button>Condiciones del Servicio</Button>
          <Button>Política de Privacidad</Button>
          <Button>Acerca de Nosotros</Button>
          <Button>Discord</Button>
          <Button>Contacto</Button>
        </ButtonsContainer>
      </FooterContainer>
      <MadeWithContainer>
        {/* Aquí puedes agregar créditos o información adicional si lo necesitas */}
      </MadeWithContainer>
    </>
  );
};

// CSS-in-JS Styling
const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  height: clamp(250px, 45vh, 600px); /* Ajuste flexible para el alto */
  padding: clamp(15px, 5vw, 40px) 0; /* Ajuste de padding */
  background-color: rgb(25, 25, 25);
  border-top: 1px solid rgb(8, 8, 8);
  box-shadow: 0 -7px 8px rgb(29, 29, 29);
  align-items: center;
  justify-content: space-around;

  @media (max-width: 700px) {
    padding-left: 20px;
    padding-right: 20px;
    height: auto; /* Para pantallas pequeñas, permitir que la altura se ajuste automáticamente */
  }
`;

const ElementsColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(10px, 4vw, 30px); /* Ajuste del gap entre elementos */

  img {
    width: clamp(100px, 20vw, 250px);
    margin-left: -10px;
  }

  svg {
    font-size: clamp(25px, 5vw, 50px); /* Ajuste dinámico del icono */
  }

  @media (max-width: 700px) {
    width: 100%;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

const Parrafo = styled.p`
  color: rgb(164, 166, 168);
  font-size: clamp(14px, 1.5vw, 20px); /* Ajuste del tamaño de texto */
  line-height: clamp(20px, 4vw, 28px); /* Ajuste dinámico de la altura de línea */
  width: clamp(70%, 80%, 90%); /* Ajuste flexible del ancho */
  text-align: center;

  @media (max-width: 700px) {
    width: 100%;
    text-align: center; /* Centrar el texto en pantallas pequeñas */
  }
`;

const Button = styled.button`
  font-size: clamp(6px, 1vw, 10px); /* Ajuste del tamaño de texto en botones */
  transition: background-color 0.3s;
  border: 1px solid #2b2727;
  cursor: pointer;
  background-color: inherit;
  color: rgb(216, 212, 212);
  padding: clamp(8px, 2vw, 15px); /* Ajuste del padding interno */
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: clamp(120px, 20vw, 180px); /* Ancho mínimo dinámico */

  &:hover {
    border: 1px solid #f5f5f5;
  }

  @media (max-width: 460px) {
    font-size: clamp(6px, 1vw, 10px); /* Ajuste del tamaño de texto en botones */
    padding: 10px;
    min-width: 140px;
  }

    @media (max-width: 400px) {
    grid-template-columns: 1fr 1fr; /* En pantallas muy pequeñas, un botón por fila */
  }
`;

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Mantiene dos columnas */
  gap: clamp(10px, 2vw, 20px); /* Ajuste del espacio entre botones */

  @media (max-width: 460px) {
    grid-template-columns: 1fr 1fr; /* Mantener dos botones por fila en pantallas más pequeñas */
    gap: 5px;
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr; /* En pantallas muy pequeñas, un botón por fila */
  }
`;

const MadeWithContainer = styled.div`
  width: 100%;
  padding: clamp(10px, 2vw, 20px);
  text-align: center;
  color: rgb(164, 166, 168);
  font-size: clamp(10px, 1vw, 14px); /* Texto pequeño con ajuste flexible */
`;
