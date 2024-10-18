import { useState, useEffect } from 'react';
import styled from 'styled-components';

// Contenedor del slider
const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100vw;
  height: 90vh;
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
const SliderImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: top -160px left 0px; /* Valor inicial para pantallas grandes */
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${props => (props.isActive ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;

  /* Ajustes según la altura de la pantalla */
  @media (max-height: 800px) {
    background-position: top -140px left 0px; /* Reducir desplazamiento conforme la altura es menor */
  }

  @media (max-height: 700px) {
    background-position: top -120px left 0px;
  }

  @media (max-height: 600px) {
    background-position: top -100px left 0px;
  }

  @media (max-height: 500px) {
    background-position: top -80px left 0px;
  }

  /* Ajustes según el ancho de la pantalla */
  @media (max-width: 1200px) {
    background-position: top -140px left 0px;
  }

  @media (max-width: 1024px) {
    background-position: top -120px left 0px; /* Ajustes para pantallas más pequeñas en ancho */
  }

  @media (max-width: 768px) {
    background-position: top -90px left 0px;
  }

  @media (max-width: 600px) {
    background-position: top -80px left 0px;
  }

  @media (max-width: 400px) {
    background-position: top -40px left 0px;
  }

  /* Combinación de ancho y altura (opcional, para ajustes más específicos) */
  @media (max-width: 768px) and (max-height: 600px) {
    background-position: top -70px left 0px;
  }

  /* Gradiente superpuesto */
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 60%, 
      rgba(0, 0, 0, 0.9) 100%
    ),
    linear-gradient(
      to left,
      rgba(0, 0, 0, 0) 70%, 
      rgba(0, 0, 0, 0.8) 100%
    );
  }
`;


// Estilos para el párrafo
const Paragraph = styled.p`
  font-size: clamp(1rem, 20vw, 30%);
  line-height: 1.5;
  opacity: ${props => (props.isActive ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  margin-left: 50px;

  @media (max-width: 800px) {
    font-size: clamp(0.8rem, 10vw, 20%);
    margin-left: 0px;

  }

  @media (max-width: 1024px) {
    margin-left: 0px;

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

// Contenedor de textos sobre la imagen
const TextContainer = styled.div`
  position: absolute;
  left: 100px;
  bottom: 40%; /* Controla la altura del contenedor del texto */
  color: white;
  z-index: 9;
  max-width: 40%;
  opacity: ${props => (props.isActive ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Ajuste de posición para pantallas grandes */
  @media (min-width: 1024px) {
    top: 60%; /* Fija la altura del texto y logo en pantallas de escritorio */
    left: 50px;
    transform: none;
  }

  @media (max-width: 800px) {
    left: 50%;
    bottom: 10%;
    transform: translateX(-50%);
    text-align: center;
    max-width: 80%;
    align-items: center; /* Centra los elementos en pantallas más pequeñas */
  }

  img {
    margin-bottom: 20px; /* Añade un margen inferior para espaciar el logo del texto */
    height: 200px;
    object-fit: contain;
  }
`;
// Estilos para la imagen del título (logo de Crunchyroll)
const TitleImage = styled.img`
  width: clamp(100px, 50%, 400px);
  min-width: 20px;
  height: auto;
  opacity: ${props => (props.isActive ? 1 : 0)};
  transition: opacity 2.5s ease-in-out;

  /* Fija la posición y aumenta el tamaño del logo en pantallas grandes */
  @media (min-width: 1024px) {
    position: absolute;
    top: -250px; /* Controla la altura del logo */
    left: 50px;
    width: clamp(250px, 60%, 600px); /* Aumenta el tamaño del logo en pantallas grandes */
  }

  @media (max-width: 770px) {
    position: absolute;
    bottom: -40px;
  }
`;


// Estilos para el título (solo cuando no es imagen)
const Title = styled.h1`
  font-size: clamp(5rem, 30vw, 50%);
  margin-bottom: 10px;
  background-color: transparent;
  opacity: ${props => (props.isActive ? 1 : 0)};
  transition: opacity 2s ease-in-out;

  @media (min-width: 1024px) {
    position: absolute;
    top: 20%; /* Controla la altura del título en pantallas grandes */
    left: 50px;
  }

  @media (max-width: 800px) {
    font-size: clamp(3rem, 20vw, 30%);
  }
`;


const images = [
  {
    url: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/quality=100,width=1680,blur=0/cr/portrait_large/c6359707-2c91-4bce-8d43-3b14bf94bda4.png',
    title: 'Título 1',
    description: 'Descripción de la imagen 1.',
    logo: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/cr/logo/3f7c196e-9f68-4292-9173-0ae553077741.png' 
  },
  {
    url: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=94,width=3100,blur=0/cr/landscape_large/0b4edcee-7a5a-4fd0-b33d-84378cd1c21d.png',
    title: 'Título 2',
    description: 'Descripción de la imagen 2.',
    logo: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/cr/logo/67a17a44-9ca2-419c-a761-5db1bb4e1b2d.png' 
  },
  {
    url: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=100,width=1820/cr/portrait_large/563cca93-dc6d-4236-a173-8ad507d0086a.png',
    title: 'Crunchyroll Logo',
    description: 'Lorem ipsun dolor',
    logo: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/cr/logo/8e93f0ee-1fd8-4041-af82-1c7156faad36.png' 
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
            <TextContainer isActive={index === currentIndex}>
              {/* Mostrar la imagen si está presente en lugar del texto */}
              {img.logo ? (
                <TitleImage src={img.logo} alt="Crunchyroll Logo" isActive={index === currentIndex} />
              ) : (
                <Title isActive={index === currentIndex}>{img.title}</Title>
              )}
              <Paragraph isActive={index === currentIndex}>{img.description}</Paragraph>
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
