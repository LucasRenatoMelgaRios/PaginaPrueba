import styled from "styled-components";
import { useState, useEffect, Suspense, lazy } from "react";
import { GetSeriesData } from "../services/GetSeriesData";
import { BsSmartwatch } from "react-icons/bs";
import { Paginado } from "./Paginado";
import LoadingImage from "./LoadingImage"; // Importa el componente de carga

// Utiliza lazy para importar el componente LazyImage
const LazyImage = lazy(() => import("./LazyImage"));


export const SeriesSection = () => {
  const [series, setSeries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetSeriesData();
      setSeries(data);
    };

    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentSeries = series.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <MainContainer>
      <TitleSection style={{ fontSize: "clamp(14px, 1.6vw, 18px)", marginBottom: "20px" }}>Nuevos capítulos</TitleSection>
      <CardsGridContainer>
        {currentSeries.map((serie) => (
          <Card key={serie.id}>
            <Suspense fallback={<LoadingImage />}>
              <LazyImage src={serie.imagen} alt={serie.nombre} />
            </Suspense>
            <CardContent>
              <ContainerFlex>
                <Badge tipo={serie.tipo}>{serie.tipo}</Badge>
                <Title>{serie.nombre}</Title>
              </ContainerFlex>
              <ChapterInfo>Capítulo {serie.capitulo}</ChapterInfo>
              <ContainerFlex>
                <BsSmartwatch />
                <TimeAgo>{serie.subido_hace}</TimeAgo>
              </ContainerFlex>
            </CardContent>
          </Card>
        ))}
      </CardsGridContainer>
      <Paginado
        itemsPerPage={itemsPerPage}
        totalItems={series.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </MainContainer>
  );
};

// Estilos CSS
const MainContainer = styled.main`
  width: 100%;
  padding-left: 100px;
  padding-right: 100px;
  margin-top: 50px;
  margin-bottom: 50px;

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
  
  `

const ContainerFlex = styled.div`
  display: flex;
  gap: 6px;
`;

const CardsGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Dos columnas de igual tamaño */
  gap: 20px; /* Espacio entre los elementos del grid */
  padding: 20px;

  @media (max-width: 868px) {
    grid-template-columns: 1fr; /* Una columna en pantallas más pequeñas */
  }
`;

const Card = styled.div`
  background-color: #161616;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  max-height: 12vh;
  padding: 3px;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid #3f3b3b;
  min-width: 322px;

  &:hover {
    border: 1px solid #ffff;
  }
`;

const CardContent = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1; /* Asegura que use todo el espacio disponible en el contenedor padre */
  overflow: hidden; /* Asegura que el contenido adicional se oculte */
`;

const Badge = styled.span`
  display: inline-block;
  background-color: ${({ tipo }) =>
    tipo === "Cómic" ? "rgb(14, 165, 233)" : "rgb(98, 195, 112)"};
  color: #000000;
  border-radius: 15px;
  padding: 2px 8px;
  font-size: 0.8em;
  margin-bottom: 8px;
  max-height: 20.34px;
`;

const Title = styled.h2`
  font-size: 1em;
  margin: 0 0 5px;
  color: #afafaf;
  white-space: nowrap; /* Evita el salto de línea */
  overflow: hidden; /* Esconde el texto que desborda */
  text-overflow: ellipsis; /* Aplica los puntos suspensivos */
  width: calc(100% - 60px); /* Ajusta el ancho para permitir espacio al Badge */
`;

const ChapterInfo = styled.div`
  font-size: clamp(14px, 1.5vw, 18px);
  color: #ffffff;
  font-weight: bold;
`;

const TimeAgo = styled.div`
  font-size: 0.8em;
  color: #d4d4d4;
`;