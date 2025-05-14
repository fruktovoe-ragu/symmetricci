import { styled, css, keyframes } from "styled-components";
import { IPreloaderProps, defaultProps } from "./PreloaderTypes";
import { lightTheme } from 'src/design-tokens/themes';

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
    // Temporary workaround while theming works only inside Storybook and not globally.
    const tokensData = Object.keys(theme).length === 0 ? lightTheme : theme;

    return css`
      display: inline-flex;

      svg {
        animation: ${rotating} 1s linear infinite;
      }

      svg path {
        fill: ${color === "inherit" ? 'inherit' : tokensData.colors.foreground[color]};
      }
    `;
  }}
`;
