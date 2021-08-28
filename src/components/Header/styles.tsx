import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--carbon);
`;

export const Title = styled(Link)`
  width: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 30px;
  & > p {
    font-size: 1.2rem;
    color: var(--gray-text);
    /* font-style: italic; */
    font-weight: 500;
  }
  & > svg {
    color: var(--watermelon);
    font-size: 1.4rem;
    margin-right: 10px;
  }
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 500px) {
    margin-left: 20px;
  }
`;

export const UserButton = styled.button`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  & > svg {
    font-size: 24px;
    color: var(--watermelon);
  }
`;
