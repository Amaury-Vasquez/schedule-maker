import styled from 'styled-components';
import { Link as ReactLink } from 'react-router-dom';

export const Error404 = styled.div`
  width: 20vw;
  height: 400px;
  text-align: center;
  @media screen and (max-width: 500px) {
    width: 100vw;
    padding: var(--items-padding);
  }
`;

export const ErrorMessage = styled.h1`
  font-size: 5rem;
  color: var(--watermelon);
`;

export const ErrorInfo = styled.p`
  margin-top: 2vh;
  font-size: 1.2rem;
  color: var(--gray-text);
`;
