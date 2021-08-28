import styled from 'styled-components';

import { fadeIn, fadeOut } from '../../styles/animation';

export const List = styled.ul<{ active: boolean; willFade: boolean }>`
  display: flex;
  align-items: center;
  width: 600px;
  height: 100%;
  border-radius: var(--radius);
  justify-content: center;
  background: var(--white);
  border: 1px solid var(--carbon);
  @media screen and (max-width: 700px) {
    display: ${(props) => (props.active ? 'block' : 'none')};
    ${fadeIn({ time: '0.3s' })};
    ${(props) => props.willFade && fadeOut({ time: '0.3s' })};
    height: auto;
    position: absolute;
    left: 50px;
    width: 200px;
    border: none;
    top: 0;
    z-index: 1;
    border-right: 1px solid var(--neutral);
    border-left: 1px solid var(--neutral);
    box-shadow: var(--shadow);
  }
`;

export const Option = styled.li`
  height: 100%;
  width: auto;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: var(--gray-text);
  border-radius: var(--radius);
  & > svg {
    margin-left: 5px;
    color: var(--watermelon);
    font-size: 1.2rem;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
  @media screen and (max-width: 700px) {
    border-bottom: 1px solid var(--neutral);
    height: var(--line-height);
    background: var(--white);
  }
`;

export const OptionsMenu = styled.div`
  width: 100%;
  height: var(--line-height);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  border-radius: var(--radius);
  & > button {
    display: none;
  }
  @media screen and (max-width: 700px) {
    border: none;
    width: 50px;
    justify-content: flex-start;
    background: none;
    & > button {
      width: 100%;
      height: var(--line-height);
      display: block;
      border-radius: var(--radius);
      & > svg {
        color: var(--gray-text);
        font-size: 1.5rem;
      }
      /* &:hover {
        cursor: pointer;
      } */
    }
  }
`;
