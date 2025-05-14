import { styled, css, keyframes } from "styled-components";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { defaultProps, Variant, VariantType } from "./TooltipTypes";
import { useGenerateTooltipData } from "./TooltipThemes";
import { lightTheme } from 'src/design-tokens/themes';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;
const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
`;

export const StyledTooltipBody = styled(TooltipPrimitive.Content)<{ variant: VariantType }>`
  ${({ variant = defaultProps.variant, theme }) => {
    // Temporary workaround while theming works only inside Storybook and not globally.
    const tokensData = Object.keys(theme).length === 0 ? lightTheme : theme;

    const { tooltipStyleData } = useGenerateTooltipData(tokensData);
    const { bodyBackgroundColor, color } = tooltipStyleData[variant];

    return css`
      background-color: ${bodyBackgroundColor};
      color: ${color};
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.10);
      border-radius: ${tokensData.radii.s};
      padding: ${variant === Variant.ALERT ? '12px 16px' : '4px 8px'};
      min-height: 28px;
      max-width: 280px;
      display: flex;
      align-items: ${variant === Variant.ALERT ? 'flex-start' : 'center'};
      gap: 4px;
      animation: ${fadeIn} 0.15s ease-in-out;

      &[data-state="closed"] {
        animation: ${fadeOut} 0.15s ease-in-out;
      }

      ${StyledTooltipArrow} {
        fill: ${bodyBackgroundColor};
      }

      ${StyledTooltipExternalLinkIcon} {
        min-width: 24px;

        path {
          fill: ${color};
        }
      }

      ${StyledTooltipAlertIcon} {
        min-width: 20px;
        min-height: 20px;
        height: 20px;

        path {
          fill: ${tokensData.colors.foreground.statusError};
        }
      }
    `;
  }}
`;

export const StyledTooltipArrow = styled(TooltipPrimitive.Arrow)``;
export const StyledTooltipExternalLinkIcon = styled.svg``;
export const StyledTooltipAlertIcon = styled.svg``;
