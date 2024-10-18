import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 15px 10px 15px 0px;
  max-width: 200px; /* Ancho máximo por defecto */
  height: 40px;
  color: #ffffff;
  background-color: #4e4d4d2e;
  overflow: hidden; /* Evita el desbordamiento */

  @media (max-width: 310px) {
    max-width: 120px; /* Reducir el ancho en pantallas pequeñas */
    height: 20px; /* Reducir la altura en pantallas pequeñas */
    padding: 10px 8px; /* Ajustar el padding */
  }
`;

const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  color: #ffffff;
  flex: 1;
  outline: none;
  padding: 5px;
  padding-left: 20px;

  /* Evitar desbordamiento del texto */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  /* Estilo del placeholder */
  ::placeholder {
    color: #ffffff; /* Placeholder blanco */
  }

  @media (max-width: 310px) {
    font-size: 12px; /* Reducir tamaño de fuente en pantallas pequeñas */
    padding-left: 10px; /* Ajustar padding para mantener espacio */
  }
`;

const SearchIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: -45px;

  svg {
    fill: #ffffff;
    width: 16px;
    height: 16px;
  }

  @media (max-width: 310px) {
    margin-left: -35px; /* Ajustar posición del ícono en pantallas pequeñas */
    svg {
      width: 14px; /* Reducir tamaño del ícono */
      height: 14px;
    }
  }
`;

export const Buscador = ({ setSearchQuery }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    console.log("Submitting search:", query); 
    setSearchQuery(query); 
    navigate('/resultados'); 
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  return (
    <SearchBar>
      <SearchInput 
        type="text" 
        placeholder="Buscar..." 
        value={query}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
      />
      <SearchIcon onClick={handleSearchSubmit}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85zm-5.442 1.058a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
        </svg>
      </SearchIcon>
    </SearchBar>
  );
};
