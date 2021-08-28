import styled from 'styled-components';

export const Page = styled.div<{ header?: boolean }>`
  /* height: ${(props) => (props.header ? '94vh' : '100vh')}; */
  min-height: 94vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
