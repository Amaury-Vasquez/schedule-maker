import styled from "styled-components"

export const Button = styled.button`
  display: flex;
  height: var(--line-height);
  width: 100%;
  justify-content: center;
  align-items: center;
  background: var(--watermelon);
  font-size: var(--font-size);
  font-weight: 600;
  color: var(--white);
  text-transform: capitalize;
  border-radius: 30px;
  box-shadow: var(--shadow);
  &:hover {
    cursor: pointer;
  }
`;