import { keyframes, css } from 'styled-components';

const backgroundKeyframes = keyframes`
  from {
    background: none;
  }
  to {
    background: var(--white);
  }
`;

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`;

const fadeOutKeyframes = keyframes`
  from {
    filter: blur(0);
    opacity: 1;
  }
  
  to {
    filter: blur(5px);
    opacity: 0;
  }
`;

export const background = () => css`
  animation: 0.3s ${backgroundKeyframes} ease-in;
`;

export const fadeIn = ({ time = '2s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${fadeInKeyframes} ${type};
  `;

export const fadeOut = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${fadeOutKeyframes} ${type};
  `;
