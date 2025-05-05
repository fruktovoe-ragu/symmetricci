import { styled, css } from "styled-components";
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { defaultProps } from "./SwitchTypes";
import { BrandsType } from 'src/constants/common';
import { useGenerateSwitchData } from "./SwitchThemes";
import { allTokens, lightTheme } from 'src/design-tokens/themes';

export const StyledSwitch = styled(SwitchPrimitive.Root)<{ brand: BrandsType }>`
    ${({ brand = defaultProps.brand, theme = lightTheme }) => {
        const { switchStyleData } = useGenerateSwitchData(theme);
        const { defaultChecked, hoveredChecked, pressedChecked } = switchStyleData.brands[brand];
        const {
            defaultState,
            hoveredState,
            pressedState,
            disabledState,
            disabledCheckedState
        } = switchStyleData.common;

        return css`
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            border: none;
            width: 40px;
            height: 24px;
            border-radius: 40px;
            transition: background 0.3s;
            background: ${defaultState.bodyBackgroundColor};
            position: relative;
            overflow: clip;
            cursor: pointer;

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

            span {
                background: ${defaultState.circleBackgroundColor};
                border-radius: ${theme.radii.full};
                position: absolute;
                top: 2px;
                left: 2px;
                height: 20px;
                width: 20px;
                transition: left 0.3s;
            }

            &:focus-visible {
                outline-offset: 2px;
                outline: 4px solid ${theme.colors.border.statusOffsetGeneral};
            }

            &:hover {
                &:before {
                    background: ${hoveredState.bodyBackgroundColor};
                }
            }
            &:active {
                &:before {
                    background: ${pressedState.bodyBackgroundColor};
                }
            }
            &:disabled {
                background: ${disabledState.bodyBackgroundColor};
                cursor: default;

                span {
                    background: ${disabledState.circleBackgroundColor};
                }

                &:before {
                    content: none;
                }
            }

            &[aria-checked='true'] {
                background: ${defaultChecked.bodyBackgroundColor};

                span {
                    left: 18px;
                }
            }
            &[aria-checked='true']:hover {
                &:before {
                    background: ${hoveredChecked.bodyBackgroundColor};
                }
            }
            &[aria-checked='true']:active {
                &:before {
                    background: ${pressedChecked.bodyBackgroundColor};
                }
            }
            &[aria-checked='true']:disabled {
                background: ${disabledState.bodyBackgroundColor};

                span {
                    background: ${disabledCheckedState.circleBackgroundColor};
                }

                &:before {
                    content: none;
                }
            }
        `;
    }}
`;

export const StyledSwitchWrapper = styled.label`
    display: flex;
    align-items: center;
`;

export const StyledSwitchContent = styled.div<{ disabled: boolean }>`
    cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
    margin-left: ${allTokens.spacing.xxs};
`;
