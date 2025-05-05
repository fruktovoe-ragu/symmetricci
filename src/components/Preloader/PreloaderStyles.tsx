import { styled, css, keyframes } from "styled-components";
import { IPreloaderProps, defaultProps } from "./PreloaderTypes";

const rotating = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;


export const StyledPreloader = styled.div<IPreloaderProps>`
  ${({ color = defaultProps.color, theme }) => {
    return css`
      display: inline-flex;

      svg {
        animation: ${rotating} 1s linear infinite;
      }

      svg path {
        fill: ${color === "inherit" ? 'inherit' : theme.colors.foreground[color]};
      }
    `;
  }}
`;
