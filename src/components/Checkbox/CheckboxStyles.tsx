import { styled, css } from "styled-components";
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { defaultProps } from "./CheckboxTypes";
import { BrandsType } from 'src/constants/common';
import { useGenerateCheckboxData } from "./CheckboxThemes";
import { allTokens } from 'src/design-tokens/themes';

export const StyledCheckbox = styled(CheckboxPrimitive.Root)<{ brand: BrandsType }>`
    ${({ brand = defaultProps.brand, theme }) => {
        const { checkboxStyleData } = useGenerateCheckboxData(theme);
        const { defaultChecked, hoveredChecked, pressedChecked } = checkboxStyleData.brands[brand];
        const {
            defaultState,
            hoveredState,
            pressedState,
            invalidState,
            disabledState,
            disabledCheckedState
        } = checkboxStyleData.common;

        return css`
            background: ${defaultState.backgroundColor};
            border: 2px solid;
            border-color: ${defaultState.borderColor};
            border-radius: ${theme.radii.s};
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            height: 24px;
            overflow: clip;
            transition: border-color 0.3s;
            position: relative;
            width: 24px;

            &:before {
                background: transparent;
                content: '';
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                height: 100%;
                width: 100%;
                transition: background 0.3s;
            }

            span {
                display: flex;
            }

            &:focus-visible {
                outline-offset: 2px;
                outline: 4px solid ${theme.colors.border.statusOffsetGeneral};
            }

            &:hover {
                border-color: ${hoveredState.borderColor};
                background: ${hoveredState.backgroundColor};
            }
            &:active {
                border-color: ${pressedState.borderColor};
                background: ${pressedState.backgroundColor};
            }
            &:disabled {
                border-color: ${disabledState.borderColor};
                background: ${disabledState.backgroundColor};
                cursor: default;

                &:before {
                    content: none;
                }
            }

            &[aria-checked='true'] {
                border-width: 0;
                background: ${defaultChecked.backgroundColor};
            }
            &[aria-checked='true']:hover {
                border-width: 0;

                &:before {
                    background: ${hoveredChecked.backgroundColor};
                }
            }
            &[aria-checked='true']:active {
                border-width: 0;

                &:before {
                    background: ${pressedChecked.backgroundColor};
                }
            }
            &[aria-checked='true']:disabled {
                border-color: ${disabledCheckedState.borderColor};
                background: ${disabledCheckedState.backgroundColor};

                &:before {
                    content: none;
                }
            }

            &[aria-invalid="true"] {
                border-color: ${invalidState.borderColor};
            }

            &[aria-invalid="true"]:focus-visible {
                outline: 4px solid ${theme.colors.border.statusOffsetError};
            }

            ${StyledCheckboxIcon} {
                width: 20px;
                height: 20px;
                position: relative;

                path {
                    fill: ${defaultChecked.color};
                }
            }
        `;
    }}
`;

export const StyledCheckboxLabel = styled.label`
    display: flex;
`;

export const StyledCheckboxContent = styled.div<{ disabled: boolean }>`
    cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
    margin-left: ${allTokens.spacing.xxs};

    & p:first-child {
        line-height: 24px;
    }
`;

export const StyledCheckboxIcon = styled.svg``;
