import styled, { keyframes } from "styled-components";

// Definición de la animación de parpadeo
const pulseAnimation = keyframes`
  0% {
    background-color: #f0f0f0;
  }
  50% {
    background-color: #e0e0e0;
  }
  100% {
    background-color: #f0f0f0;
  }
`;

// Contenedor de la carga con animación
const LoadingContainer = styled.div`
  width: 100%; /* Asegura que ocupa todo el contenedor del padre */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${pulseAnimation} 1.5s infinite;
  border-radius: 1px;
`;

const LoadingImage = () => {
  return (
    <LoadingContainer>
      <h3 style={{ color: "#888", fontSize: "1.2em" }}>Loading...</h3>
    </LoadingContainer>
  );
};

export default LoadingImage;