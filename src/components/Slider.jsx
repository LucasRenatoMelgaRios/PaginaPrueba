import { useState, useEffect } from 'react';
import styled from 'styled-components';

// Contenedor del slider
const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: black;
  margin-top: 20px;

  @media (max-width: 1024px) {
    height: 50vh; 
  }

  @media (max-width: 768px) {
    height: 40vh;
  }
`;

// Imágenes del slider
// Imágenes del slider con gradiente en la parte inferior e izquierda
const SliderImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  /* background-position: top -60px; */
  background-position: top -70px left 0px;

    background-size: cover; /* O prueba con contain según lo que necesites */
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${props => (props.isActive ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 60%, /* Parte superior más transparente */
      rgba(0, 0, 0, 0.9) 100% /* Parte inferior más oscura */
    ),
    linear-gradient(
      to left,
      rgba(0, 0, 0, 0) 70%, /* Lado derecho más transparente */
      rgba(0, 0, 0, 0.8) 100% /* Lado izquierdo más oscuro */
    );
  }
`;

// Contenedor de textos sobre la imagen
const TextContainer = styled.div`
  position: absolute;
  left: 100px;
  bottom: 40%;
  color: white;
  z-index: 9;
  max-width: 40%;
  background-color: transparent;

  @media (max-width: 800px) {
    left: 50%;
    bottom: 10%;
    transform: translateX(-50%);
    text-align: center;
    max-width: 80%;
  }
`;

// Estilos para la imagen del título (logo de Crunchyroll)
const TitleImage = styled.img`
  width: clamp(100px, 50%, 400px);
  max-width: 100%;
  height: auto;
`;

// Estilos para el título (solo cuando no es imagen)
const Title = styled.h1`
  font-size: clamp(5rem, 30vw, 50%);
  margin-bottom: 10px;
  background-color: transparent;

  @media (max-width: 800px) {
    font-size: clamp(3rem, 20vw, 30%);
  }
`;

// Estilos para el párrafo
const Paragraph = styled.p`
  font-size: clamp(1rem, 20vw, 30%);
  line-height: 1.5;
  background-color: transparent;

  @media (max-width: 800px) {
    font-size: clamp(0.8rem, 10vw, 20%);
  }
`;

// Botones de navegación
const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  padding: 10px;
  cursor: pointer;
  z-index: 9;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  ${props => (props.direction === 'left' ? 'left: 20px;' : 'right: 20px;')}
`;

const images = [
  {
    url: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/quality=100,width=1680,blur=0/cr/portrait_large/c6359707-2c91-4bce-8d43-3b14bf94bda4.png',
    title: 'Título 1',
    description: 'Descripción de la imagen 1.',
    logo: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/cr/logo/3f7c196e-9f68-4292-9173-0ae553077741.png' 
  },
  {
    url: 'https://anime-dandadan.com/_assets/images/top/fv/fv_003_pc.png?202406',
    title: 'Título 2',
    description: 'Descripción de la imagen 2.',
    logo: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/cr/logo/67a17a44-9ca2-419c-a761-5db1bb4e1b2d.png' 
  },
  {
    url: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/a72f74e160304530a2131fe8b765a3a5.jpg',
    title: 'Crunchyroll Logo',
    description: 'Descro',
    logo: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/cr/logo/67a17a44-9ca2-419c-a761-5db1bb4e1b2d.png' 

  }
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 5000);

    return () => clearInterval(interval); 
  }, [totalImages]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  return (
    <SliderContainer>
      {images.map((img, index) => (
        <div key={index}>
          <SliderImage
            image={img.url}
            isActive={index === currentIndex}
          />
          {index === currentIndex && (
            <TextContainer>
              {/* Mostrar la imagen si está presente en lugar del texto */}
              {img.logo ? (
                <TitleImage src={img.logo} alt="Crunchyroll Logo" />
              ) : (
                <Title>{img.title}</Title>
              )}
              <Paragraph>{img.description}</Paragraph>
            </TextContainer>
          )}
        </div>
      ))}
      <NavigationButton direction="left" onClick={prevImage}>
        &#10094;
      </NavigationButton>
      <NavigationButton direction="right" onClick={nextImage}>
        &#10095;
      </NavigationButton>
    </SliderContainer>
  );
};

export default Slider;
