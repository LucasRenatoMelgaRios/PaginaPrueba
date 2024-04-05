import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Define el tamaño mínimo y máximo de las columnas */
  grid-gap: 10px; /* Espacio entre los elementos */
  max-width: 100%;
  margin: 0 auto; /* Margen vertical de 30px y horizontal automático para centrar */
  align-items: stretch; /* Estirar elementos para que tengan la misma altura */
  align-content: center; /* Centrar horizontalmente los elementos */
`;

const Card = styled.div`
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  background-color: #bfbfbf;
  border: 2px groove black;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 70%;
  overflow: hidden;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.7s, transform-origin 0.4s; /* Agregar transición para la propiedad transform y transform-origin */
    cursor: pointer;
    z-index: 10;

    &:hover {
      transform: scale(1.1) translateY(-1%);
      transform-origin: center center;
    }
  }
`;

const TextContainer = styled.div`
  width: 100%;
  height: 30%;
  text-align: center;
  font-family: "Comic Neue", cursive;
  color: #060404;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  p {
    color: #000000;
  }
`;

const SimpleButton = styled.button`
  font-family: "Montserrat", sans-serif;
  padding: 5px;
  padding-left: 20px;
  padding-right: 20px;
  border: 0;
  border-radius: 20px;
  background-color: #181a7f;
  color: #ffff;
  border: 2px solid white;
`;

export const Cards = ({ data }) => {
    const [isVisible, setIsVisible] = useState(true);
  
    function handleClick() {
        setIsVisible(isVisible => !isVisible);
    }

    const waifusEstudiantes = data.waifus.filter(waifu =>{  //las llaves permiten escribir más de una linea, pero deben tener el RETURN 
      return waifu.rol === "estudiante"})

  
    return (
      <>
        <SimpleButton onClick={handleClick}>
          {isVisible ? 'Ocultar cards' : 'Mostrar cards'}
        </SimpleButton>
        <CardsContainer>
          {isVisible && data.waifus.map((waifu) => (
            <Card key={waifu.id}>
              <ImageContainer>
                <img src={waifu.img} alt="" />
              </ImageContainer>
              <TextContainer>
                <h1>{waifu.name}</h1>
                <p>{waifu.description}</p>
                <SimpleButton>Ver más acerca de {waifu.name}</SimpleButton>
              </TextContainer>
            </Card>
          ))}
        </CardsContainer>
        {/* <h1>Waifus estudiantes:</h1>
        <CardsContainer>
            {waifusEstudiantes.map((waifu) =>(
               <Card key={waifu.id}>
               <ImageContainer>
                 <img src={waifu.img} alt="" />
               </ImageContainer>
               <TextContainer>
                 <h1>{waifu.name}</h1>
                 <p>{waifu.description}</p>
                 <SimpleButton>Ver más acerca de {waifu.name}</SimpleButton>
               </TextContainer>
             </Card>
            ))}
        </CardsContainer> */}
      </>
    );
  };
