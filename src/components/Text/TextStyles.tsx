import { styled, css } from "styled-components";
import { ITextProps, defaultProps, TagsType } from "./TextTypes";
import { lightTheme } from 'src/design-tokens/themes';

export const StyledText = styled.div<ITextProps & { as?: TagsType}>`
  ${({
    typography = defaultProps.typography,
    color = defaultProps.color,
    align,
    theme,
  }) => {
    // Temporary workaround while theming works only inside Storybook and not globally.
    const tokensData = Object.keys(theme).length === 0 ? lightTheme : theme;

    const {
      fontFamily,
      fontSize,
      fontWeight,
      letterSpacing,
      lineHeight,
    } = tokensData.typography[typography];

    return css`
        color: ${color === "inherit" ? "inherit" : tokensData.colors.foreground[color]};
        font-family: ${fontFamily};
        font-size: ${fontSize};
        font-weight: ${fontWeight};
        letter-spacing: ${letterSpacing};
        line-height: ${lineHeight};
        text-align: ${align};
    `;
  }}
`;
