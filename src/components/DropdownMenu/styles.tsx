import styled from 'styled-components';

export const Button = styled.button`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  & > svg {
    font-size: 24px;
    color: var(--watermelon);
  }
`;

export const Dropdown = styled.div`
  position: relative;
  height: 100%;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  margin-right: 30px;
  @media screen and (max-width: 500px) {
    margin-right: 10px;
  }
`;
