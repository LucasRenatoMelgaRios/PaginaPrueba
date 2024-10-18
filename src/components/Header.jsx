import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import marca from "../assets/nombrePagina.png";
import user from "../assets/userImage.png";
import { Buscador } from "./Buscador";
import { FaBars } from "react-icons/fa";

export const Header = ({ setSearchQuery }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((menuOpen) => !menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 740) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <HeaderContainer>
        <HeaderWrapper>
          <LogoContainer>
            <Link to="/">
              <img src={marca} alt="Marca" />
            </Link>
          </LogoContainer>

          {/* NavBar: Se ocultará en pantallas pequeñas */}
          <NavBar>
            <ul>
              <li>
                <StyledLink to="/">Inicio</StyledLink>
              </li>
              <li>
                <StyledLink to="/biblioteca">Biblioteca</StyledLink>
              </li>
              <li>
                <StyledLink to="/clasificacion">Clasificación</StyledLink>
              </li>
              <li>
                <StyledLink to="/grupos">Grupos</StyledLink>
              </li>
            </ul>
          </NavBar>

          <UserContainer>
            <Buscador setSearchQuery={setSearchQuery} />
            <img src={user} alt="Usuario" />
            
            {/* HamburgerIcon: Solo se mostrará en pantallas pequeñas */}
            <HamburgerIcon onClick={toggleMenu}>
              <FaBars size={24} color="#fff" />
            </HamburgerIcon>
          </UserContainer>
        </HeaderWrapper>
      </HeaderContainer>

      {/* Menú móvil que se activa con el icono de la hamburguesa */}
      {menuOpen && (
        <MobileNav>
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/biblioteca" onClick={toggleMenu}>
                Biblioteca
              </Link>
            </li>
            <li>
              <Link to="/clasificacion" onClick={toggleMenu}>
                Clasificación
              </Link>
            </li>
            <li>
              <Link to="/grupos" onClick={toggleMenu}>
                Grupos
              </Link>
            </li>
          </ul>
        </MobileNav>
      )}
    </>
  );
};

// CSS-in-JS Styling
const HeaderContainer = styled.header`
  display: flex;
  width: 100vw;
  max-width: 100%;
  margin: 0;
  padding: 0;
  height: clamp(40px, 6vh, 100px);
  background-color: rgb(25, 25, 25);
  box-shadow: 0 7px 8px rgb(29, 29, 29);
  align-items: center;
  justify-content: center;
  position: relative;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  gap: clamp(10px, 5vw, 30px);
  justify-content: space-between;
  padding: 0 clamp(10px, 2vw, 20px);
  margin-top: clamp(10px, 2vh, 20px);

  @media (max-width: 865px) {
    justify-content: space-around;
  }
`;

const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: clamp(50px, 10vw, 120px);
    margin-top: 5px;
  }
`;

// Mostrar solo en pantallas grandes
const NavBar = styled.nav`
  flex: 3;
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    gap: clamp(5px, 1.5vw, 20px);
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  ul > li > a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    font-size: clamp(10px, 0.7vw, 16px);
  }

  @media (max-width: 865px) {
    display: none; /* Ocultar el NavBar en pantallas pequeñas */
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: clamp(25px, 3vw, 50px);
  }

  @media (max-width: 500px) {
    img {
      display: none;
    }
  }
`;

// Icono de la hamburguesa: Mostrar solo en pantallas pequeñas
const HamburgerIcon = styled.div`
  display: none;

  @media (max-width: 865px) {
    display: block;
    cursor: pointer;
  }
`;

// MobileNav: Menú móvil
const MobileNav = styled.nav`
  position: fixed; /* Asegúrate de que esté fijo en la parte superior */
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(5, 4, 4, 0.95); /* Fondo más opaco */
  height: 100vh; /* Ocupa toda la altura de la pantalla */
  z-index: 10; /* Asegúrate de que esté encima de otros elementos */
  display: flex;
  justify-content: center;
  align-items: center; /* Centrar verticalmente el contenido */
  flex-direction: column; /* Alinear el contenido en una columna */
  overflow-y: auto; /* Habilitar el desplazamiento si es necesario */

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    gap: 20px;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 15px;
    }

    a {
      color: #fff;
      text-decoration: none;
      font-weight: bold;
      font-size: 18px;
    }
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-size: clamp(14px, 2vw, 16px);
  padding: 5px 15px;
  border: 1px solid #2b2727;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    border: 1px solid #f5f5f5;
  }
`;
