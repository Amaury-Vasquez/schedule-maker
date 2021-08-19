import styled from 'styled-components';

export const Menu = styled.div<{ tabs: number }>`
  width: 100%;
  height: var(--line-height);
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.tabs}, 1fr)`};
  margin-bottom: 3vh;
`;

export const Tab = styled.button<{ focused: boolean }>`
  width: 100%;
  font-size: 1rem;
  border-radius: var(--radius);
  text-transform: capitalize;
  font-weight: 600;
  ${(props) =>
    props.focused
      ? 'color: var(--gray-text);'
      : 'background: var(--watermelon);' +
        'color: var(--white);' +
        'opacity: 0.4;'};
  &:hover {
    cursor: pointer;
  }
`;
