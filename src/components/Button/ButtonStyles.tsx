import { styled, css } from "styled-components";
import { IButtonProps, defaultProps, ButtonVariants, ButtonRanks } from "./ButtonTypes";
import { useGenerateButtonData, ButtonAllVariantsType } from "./ButtonThemes";
import { StyledPreloader } from "src/components/Preloader/PreloaderStyles";

export const StyledButton = styled.div<IButtonProps & { as?: 'a' | 'button'} & { hasContent: boolean }>`
    ${({
        variant = defaultProps.variant,
        rank = defaultProps.rank,
        disabled = defaultProps.disabled,
        size = defaultProps.size,
        fullWidth = defaultProps.fullWidth,
        hasContent,
        theme,
    }) => {
        const { buttonStyleData } = useGenerateButtonData(theme);
        const certainVariant =  buttonStyleData.variants[variant as keyof ButtonAllVariantsType];
        const { defaultState, hovered, pressed } = certainVariant[rank];
        const { disabledState } =  buttonStyleData.common[rank];
        const {
            borderRadius,
            borderWidth,
            height,
            minWidth,
            padding,
            svgHeight,
            svgWidth
        } = buttonStyleData.size[size];

        return css`
            background-color: ${defaultState.backgroundColor};
            border-color: ${rank === ButtonRanks.SECONDARY ? defaultState.borderColor : "transparent"};
            border-width: ${rank === ButtonRanks.SECONDARY ? borderWidth : "0"};
            border-style: solid;
            border-radius: ${borderRadius};
            color: ${defaultState.color};
            display: inline-flex;
            justify-content: center;
            align-items: center;
            height: ${height};
            min-width: ${minWidth};
            outline: none;
            cursor: pointer;
            text-align: center;
            text-decoration: none;
            transition: background-color 0.3s, color 0.3s;
            padding: ${hasContent ? padding : "0"};
            position: relative;
            appearance: none;
            box-sizing: border-box;
            overflow: hidden;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            width: ${fullWidth ? "100%" : "auto"};

            &:before {
                content: '';
                display: none;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                height: 100%;
                width: 100%;
            }

            svg path {
                fill: ${defaultState.color};
            }

            &:focus-visible {
                outline-offset: 2px;
                outline: 4px solid ${variant === ButtonVariants.DANGER ?
                    theme.colors.border.statusOffsetError :
                    theme.colors.border.statusOffsetGeneral};
            }

            &:hover {
                &:before {
                    display: block;
                    background-color: ${hovered.backgroundColor};
                }
            }

            &:active {
                &:before {
                    display: block;
                    background-color: ${pressed.backgroundColor};
                }
            }

            &:disabled {
                border-color: ${disabledState.borderColor};
                background-color: ${disabledState.backgroundColor};
                color: ${disabledState.color};
                cursor: default;

                &:before {
                    content: none;
                }
            }

            &:disabled, ${disabled && css`
                svg path {
                    fill: ${disabledState.color};
                }
            `}

            svg {
                height: ${svgHeight};
                width: ${svgWidth};
            }

            ${StyledPreloader} {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }

            ${StyledContent} {
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;

                p {
                    padding: 0 4px;
                    white-space: nowrap;
                }
            }
        `;
    }}
`;

export const StyledContent = styled.div``;
