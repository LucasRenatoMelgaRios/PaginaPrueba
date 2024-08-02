import styled from "styled-components"
import { useState, useEffect } from "react";
import { GetSeriesData } from "../services/GetSeriesData";
import { BsSmartwatch } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export const Paginado = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
    const pageNumbers = [];
    const maxPageNumber = Math.ceil(totalItems / itemsPerPage);
    const delta = 2; // Número de páginas alrededor de la actual para mostrar
  
    // Generar números de página
    for (let i = 1; i <= maxPageNumber; i++) {
      pageNumbers.push(i);
    }
  
    // Función para generar el rango de páginas con puntos suspensivos
    const getPageNumbersToShow = () => {
      if (maxPageNumber <= 5) {
        return pageNumbers;
      }
  
      const startPage = Math.max(currentPage - delta, 1);
      const endPage = Math.min(currentPage + delta, maxPageNumber);
  
      let pages = pageNumbers.slice(startPage - 1, endPage);
  
      if (startPage > 1) {
        pages = [1, '...'].concat(pages);
      }
  
      if (endPage < maxPageNumber) {
        pages = pages.concat(['...', maxPageNumber]);
      }
  
      return pages;
    };
  
    const pagesToShow = getPageNumbersToShow();
  
    return (
      <Navegation>
        <List>
          {/* Botón de retroceso */}
          <Element>
            <a
              href="#"
              onClick={() => paginate(Math.max(currentPage - 1, 1))}
            >
              <IoIosArrowBack />
            </a>
          </Element>
  
          {/* Números de página con lógica de puntos suspensivos */}
          {pagesToShow.map((number, index) => (
            <Element key={index}>
              {number === '...' ? (
                <span className="ellipsis">...</span>
              ) : (
                <a
                  href="#"
                  onClick={() => paginate(number)}
                  className={number === currentPage ? "active" : ""}
                >
                  {number}
                </a>
              )}
            </Element>
          ))}
  
          {/* Botón de avance */}
          <Element>
            <a
              href="#"
              onClick={() =>
                paginate(Math.min(currentPage + 1, maxPageNumber))
              }
            >
              <IoIosArrowForward />
            </a>
          </Element>
        </List>
      </Navegation>
    );
  };
  
  const Navegation = styled.nav`
    width: 100%;
    padding-left: 150px;
    padding-right: 150px;
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
  
    @media (max-width: 768px) {
      padding-left: 20px;
      padding-right: 20px;
    }
  `;
  
  const List = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    gap: 10px;
  `;
  
  const Element = styled.li`
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(250, 250, 250);
      font-weight: 500;
      border-radius: 12px;
      padding: 10px;
      text-decoration: none;
      width: 2.4vw;
      height: 2.3vw;
      min-width: 35px;
      min-height: 35px;
      font-size: clamp(14px, 1.5vw, 18px);
      transition: background-color 0.3s;
      border: 1px solid #2b2727;
      cursor: pointer;
  
      &:hover {
        border: 1px solid #f5f5f5;
      }
  
      &.active {
        background-color: rgb(99, 102, 241); /* Color morado para la página activa */
      }
    }
  
    .ellipsis {
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(100, 100, 100);
      padding: 10px;
      width: 2.4vw;
      height: 2.3vw;
      min-width: 35px;
      min-height: 35px;
      font-size: clamp(14px, 1.5vw, 18px);
      border-radius: 12px;
    }
  
    @media (max-width: 1600px) {
      a {
        font-size: clamp(14px, 2vw, 18px);
      }
    }
  `;