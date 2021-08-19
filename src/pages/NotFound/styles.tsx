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

export const Link = styled(ReactLink)`
  border-radius: var(--radius);
  margin: 0 auto;
  margin-top: 3vh;
  height: var(--line-height);
  width: 100px;
  font-size: 1rem;
  background: var(--watermelon);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  font-weight: 500;
  & > svg {
    font-size: 1.5em;
  }
`;
