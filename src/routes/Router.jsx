import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { HomePage } from '../Pages/HomePage';
import { BibliotecaPage } from '../Pages/BibliotecaPage';
import { ClasificacionPage } from '../Pages/ClasificacionPage';
import { GruposPage } from '../Pages/GruposPage';
import { FavoritosFeedPage } from '../Pages/FavoritosFeedPage';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { InfoSeriePage } from "../Pages/InfoSeriePage";
import { InfoObraPage } from "../Pages/InfoObraPage"; // Nueva página para la obra
import { useState, useEffect } from "react";
import styled from "styled-components";

export const MyRouters = ({ selectedSerie, setSelectedSerie, selectedObra, setSelectedObra }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
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
    <HashRouter>
      <Header />
      {menuOpen && (
        <MobileNav>
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>Inicio</Link>
            </li>
            <li>
              <Link to="/biblioteca" onClick={toggleMenu}>Biblioteca</Link>
            </li>
            <li>
              <Link to="/clasificacion" onClick={toggleMenu}>Clasificación</Link>
            </li>
            <li>
              <Link to="/grupos" onClick={toggleMenu}>Grupos</Link>
            </li>
            <li>
              <Link to="/favoritos-feed" onClick={toggleMenu}>Favoritos Feed</Link>
            </li>
          </ul>
        </MobileNav>
      )}
      <Routes>
        <Route path="/" element={<HomePage setSelectedSerie={setSelectedSerie} />} />
        <Route path="/biblioteca" element={<BibliotecaPage setSelectedObra={setSelectedObra} />} /> {/* Pasa setSelectedObra */}
        <Route path="/clasificacion" element={<ClasificacionPage />} />
        <Route path="/grupos" element={<GruposPage />} />
        <Route path="/favoritos-feed" element={<FavoritosFeedPage />} />
        <Route path="/series-info" element={<InfoSeriePage selectedSerie={selectedSerie} />} />
        <Route path="/obra-info" element={<InfoObraPage selectedObra={selectedObra} />} /> {/* Nueva ruta para la página de información de la obra */}
      </Routes>
      <Footer />
    </HashRouter>
  );
};
// Estilo para la navegación móvil
const MobileNav = styled.nav`
  background-color: #333;
  color: white;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
  }
  li {
    margin-bottom: 10px;
  }
  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
