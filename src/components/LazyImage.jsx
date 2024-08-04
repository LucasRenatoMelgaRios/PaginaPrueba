import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 25%;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
`;

const LazyImage = ({ src, alt }) => {
  return <StyledImage src={src} alt={alt} />;
};

export default LazyImage;
