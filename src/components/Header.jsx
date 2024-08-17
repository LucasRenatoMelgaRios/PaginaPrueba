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

  console.log("Header received setSearchQuery:", setSearchQuery); // Verifica que se recibe correctamente


  return (
    <>
      <HeaderContainer>
        <HeaderWrapper>
          <LogoContainer>
            <Link to="/">
              <img src={marca} alt="Marca" />
            </Link>
          </LogoContainer>
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
            <HamburgerIcon onClick={toggleMenu}>
              <FaBars size={24} color="#fff" />
            </HamburgerIcon>
          </UserContainer>
        </HeaderWrapper>
      </HeaderContainer>

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
  width: 100%;
  height: clamp(60px, 8vh, 100px);
  margin-top: 20px;
  background-color: rgb(25, 25, 25);
  border: 1px solid rgb(8, 8, 8);
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
  gap: 10px;
  justify-content: space-between;
  padding: 0 20px;

  @media (max-width: 500px) {
    gap: 5px; /* Reduce the gap for smaller screens */
  }
`;

const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: clamp(80px, 15vw, 120px);
    margin-top: 5px;
  }
`;

const NavBar = styled.nav`
  flex: 3;
  margin-right: 200px;
  ul {
    display: flex;
    gap: clamp(5px, 1.5vw, 20px);
    justify-content: space-around;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;

    @media (max-width: 865px) {
    }
  }

  ul > li > a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    font-size: clamp(10px, 0.7vw, 16px);
    
  }

`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Reduced gap for mobile screens */

  img {
    width: clamp(25px, 3vw, 50px);
  }

  @media (max-width: 500px) {
    img {
      display: none; /* Hide the user image on smaller screens to save space */
    }
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 865px) {
    display: block;
  }
`;

const MobileNav = styled.nav`
  position: absolute;
  top: 10%; /* Position directly below the header */
  left: 0;
  right: 0;
  background-color: rgba(5, 4, 4, 0.8);
  backdrop-filter: blur(10px); /* Apply blur effect */
  z-index: 2; /* Ensure it appears above other elements */
  padding: 20px 0;
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    gap: 10px;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 15px;
    }

    a {
      color: #fff;
      text-decoration: none;
      font-weight: bold;
      font-size: 18px; /* Larger font size for mobile menu */
    }
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-size: clamp(22px, 0.7vw, 26px);
  padding: 5px 15px;
  border: 1px solid #2b2727;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    border: 1px solid #f5f5f5;
  }
`;