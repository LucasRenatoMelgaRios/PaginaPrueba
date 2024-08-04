// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import marca from "../assets/nombrePagina.png";
import { FaDiscord } from "react-icons/fa6";

export const Footer = () => {


  return (
    <>
      <FooterContainer>
        <ElementsColumnContainer>
          <img src={marca} alt="" />
          <Parrafo>9 de cada 10 médicos recomiendan leer su serie en ikigai mangas.</Parrafo>
          <FaDiscord />
        </ElementsColumnContainer>
        <ButtonsContainer>
          <Button>
            Condiciones del Servicio
          </Button>
          <Button>
            Política de Privacidad
          </Button>
          <Button>
            Acerca de Nosotros
          </Button>                
          <Button>
            Discord
          </Button>                
          <Button>
            Contacto
          </Button>
        </ButtonsContainer>
      </FooterContainer>
      <MadeWithContainer>

      </MadeWithContainer>
    </>
  );
};

// CSS-in-JS Styling
const FooterContainer = styled.header`
  display: flex;
  width: 100%;
  height: 45vh;
  margin-top: 120px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: rgb(25, 25, 25);
  border: 1px solid rgb(8, 8, 8);
  box-shadow: 0 7px 8px rgb(29, 29, 29);
  align-items: center;
  justify-content: space-around;
  position: relative;

  @media (max-width: 975px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 470px) {
    padding-left: 15px;
    padding-right: 15px;
  }


`;

const ElementsColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    img{
        width: clamp(150px, 20vw, 250px);
        margin-left: -10px;

    }

    svg{
        font-size: clamp(40px, 1vw, 40px);
    }

    @media (max-width: 700px) {
      width: 100%;
      justify-content: flex-start;
      margin-bottom: 20px;
  }
`;

const Parrafo = styled.p`
    color:rgb(164, 166, 168);
    font-size: clamp(20px, 1vw, 250px);
    line-height: 28px;
    width: 65%;
`;

const Button = styled.button`
    font-size: clamp(11px, 0.3vw, 18px);
    transition: background-color 0.3s;
    border: 1px solid #2b2727;
    cursor: pointer;
    background-color: inherit;
    color: rgb(216, 212, 212);
    padding: 15px;
    border-radius: 12px;
    display: flex;
    max-height: 185.31px;
    min-width: 164px;

      &:hover {
        border: 1px solid #f5f5f5;
      }

      @media (max-width: 460px) {
        min-width: 134px;

        @media (max-width: 440px) {
          min-width: 153px;
          max-width: 153px;
  }

  @media (max-width: 400px) {
         font-size: 3vw;
  }

  }
`;

const ButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(10px, 1vw, 18px);


    @media (max-width: 700px) {
      width: 100%;
      justify-content: flex-start;
  }

  @media (max-width: 450px) {
      width: 80%;
      align-self: flex-start;
  }
  @media (max-width: 400px) {
      width: 40%;
      gap: clamp(4px, 1vw, 18px);

  }
`;

const MadeWithContainer = styled.div`
   width: 100%; 
   
`;