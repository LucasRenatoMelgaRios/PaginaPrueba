import styled from "styled-components";
import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa"; // Importa los iconos

export const InfoSerieSection = ({ selectedSerie, setSelectedSerie }) => {
  const [expanded, setExpanded] = useState(false); // Estado para controlar si la descripción está expandida

  const handleToggleExpand = () => {
    setExpanded(!expanded); // Cambia el estado de expandido al hacer clic en el botón
  };

  // Verifica si la serie seleccionada está disponible
  if (!selectedSerie) {
    return <p>Seleccione una serie para ver más detalles.</p>;
  }

  return (
    <MainContainer>
      <SeriesContainer>
        <Card expanded={expanded}>
          <ImageContainer>
            <img src={selectedSerie.imagen} alt={selectedSerie.nombre} />
          </ImageContainer>
          <ContentContainer expanded={expanded}>
            <Title>{selectedSerie.nombre}</Title> {/* Mostrar el nombre de la serie */}
            <Text expanded={expanded}>
              Yura, que sufre de fobia al contacto físico, solo está con su
              amigo de la infancia Hae-won, pero cuando conoce a Go In woo,
              Kwon Mina y otras personas, aprende nuevas emociones y construye
              relaciones verdaderas.
            </Text>
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
      </SeriesContainer>
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

const SeriesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 16vw;
  height: ${(props) => (props.expanded ? "820px" : "720px")};
  min-height: 720px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid #3f3b3b;
  border-radius: 12px;
  padding: 3px;
  transition: height 0.3s ease; /* Animación suave para el cambio de altura */
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
  gap: 10px;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: clamp(12px, 1.4vw, 28px);
`;

const Text = styled.p`
  font-size: clamp(8px, 0.7vw, 18px);
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
  margin-top: 10px;
  flex: 3;
  align-items: end;
`;

const Category = styled.button`
  background-color: #221f1f;
  color: #fff;
  border: none;
  border-radius: 18px;
  padding: 8px 12px;
  height: 70%;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  font-size: clamp(8px, 0.5vw, 18px);

  &:hover {
    background-color: #555;
  }
`;
