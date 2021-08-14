import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spin = styled.div<{ large?: boolean }>`
  border-radius: 50%;
  ${(props) =>
    props.large
      ? 'width: 40px;' +
        'height: 40px;' +
        'border: 3px solid var(--neutral);' +
        'border-top: 3px solid var(--watermelon);' +
        'border-right: 3px solid var(--watermelon);'
      : 'width: 30px;' +
        'height: 30px;' +
        'border: 2px solid var(--neutral);' +
        'border-top: 2px solid var(--watermelon);' +
        'border-right: 2px solid var(--watermelon);'}
  animation: ${spin} 0.6s linear infinite;
`;
