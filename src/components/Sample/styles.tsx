import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Figure = styled.figure`
  width: 50vw;
  height: auto;
  text-align: center;
  & > figcaption {
    color: var(--gray-text);
    font-size: 1.5rem;
  }
`;
export const Image = styled.img`
  width: 40vw;
  height: auto;
`;
