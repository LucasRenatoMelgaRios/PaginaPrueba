import styled from "styled-components";
import { useState, useEffect } from "react";
import { GetBibliotecaData } from "../../services/GetBlbliotecaData";
import { GiMountains } from "react-icons/gi";
import { PiBookOpenTextLight } from "react-icons/pi";
import { CgTag } from "react-icons/cg";
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { Paginado } from "../Paginado";
import { FiFilter } from "react-icons/fi"; // Importa el ícono de filtro

export const ResultadosSection = ({ searchQuery, setSelectedObra }) => {
    const [obras, setObras] = useState([]);
    const [filteredObras, setFilteredObras] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchInput, setSearchInput] = useState(""); // Estado para manejar el input del buscador
    const itemsPerPage = 15;
    const navigate = useNavigate(); // Crea una instancia de useNavigate

    useEffect(() => {
        console.log("Listando obras");
        const fetchData = async () => {
            const data = await GetBibliotecaData();
            setObras(data);
            console.log("Obras cargadas:", data);
        };
    
        fetchData();
    }, []);

    useEffect(() => {
        console.log("Filtrando obras con query:", searchQuery);
        if (searchQuery.trim() !== "") {
            const filteredResults = obras.filter((obra) => {
                const obraNombreLower = obra.nombre.toLowerCase().trim();
                const searchQueryLower = searchQuery.toLowerCase().trim();
                console.log(`Comparando: ${obraNombreLower} con ${searchQueryLower}`);
                const match = obraNombreLower.includes(searchQueryLower);
                console.log(`¿Coincide? ${match}`);
                return match;
            });
            setFilteredObras(filteredResults);
            console.log("Resultados filtrados:", filteredResults);
        } else {
            setFilteredObras(obras);
        }
    }, [obras, searchQuery]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentObras = filteredObras.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleCardClick = (obra) => {
        setSelectedObra(obra); // Guarda la obra seleccionada
        navigate('/obra-info'); // Navega a la página de información de la obra
    };

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
        // Aquí puedes agregar lógica para filtrar las obras mientras se escribe
    };

    return (
        <MainContainer>
            <FirstPartContainer>
                <h1>Biblioteca</h1>
                <Parrafo>Filtros</Parrafo>
                <SearchBarContainer>
                    <SearchInput
                        type="text"
                        placeholder="Buscar..."
                        value={searchInput}
                        onChange={handleSearchInputChange}
                    />
                    <SearchIcon>
                        <FiFilter size={24} />
                    </SearchIcon>
                </SearchBarContainer>
            </FirstPartContainer>

            {filteredObras.length > 0 ? (
                <>
                    <Parrafo>{filteredObras.length} Obras</Parrafo>
                    <CardsGridContainer>
                        {currentObras.map((obra) => (
                            <Card key={obra.id} onClick={() => handleCardClick(obra)}>
                                <CardContainer>
                                    <img src={obra.avatar} alt={obra.nombre} />
                                </CardContainer>
                                <CardContent>
                                    <ContainerFlex>
                                        <InfoElement estado={obra.estado}>
                                            <GiMountains /> {obra.estado}
                                        </InfoElement>
                                        <InfoElement>
                                            <PiBookOpenTextLight /> {obra.capitulos} capítulos
                                        </InfoElement>
                                        <InfoElement>
                                            <CgTag /> {obra.tipo}
                                        </InfoElement>
                                    </ContainerFlex>
                                    <Title>{obra.nombre}</Title>
                                </CardContent>
                            </Card>
                        ))}
                    </CardsGridContainer>
                    <Paginado
                        itemsPerPage={itemsPerPage}
                        totalItems={filteredObras.length}
                        paginate={paginate}
                        currentPage={currentPage}
                    />
                </>
            ) : (
                <p>No se encontraron resultados para "{searchQuery}".</p>
            )}
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

const FirstPartContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 88%;
    margin-bottom: 300px;

`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  background-color: #333;
  
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background-color: transparent;
  color: #fff;
  padding-left: 10px;
`;

const SearchIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ContainerFlex = styled.div`
  display: flex;
  gap: 6px;
  width: 100%;
`;

const CardsGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  padding: 20px;
  width: 100%;

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
  width: 100%;
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
  flex: 1;
  overflow: hidden;
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
  width: calc(100% - 0px);
`;

const Parrafo = styled.p`
    font-size: clamp(15px, 1.3vw, 65px);
    font-weight: bold;
`;
