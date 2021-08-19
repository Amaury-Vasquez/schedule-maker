import styled from 'styled-components';

export const Close = styled.div`
  height: 10px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 5px;
  & > svg {
    font-size: 1em;
    color: var(--watermelon);
    &:hover {
      cursor: pointer;
    }
  }
`;

export const DropDown = styled.div<{ active: boolean }>`
  position: relative;
  height: 100%;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  margin-right: 30px;
  & > div {
    display: ${(props) => (props.active ? 'block' : 'none')};
  }
  @media screen and (max-width: 500px) {
    margin-right: 10px;
  }
`;

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 1px solid var(--carbon);
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

export const UserIcon = styled.button`
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

export const UserMenu = styled.div`
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
  & > div,
  > button {
    border-bottom: 1px solid #d8d6d6;
  }
  & > div:first-child {
    border-bottom: 0;
  }
`;
