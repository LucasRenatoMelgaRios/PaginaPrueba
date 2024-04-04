import styled from "styled-components"
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
`;


const CardsContainer = styled.div`
    display: flex;
    max-width: 100%;
    justify-content: center;
   gap: 20px;
    margin: 30px;
`;

const Card = styled.div`
    border-radius: 30px;
    display: flex;
    max-width: 220px;
    flex-direction: column;
    background-color: #4b277e;
    border: 2px groove black;
    overflow: hidden;
    flex: 1;
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 300px;
    overflow: hidden;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.7s, transform-origin 0.4s; /* Agregar transición para la propiedad transform y transform-origin */
        cursor: pointer;
        z-index: 10;


        &:hover{
            transform: scale(1.1) translateY(-1%);
            transform-origin: center center;
        }
 }
`;

const TextContainer = styled.div`
    width: 100%;
    text-align: center;
    font-family: "Comic Neue", cursive;
    color: #ffffff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    p{
    color: #ffff;
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
`;

export const Cards = ({ data }) => {
    return (
        <>
            <CardsContainer>
                {data.waifus.map((waifu => (
                    <Card key={waifu.id}>
                        <ImageContainer>
                            <img src={waifu.img} alt="" />
                        </ImageContainer>
                        <TextContainer>
                            <h1>{waifu.name}</h1>
                            <p>{waifu.description}</p>
                            <SimpleButton>Ver más acerca de {waifu.name} </SimpleButton>
                        </TextContainer>
                    </Card>
                )))}
            </CardsContainer>
        </>
    )
}