import styled from 'styled-components';

import { fadeIn, fadeOut } from '../../styles/animation';

export const Close = styled.div`
  height: 10px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
  & > svg {
    font-size: 1em;
    color: var(--watermelon);
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Option = styled.button`
  height: var(--line-height);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1em;
  border-bottom: 1px solid #c5c2c2;
  &:hover {
    cursor: pointer;
  }
  & > * {
    color: var(--gray-text);
  }
  & > span {
    width: 70%;
    position: relative;
    color: var(--gray-text);
    text-transform: capitalize;
    text-align: left;
    & > svg {
      position: absolute;
      right: 0;
      color: var(--watermelon);
    }
  }
`;

export const Menu = styled.div<{ willFade: boolean }>`
  ${fadeIn({ time: '0.5s' })};
  ${(props) => props.willFade && fadeOut({ time: '0.3s' })};
  display: block;
  background: var(--white);
  position: absolute;
  top: 6vh;
  right: 0;
  width: 200px;
  height: auto;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  border-top: none;
  padding: var(--items-padding);
  z-index: 1;
  & > div,
  > button {
    border-bottom: 1px solid #d8d6d6;
  }
  & > div:first-child {
    border-bottom: 0;
  }
`;
