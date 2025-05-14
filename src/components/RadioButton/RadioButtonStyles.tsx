import { styled, css } from "styled-components";
import { defaultProps } from "./RadioButtonTypes";
import { BrandsType } from 'src/constants/common';
import { useGenerateRadioButtonData } from "./RadioButtonThemes";
import { allTokens, lightTheme } from 'src/design-tokens/themes';

export const StyledRadioButonCustomInput = styled.div<{ brand: BrandsType }>`
    ${({ brand = defaultProps.brand, theme }) => {
        // Temporary workaround while theming works only inside Storybook and not globally.
        const tokensData = Object.keys(theme).length === 0 ? lightTheme : theme;

        const { radioButtonStyleData } = useGenerateRadioButtonData(tokensData);
        const { defaultChecked } = radioButtonStyleData.brands[brand];
        const {
            defaultState,
            hoveredState,
            pressedState,
            disabledState,
            disabledCheckedState
        } = radioButtonStyleData.common;

        return css`
            background: ${defaultState.bodyBackgroundColor};
            border: 2px solid;
            border-color: ${defaultState.borderColor};
            border-radius: ${tokensData.radii.full};
            box-sizing: border-box;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 24px;
            overflow: clip;
            position: relative;
            transition: background 0.3s;
            width: 24px;

            &:before {
                content: '';
                background: transparent;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                height: 100%;
                width: 100%;
                transition: background 0.3s;
            }

            &:after {
                content: '';
                background: ${defaultState.circleBackgroundColor};
                border-radius: ${tokensData.radii.full};
                position: absolute;
                top: 50%;
                left: 50%;
                height: 8px;
                width: 8px;
                transform: translate(-50%, -50%);
            }

            ${StyledRadioButton}:focus-visible + & {
                outline-offset: 2px;
                outline: 4px solid ${tokensData.colors.border.statusOffsetGeneral};
            }

            &:hover {
                border-color: ${hoveredState.borderColor};

                &:before {
                    background: ${hoveredState.bodyBackgroundColor};
                }
            }
            &:active {
                border-color: ${pressedState.borderColor};

                &:before {
                    background: ${pressedState.bodyBackgroundColor};
                }
            }
            ${StyledRadioButton}:disabled + & {
                background: ${disabledState.bodyBackgroundColor};
                border-color: ${disabledState.borderColor};
                cursor: default;

                &:after {
                    background: ${disabledState.circleBackgroundColor};
                }

                &:before {
                    content: none;
                }
            }

            ${StyledRadioButton}[aria-checked='true'] + &,
            ${StyledRadioButton}:checked + & {
                background: ${defaultChecked.bodyBackgroundColor};
                border-width: 0;

                &:after {
                    background: ${defaultChecked.circleBackgroundColor};
                }
            }
            ${StyledRadioButton}[aria-checked='true']:disabled + &,
            ${StyledRadioButton}:checked:disabled + & {
                background: ${disabledCheckedState.bodyBackgroundColor};
                border-color: ${disabledCheckedState.borderColor};

                &:after {
                    background: ${disabledCheckedState.circleBackgroundColor};
                }

                &:before {
                    content: none;
                }
            }
        `;
    }}
`;

export const StyledRadioButton = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
`;

export const StyledRadioButtonLabel = styled.label`
    display: flex;
`;

export const StyledRadioButtonContent = styled.div<{ disabled: boolean }>`
    cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
    margin-left: ${allTokens.spacing.xxs};

    & p:first-child {
        line-height: 24px;
    }
`;
