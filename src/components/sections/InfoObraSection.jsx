import styled from "styled-components";
import { FaArrowDown, FaArrowUp, FaRegHeart } from "react-icons/fa"; // Importa los iconos
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paginado } from "../Paginado"; // Asumimos que tienes un componente Paginado

export const InfoObraSection = ({ selectedObra }) => {
  const [expanded, setExpanded] = useState(false); // Estado para controlar si la descripción está expandida
  const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual
  const [isAscending, setIsAscending] = useState(true); // Estado para el orden ascendente/descendente
  const itemsPerPage = 15; // Número de elementos por página
  const navigate = useNavigate(); // Hook para redirección

  const handleToggleExpand = () => {
    setExpanded(!expanded); // Cambia el estado de expandido al hacer clic en el botón
  };

  const toggleSortOrder = () => {
    setIsAscending(!isAscending); // Cambia el orden ascendente/descendente
  };

  // Verifica si la obra seleccionada está disponible
  if (!selectedObra) {
    // Redirigir a la página de inicio si no hay obra seleccionada
    navigate("/");
    return null; // Asegúrate de devolver null para no renderizar el componente
  }

  // Generar capítulos simulados
  const capitulos = Array.from({ length: selectedObra.capitulos }, (_, i) => ({
    numero: i + 1,
    fecha: "Hace 10 meses", // Usar una fecha ficticia
    likes: Math.floor(Math.random() * 20) + 1, // Generar un número aleatorio de likes
    imagen: selectedObra.avatar, // Usar la imagen de la obra
  }));

  // Ordenar capítulos según el estado isAscending
  const sortedCapitulos = [...capitulos].sort((a, b) => {
    return isAscending ? a.numero - b.numero : b.numero - a.numero;
  });

  // Calcular índices de los elementos actuales
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCapitulos = sortedCapitulos.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Manejar el cambio de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <MainContainer>
      <ObraContainer>
        <Card expanded={expanded}>
          <Overlay>
            <Category>{selectedObra.tipo}</Category>
            <Category>En Curso</Category>
          </Overlay>
          <ImageContainer>
            <img src={selectedObra.avatar} alt={selectedObra.nombre} />
          </ImageContainer>
          <ContentContainer expanded={expanded}>
            <Title>{selectedObra.nombre}</Title> {/* Mostrar el nombre de la obra */}
            <Text expanded={expanded}>{selectedObra.descripcion}</Text>
            <Button onClick={handleToggleExpand}>
              {expanded ? (
                <>
                  Ver menos <FaArrowUp /> {/* Flecha hacia arriba */}
                </>
              ) : (
                <>
                  Ver más <FaArrowDown /> {/* Flecha hacia abajo */}
                </>
              )}
            </Button>
            <CategoriasContainer>
              <Category>Romance</Category>
              <Category>Drama</Category>
              <Category>Vida Escolar</Category>
            </CategoriasContainer>
          </ContentContainer>
        </Card>

        {/* Sección de capítulos */}
        <CapitulosContainer>
          <CapitulosHeader>
            <CapitulosTitle>{selectedObra.capitulo} Capítulos</CapitulosTitle>
            <SortButton onClick={toggleSortOrder}>
              {isAscending ? "Ascendente" : "Descendente"}{" "}
              <SortIcon isAscending={isAscending} />
            </SortButton>
          </CapitulosHeader>
          <CapituloGrid>
            {currentCapitulos.map((capitulo) => (
              <CapituloCard key={capitulo.numero}>
                <CapituloImage
                  src={capitulo.imagen}
                  alt={`Capítulo ${capitulo.numero}`}
                />
                <CapituloDetails>
                  <CapituloTitle>Capítulo {capitulo.numero}</CapituloTitle>
                  <CapituloInfo>
                    <span>{capitulo.fecha}</span>
                    <LikesContainer>
                      <FaRegHeart />
                      <span>{capitulo.likes}</span>
                    </LikesContainer>
                  </CapituloInfo>
                </CapituloDetails>
              </CapituloCard>
            ))}
          </CapituloGrid>
          <Paginado
            itemsPerPage={itemsPerPage}
            totalItems={capitulos.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </CapitulosContainer>
      </ObraContainer>
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

const ObraContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;

  @media (max-width: 988px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  min-width: 320px;
  height: ${(props) => (props.expanded ? "820px" : "720px")};
  min-height: 720px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid #3f3b3b;
  border-radius: 12px;
  padding: 3px;
  transition: height 0.3s ease; /* Animación suave para el cambio de altura */
  position: relative; /* Necesario para el posicionamiento del overlay */
`;

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  span {
    font-size: clamp(10px, 0.4vw, 18px);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 450px; /* Fija la altura de la imagen para que no cambie */

  img {
    width: 100%;
    height: 450px;
    object-fit: cover;
    border-radius: 12px;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  padding: 10px;
  height: 40%; /* Ajusta la altura del contenedor de contenido */
  flex: 1; /* Permite que el contenedor crezca para llenar el espacio disponible */
  display: flex;
  flex-direction: column;

`;

const Title = styled.h2`
  font-size: clamp(22px, 1.4vw, 28px);
`;

const Text = styled.p`
  font-size: clamp(15px, 0.6vw, 19px);
  color: #dddddd;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.expanded ? "none" : 3)}; /* Limita a 3 líneas si no está expandido */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Button = styled.button`
  width: 40%;
  margin-top: 10px;
  background-color: inherit;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 28px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid #3f3b3b;
  white-space: nowrap; /* Evita el salto de línea */
  font-size: clamp(8px, 0.6vw, 18px);

  svg {
    margin-top: 2px;
    font-size: clamp(10px, 0.6vw, 17px);
  }
`;

const CategoriasContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex: 3;
  align-items: end;
`;

const Category = styled.span`
  background-color: #1c1c1c;
  color: #fff;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: bold;
`;

// Nuevos estilos para los capítulos

const CapitulosContainer = styled.div`
  width: 70%;
`;

const CapitulosHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CapitulosTitle = styled.h2`
  font-size: 24px;
  color: #fff;
`;

const SortButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

const SortIcon = styled(FaArrowDown)`
  margin-left: 5px;
  transform: ${({ isAscending }) =>
    isAscending ? "rotate(0)" : "rotate(180deg)"};
  transition: transform 0.3s ease;
`;

const CapituloGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Dos columnas para pantallas grandes */
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Una columna para pantallas pequeñas */
  }
`;

const CapituloCard = styled.div`
  display: flex;
  background-color: #161616;
  border-radius: 8px;
  padding: 10px;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid #3f3b3b;
  transition: transform 0.2s;
  cursor: pointer;
  max-height: 75px;

  &:hover {
    transform: scale(1.02);
  }
`;

const CapituloImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;

const CapituloDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Permite que el contenido del capítulo use todo el espacio disponible */
`;

const CapituloTitle = styled.h3`
  font-size: 18px;
  color: #fff;
  margin: 0;
`;

const CapituloInfo = styled.div`
  font-size: clamp(14px, 0.7vw, 18px);
  color: #9b9b9b;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Asegura que los elementos se distribuyan correctamente */
  gap: 10px;
`;

const LikesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  svg {
    margin-right: 3px;
  }
`;
