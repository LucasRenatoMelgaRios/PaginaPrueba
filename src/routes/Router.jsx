import { HashRouter, Routes, Route } from 'react-router-dom';
import {HomePage} from '../Pages/HomePage';
import {BibliotecaPage} from '../Pages/BibliotecaPage';
import {ClasificacionPage} from '../Pages/ClasificacionPage'
import {GruposPage} from '../Pages/GruposPage';
import {FavoritosFeedPage} from '../Pages/FavoritosFeedPage';
import { Header } from '../components/Header';
import { useState, useEffect } from "react";
import { Footer } from '../components/Footer';


export const MyRouters = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      console.log("menu abierto");
      console.log(menuOpen);
      setMenuOpen((menuOpen) => !menuOpen);
    };
  
    //para cerrar el menu mobile si el ancho de pantalla regresa a ser 740
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
        <Header/>
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
          <Route path="/" element={<HomePage />} />
          <Route path="/biblioteca" element={<BibliotecaPage />} />
          <Route path="/clasificacion" element={<ClasificacionPage />} />
          <Route path="/grupos" element={<GruposPage />} />
          <Route path="/favoritos-feed" element={<FavoritosFeedPage />} />
        </Routes>
        <Footer/>
      </HashRouter>
    );
  };
