import styled from "styled-components";
import { useState, useEffect, Suspense, lazy } from "react";
import { GetBibliotecaData } from "../../services/GetBlbliotecaData";
import { Paginado } from "../Paginado";
import { GiMountains } from "react-icons/gi";
import { PiBookOpenTextLight } from "react-icons/pi";
import { CgTag } from "react-icons/cg";
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

export const BibliotecaSection = ({ setSelectedObra }) => { // Recibe setSelectedObra
    const [obras, setObras] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;
    const navigate = useNavigate(); // Crea una instancia de useNavigate

    useEffect(() => {
        const fetchData = async () => {
            const data = await GetBibliotecaData();
            setObras(data);
        };

        fetchData();
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentObras = obras.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleCardClick = (obra) => {
        setSelectedObra(obra); // Guarda la obra seleccionada
        navigate('/obra-info'); // Navega a la página de información de la obra
    };

    return (
        <MainContainer>
            <TitleSection>Últimas series</TitleSection>
            <CardsGridContainer>
                {currentObras.map((obra) => (
                    <Card key={obra.id} onClick={() => handleCardClick(obra)}>
                        <CardContainer>
                            <img src={obra.avatar} alt="" />
                        </CardContainer>
                        <CardContent>
                            <ContainerFlex>
                                <InfoElement estado={obra.estado}>
                                    <GiMountains />
                                    {obra.estado}
                                </InfoElement>
                                <InfoElement>
                                    <PiBookOpenTextLight />
                                    {obra.capitulos} capitulos
                                </InfoElement>
                                <InfoElement>
                                    <CgTag />
                                    {obra.tipo}
                                </InfoElement>
                            </ContainerFlex>
                            <Title>{obra.nombre}</Title>
                        </CardContent>
                    </Card>
                ))}
            </CardsGridContainer>
            <Paginado
                itemsPerPage={itemsPerPage}
                totalItems={obras.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </MainContainer>
    );
};

// Estilos CSS
const MainContainer = styled.main`
  width: 100%;
  padding-left: 150px;
  padding-right: 150px;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 2100px) {
    padding-left: 50px;
    padding-right: 50px;
  }

  @media (max-width: 670px) {
    padding-left: 50px;
    padding-right: 50px;
  }
  @media (max-width: 500px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const TitleSection = styled.h1`
  margin-bottom: 20px;
  font-size: clamp(14px, 1.5vw, 18px);
  padding-left: 20px;
`;

const ContainerFlex = styled.div`
  display: flex;
  gap: 6px;
  width: 100%;
`;

const CardsGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Ajuste automático de columnas */
  gap: 10px;
  padding: 20px;
  width: 100%; /* Ancho máximo permitido */
  @media (max-width: 2268px) {
    width: 90%;
  }

  @media (max-width: 2000px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 868px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;
const CardContainer = styled.div`
    width: 100%;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
    }
`;

const Card = styled.div`
  background-color: #161616;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 3px;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid #3f3b3b;
  &:hover {
    border: 1px solid #ffff;
  }
`;

const CardContent = styled.div`
  padding: 15px 5px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex: 1; /* Asegura que use todo el espacio disponible en el contenedor padre */
  overflow: hidden; /* Asegura que el contenido adicional se oculte */
  align-items: center;
`;

const InfoElement = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  border-radius: 15px;
  padding: 2px 8px;
  font-size: clamp(11px, 0.6em, 18px);
  max-height: 20.34px;
  background-color: ${({ estado }) => estado === "En Curso" ? "rgb(129, 140, 248)" : "inherit"};
  color: ${({ estado }) => estado === "En Curso" ? "#312e2e" : "#9b9696"}; 
`;


const Title = styled.h2`
  font-size: 1em;
  margin: 0 0 5px;
  color: #e9e9e9;
  width: calc(100% - 0px); /* Ajusta el ancho para permitir espacio al Badge */
`;

