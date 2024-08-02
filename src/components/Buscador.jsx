import React from 'react';
import styled from 'styled-components';

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 15px 10px 15px 0px;
  max-width: 200px; /* Ajusta el ancho según tus necesidades */
  height: 40px;
  color: #ffffff;
  background-color: #4e4d4d2e;
`;

const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  color: #ffffff;
  flex: 1;
  outline: none;
  padding: 5px;
  padding-left: 20px;

  /* Estilo del placeholder */
  ::placeholder {
    color: #ffffff; /* Asegura que el placeholder sea blanco */
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
  }
`;

export const Buscador = () => {
  return (
    <SearchBar>
      <SearchInput type="text" placeholder="Buscar..." />
      <SearchIcon>
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