import styled from 'styled-components';

import { fadeIn } from '../../styles/animation';

export const Auth = styled.div<{ register: boolean }>`
  min-height: ${(props) => (props.register ? '480px' : '300px')};
  height: auto;
  width: 450px;
  background: var(--white);
  padding: var(--padding);
  border-radius: var(--radius);
  @media screen and (max-width: 500px) {
    width: 100vw;
  }
`;

export const AuthError = styled.div`
  ${fadeIn({ time: '0.4s' })};
  height: var(--line-height);
  width: 100%;
  background: #ffeeee;
  border-radius: var(--radius);
  display: flex;
  justify-content: left;
  align-items: center;
  padding: var(--items-padding);
  & > span {
    color: #fe5142;
    font-size: var(--font-size);
  }
`;

export const ConfirmSubmit = styled.div`
  height: var(--line-height);
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-top: 3vh;
`;

export const Form = styled.form`
  height: auto;
`;

export const Input = styled.input`
  font-size: 1rem;
  background: var(--white);
  width: 100%;
  height: 100%;
  border: var(--border);
  padding: 2px 23px 2px 35px;
  outline: 0;
  border-radius: var(--radius);
`;

export const LoadScreen = styled.div`
  height: auto;
  width: auto;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Remember = styled.label`
  font-size: 0.9rem;
  color: var(--gray-text);
  text-align: left;
  & > input {
    margin-right: 10px;
  }
`;

export const SpanAlert = styled.span`
  ${fadeIn({ time: '0.2s' })};
  position: relative;
  color: var(--watermelon);
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: lowercase;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: var(--line-height);
  width: 100%;
  align-items: center;
  color: var(--gray-text);
  margin-bottom: var(--gap-y);
  & > svg {
    position: absolute;
  }
  & > svg:first-child {
    left: 8px;
  }
  & > svg:last-child {
    right: 8px;
    &:hover {
      cursor: pointer;
    }
  }
`;
