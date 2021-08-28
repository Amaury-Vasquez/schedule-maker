import styled from 'styled-components';

export const DropdownDiv = styled.div`
  position: relative;
  height: 100%;
  min-width: 50px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  margin-right: 30px;
  @media screen and (max-width: 500px) {
    margin-right: 10px;
  }
`;
