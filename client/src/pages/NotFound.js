import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
  background-color: ${props => props.theme.colors.background};
`;

const NotFoundCode = styled.h1`
  font-size: 8rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  line-height: 1;
`;

const NotFoundTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const NotFoundText = styled.p`
  font-size: 1.1rem;
  max-width: 500px;
  margin-bottom: 2rem;
`;

const NotFoundButton = styled(Link)`
  padding: 12px 28px;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 0;
  transition: all 0.3s ease;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: 1px solid ${props => props.theme.colors.primary};
  
  &:hover {
    background-color: transparent;
    color: ${props => props.theme.colors.primary};
  }
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundCode>404</NotFoundCode>
      <NotFoundTitle>Page Not Found</NotFoundTitle>
      <NotFoundText>
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </NotFoundText>
      <NotFoundButton to='/'>Return to Home</NotFoundButton>
    </NotFoundContainer>
  );
};

export default NotFound;
