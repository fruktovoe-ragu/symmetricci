import { styled, css } from "styled-components";
import { ITextProps, defaultProps, TagsType } from "./TextTypes";

export const StyledText = styled.div<ITextProps & { as?: TagsType}>`
  ${({
    typography = defaultProps.typography,
    color = defaultProps.color,
    align,
    theme,
  }) => {
    const {
      fontFamily,
      fontSize,
      fontWeight,
      letterSpacing,
      lineHeight,
    } = theme.typography[typography];

    return css`
        color: ${color === "inherit" ? "inherit" : theme.colors.foreground[color]};
        font-family: ${fontFamily};
        font-size: ${fontSize};
        font-weight: ${fontWeight};
        letter-spacing: ${letterSpacing};
        line-height: ${lineHeight};
        text-align: ${align};
    `;
  }}
`;
