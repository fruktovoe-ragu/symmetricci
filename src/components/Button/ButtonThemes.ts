import { Brands, Sizes, SizesType } from 'src/constants/common';
import { ButtonVariants, ButtonVariantsType, ButtonRanks, ButtonRanksType } from './ButtonTypes';

type ButtonStyleType = {
    borderColor: string;
    backgroundColor: string;
    color: string;
};

type ButtonSizesStyleType = {
    borderRadius: string;
    borderWidth: string;
    height: string;
    minWidth: string;
    padding: string;
    svgHeight: string;
    svgWidth: string;
};

type ButtonCommonInteractionStateType = {
    disabledState: ButtonStyleType;
};

type ButtonThemeInteractionStateType = {
    defaultState: ButtonStyleType;
    hovered: ButtonStyleType;
    pressed: ButtonStyleType;
};

type ButtonCommonRankType = {
    [key in ButtonRanksType]: ButtonCommonInteractionStateType;
};

type ButtonThemeRankType = {
    [key in ButtonRanksType]: ButtonThemeInteractionStateType;
};

export type ButtonAllVariantsType = {
    [key in ButtonVariantsType]: ButtonThemeRankType;
};

export type ButtonStyleDataType = {
    size: { [key in SizesType]: ButtonSizesStyleType }
    common: ButtonCommonRankType;
    variants: ButtonAllVariantsType;
};

export const useGenerateButtonData = (theme: any) => {
    const buttonStyleData: ButtonStyleDataType = {
        size: {
            [Sizes.BIG]: {
                borderRadius: theme.radii.m,
                borderWidth: "2px",
                height: "50px",
                minWidth: "50px",
                padding: "0 16px",
                svgHeight: "24px",
                svgWidth: "24px",
            },
            [Sizes.NORMAL]: {
                borderRadius: theme.radii.m,
                borderWidth: "2px",
                height: "36px",
                minWidth: "36px",
                padding: "0 12px",
                svgHeight: "20px",
                svgWidth: "20px",
            },
            [Sizes.SMALL]: {
                borderRadius: theme.radii.s,
                borderWidth: "1px",
                height: "24px",
                minWidth: "24px",
                padding: "0 8px",
                svgHeight: "16px",
                svgWidth: "16px",
            },
        },
        common: {
            [ButtonRanks.PRIMARY]: {
                disabledState: {
                    borderColor: "transparent",
                    backgroundColor: `${theme.colors.background.statusDisabledSubtle}`,
                    color: `${theme.colors.foreground.statusDisabled}`,
                },
            },
            [ButtonRanks.SECONDARY]: {
                disabledState: {
                    borderColor: `${theme.colors.border.statusDisabled}`,
                    backgroundColor: `${theme.colors.background.statusDisabledSubtle}`,
                    color: `${theme.colors.foreground.statusDisabled}`,
                },
            },
            [ButtonRanks.TERTIARY]: {
                disabledState: {
                    borderColor: "transparent",
                    backgroundColor: "transparent",
                    color: `${theme.colors.foreground.statusDisabled}`,
                },
            },
        },
        variants: {
            [Brands.BRAND_1]: {
                [ButtonRanks.PRIMARY]: {
                    defaultState: {
                        borderColor: "transparent",
                        backgroundColor: `${theme.colors.background.brandBrand1Primary}`,
                        color: `${theme.colors.foreground.generalWhiteStable}`,
                    },
                    hovered: {
                        borderColor: "transparent",
                        backgroundColor: `${theme.colors.background.generalOverlayOnAccentHovered}`,
                        color: `${theme.colors.foreground.generalWhiteStable}`,
                    },
                    pressed: {
                        borderColor: "transparent",
                        backgroundColor: `${theme.colors.background.generalOverlayOnAccentPressed}`,
                        color: `${theme.colors.foreground.generalWhiteStable}`,
                    },
                },
                [ButtonRanks.SECONDARY]: {
                    defaultState: {
                        borderColor: `${theme.colors.border.brandBrand1}`,
                        backgroundColor: "transparent",
                        color: `${theme.colors.foreground.brandBrand1}`,
                    },
                    hovered: {
                        borderColor: `${theme.colors.border.brandBrand1}`,
                        backgroundColor: `${theme.colors.background.brandBrand1SecondaryHovered}`,
                        color: `${theme.colors.foreground.brandBrand1}`,
                    },
                    pressed: {
                        borderColor: `${theme.colors.border.brandBrand1}`,
                        backgroundColor: `${theme.colors.background.brandBrand1SecondaryPressed}`,
                        color: `${theme.colors.foreground.brandBrand1}`,
                    },
                },
                [ButtonRanks.TERTIARY]: {
                    defaultState: {
                        borderColor: "transparent",
                        backgroundColor: "transparent",
                        color: `${theme.colors.foreground.brandBrand1}`,
                    },
                    hovered: {
                        borderColor: "transparent",
                        backgroundColor: `${theme.colors.background.brandBrand1SecondaryHovered}`,
                        color: `${theme.colors.foreground.brandBrand1}`,
                    },
                    pressed: {
                        borderColor: "transparent",
                        backgroundColor: `${theme.colors.background.brandBrand1SecondaryPressed}`,
                        color: `${theme.colors.foreground.brandBrand1}`,
                    },
                }
            },
            [Brands.BRAND_2]: {
                [ButtonRanks.PRIMARY]: {
                    defaultState: {
                        borderColor: "transparent",
                        backgroundColor: `${theme.colors.background.brandBrand2Primary}`,
                        color: `${theme.colors.foreground.generalWhiteStable}`,
                    },
                    hovered: {
                        borderColor: "transparent",
                        backgroundColor: `${theme.colors.background.generalOverlayOnAccentHovered}`,
                        color: `${theme.colors.foreground.generalWhiteStable}`,
                    },
                    pressed: {
                        borderColor: "transparent",
                        backgroundColor: `${theme.colors.background.generalOverlayOnAccentPressed}`,
                        color: `${theme.colors.foreground.generalWhiteStable}`,
                    },
                },
                [ButtonRanks.SECONDARY]: {
                    defaultState: {
                        borderColor: `${theme.colors.border.brandBrand2}`,
                        backgroundColor: "transparent",
                        color: `${theme.colors.foreground.brandBrand2}`,
                    },
                    hovered: {
                        borderColor: `${theme.colors.border.brandBrand2}`,
                        backgroundColor: `${theme.colors.background.brandBrand2SecondaryHovered}`,
                        color: `${theme.colors.foreground.brandBrand2}`,
                    },
                    pressed: {
                        borderColor: `${theme.colors.border.brandBrand2}`,
                        backgroundColor: `${theme.colors.background.brandBrand2SecondaryPressed}`,
                        color: `${theme.colors.foreground.brandBrand2}`,
                    },
                },
                [ButtonRanks.TERTIARY]: {
                    defaultState: {
                        borderColor: "transparent",
                        backgroundColor: "transparent",
                        color: `${theme.colors.foreground.brandBrand2}`,
                    },
                    hovered: {
                        borderColor: "transparent",
                        backgroundColor: `${theme.colors.background.brandBrand2SecondaryHovered}`,
                        color: `${theme.colors.foreground.brandBrand2}`,
                    },
                    pressed: {
                        borderColor: "transparent",
                        backgroundColor: `${theme.colors.background.brandBrand2SecondaryPressed}`,
                        color: `${theme.colors.foreground.brandBrand2}`,
                    },
                }
            },
            [Brands.UNIVERSAL]: {
                [ButtonRanks.PRIMARY]: {
                    defaultState: {
                        borderColor: "transparent",
                        backgroundColor: `${theme.colors.background.generalInteractive}`,
                        color: `${theme.colors.foreground.generalInteractiveInvertedAlt}`,
                    },
                    hovered: {
                        borderColor: "transparent",
                        backgroundColor: `${theme.colors.background.generalOverlayOnAccentHovered}`,
                        color: `${theme.colors.foreground.generalInteractiveInvertedAlt}`,
                    },
                    pressed: {
                        borderColor: "transparent",
                        backgroundColor: `${theme.colors.background.generalOverlayOnAccentPressed}`,
                        color: `${theme.colors.foreground.generalInteractiveInvertedAlt}`,
                    },
                },
                [ButtonRanks.SECONDARY]: {
                    defaultState: {
                        borderColor: `${theme.colors.border.generalInteractive}`,
                        backgroundColor: "transparent",
                        color: `${theme.colors.foreground.generalInteractive}`,
                    },
                    hovered: {
                        borderColor: `${theme.colors.border.generalInteractive}`,
                        backgroundColor: `${theme.colors.background.generalOverlayOnColorlessHovered}`,
                        color: `${theme.colors.foreground.generalInteractive}`,
                    },
                    pressed: {
                        borderColor: "transparent",
                        backgroundColor: `${theme.colors.background.generalOverlayOnColorlessPressed}`,
                        color: `${theme.colors.foreground.generalInteractive}`,
                    },
                },
                [ButtonRanks.TERTIARY]: {
                    defaultState: {
                        borderColor: "transparent",
                        backgroundColor: "transparent",
                        color: `${theme.colors.foreground.generalInteractive}`,
                    },
                    hovered: {
                        borderColor: "transparent",
                        backgroundColor: `${theme.colors.background.generalOverlayOnColorlessHovered}`,
                        color: `${theme.colors.foreground.generalInteractive}`,
                    },
                    pressed: {
                        borderColor: "transparent",
                        backgroundColor: `${theme.colors.background.generalOverlayOnColorlessPressed}`,
                        color: `${theme.colors.foreground.generalInteractive}`,
                    },
                },
            },
            [ButtonVariants.UNIVERSAL_INVERTED]: {
                [ButtonRanks.PRIMARY]: {
                    defaultState: {
                        borderColor: "transparent",
                        backgroundColor: `${theme.colors.background.generalInteractiveInverted}`,
                        color: `${theme.colors.foreground.generalInteractive}`,
                    },
                    hovered: {
                        borderColor: "transparent",
                        backgroundColor: `${theme.colors.background.generalOverlayOnColorlessHovered}`,
                        color: `${theme.colors.foreground.generalInteractive}`,
                    },
                    pressed: {
                        borderColor: "transparent",
                        backgroundColor: `${theme.colors.background.generalOverlayOnColorlessPressed}`,
                        color: `${theme.colors.foreground.generalInteractive}`,
                    },
                },
                [ButtonRanks.SECONDARY]: {
                    defaultState: {
                        borderColor: `${theme.colors.border.generalInteractiveInverted}`,
                        backgroundColor: "transparent",
                        color: `${theme.colors.foreground.generalInteractiveInverted}`,
                    },
                    hovered: {
                        borderColor: `${theme.colors.border.generalInteractive}`,
                        backgroundColor: `${theme.colors.background.generalOverlayOnColorlessInvertedHovered}`,
                        color: `${theme.colors.foreground.generalInteractiveInverted}`,
                    },
                    pressed: {
                        borderColor: "transparent",
                        backgroundColor: `${theme.colors.background.generalOverlayOnColorlessInvertedPressed}`,
                        color: `${theme.colors.foreground.generalInteractiveInverted}`,
                    },
                },
                [ButtonRanks.TERTIARY]: {
                    defaultState: {
                        borderColor: "transparent",
                        backgroundColor: "transparent",
                        color: `${theme.colors.foreground.generalInteractiveInverted}`,
                    },
                    hovered: {
                        borderColor: "transparent",
                        backgroundColor: `${theme.colors.background.generalOverlayOnColorlessInvertedHovered}`,
                        color: `${theme.colors.foreground.generalInteractiveInverted}`,
                    },
                    pressed: {
                        borderColor: "transparent",
                        backgroundColor: `${theme.colors.background.generalOverlayOnColorlessInvertedPressed}`,
                        color: `${theme.colors.foreground.generalInteractiveInverted}`,
                    },
                },
            },
            [ButtonVariants.INFO]: {
                [ButtonRanks.PRIMARY]: {
                    defaultState: {
                        borderColor: "",
                        backgroundColor: "",
                        color: "",
                    },
                    hovered: {
                        borderColor: "",
                        backgroundColor: "",
                        color: "",
                    },
                    pressed: {
                        borderColor: "",
                        backgroundColor: "",
                        color: "",
                    },
                },
                [ButtonRanks.SECONDARY]: {
                    defaultState: {
                        borderColor: `${theme.colors.border.statusInfo}`,
                        backgroundColor: "transparent",
                        color: `${theme.colors.foreground.statusInfo}`,
                    },
                    hovered: {
                        borderColor: `${theme.colors.border.statusInfo}`,
                        backgroundColor: `${theme.colors.background.statusInfoHovered}`,
                        color: `${theme.colors.foreground.statusInfo}`,
                    },
                    pressed: {
                        borderColor: `${theme.colors.border.statusInfo}`,
                        backgroundColor: `${theme.colors.background.statusInfoPressed}`,
                        color: `${theme.colors.foreground.statusInfo}`,
                    },
                },
                [ButtonRanks.TERTIARY]: {
                    defaultState: {
                        borderColor: "transparent",
                        backgroundColor: "transparent",
                        color: `${theme.colors.foreground.statusInfo}`,
                    },
                    hovered: {
                        borderColor: "transparent",
                        backgroundColor: `${theme.colors.background.statusInfoHovered}`,
                        color: `${theme.colors.foreground.statusInfo}`,
                    },
                    pressed: {
                        borderColor: "transparent",
                        backgroundColor: `${theme.colors.background.statusInfoPressed}`,
                        color: `${theme.colors.foreground.statusInfo}`,
                    },
                }
            },
            [ButtonVariants.INFO_INVERTED]: {
                [ButtonRanks.PRIMARY]: {
                    defaultState: {
                        borderColor: "",
                        backgroundColor: "",
                        color: "",
                    },
                    hovered: {
                        borderColor: "",
                        backgroundColor: "",
                        color: "",
                    },
                    pressed: {
                        borderColor: "",
                        backgroundColor: "",
                        color: "",
                    },
                },
                [ButtonRanks.SECONDARY]: {
                    defaultState: {
                        borderColor: `${theme.colors.border.statusInfoInverted}`,
                        backgroundColor: "transparent",
                        color: `${theme.colors.foreground.statusInfoInverted}`,
                    },
                    hovered: {
                        borderColor: `${theme.colors.border.statusInfoInverted}`,
                        backgroundColor: `${theme.colors.background.statusInfoInvertedHovered}`,
                        color: `${theme.colors.foreground.statusInfoInverted}`,
                    },
                    pressed: {
                        borderColor: `${theme.colors.border.statusInfoInverted}`,
                        backgroundColor: `${theme.colors.background.statusInfoInvertedPressed}`,
                        color: `${theme.colors.foreground.statusInfoInverted}`,
                    },
                },
                [ButtonRanks.TERTIARY]: {
                    defaultState: {
                        borderColor: "transparent",
                        backgroundColor: "transparent",
                        color: `${theme.colors.foreground.statusInfoInverted}`,
                    },
                    hovered: {
                        borderColor: "transparent",
                        backgroundColor: `${theme.colors.background.statusInfoInvertedHovered}`,
                        color: `${theme.colors.foreground.statusInfoInverted}`,
                    },
                    pressed: {
                        borderColor: "transparent",
                        backgroundColor: `${theme.colors.background.statusInfoInvertedPressed}`,
                        color: `${theme.colors.foreground.statusInfoInverted}`,
                    },
                }
            },
            [ButtonVariants.WARNING]: {
                [ButtonRanks.PRIMARY]: {
                    defaultState: {
                        borderColor: "",
                        backgroundColor: "",
                        color: "",
                    },
                    hovered: {
                        borderColor: "",
                        backgroundColor: "",
                        color: "",
                    },
                    pressed: {
                        borderColor: "",
                        backgroundColor: "",
                        color: "",
                    },
                },
                [ButtonRanks.SECONDARY]: {
                    defaultState: {
                        borderColor: `${theme.colors.border.statusWarning}`,
                        backgroundColor: "transparent",
                        color: `${theme.colors.foreground.statusWarning}`,
                    },
                    hovered: {
                        borderColor: `${theme.colors.border.statusWarning}`,
                        backgroundColor: `${theme.colors.background.statusWarningHovered}`,
                        color: `${theme.colors.foreground.statusWarning}`,
                    },
                    pressed: {
                        borderColor: `${theme.colors.border.statusWarning}`,
                        backgroundColor: `${theme.colors.background.statusWarningPressed}`,
                        color: `${theme.colors.foreground.statusWarning}`,
                    },
                },
                [ButtonRanks.TERTIARY]: {
                    defaultState: {
                        borderColor: "transparent",
                        backgroundColor: "transparent",
                        color: `${theme.colors.foreground.statusWarning}`,
                    },
                    hovered: {
                        borderColor: "transparent",
                        backgroundColor: `${theme.colors.background.statusWarningHovered}`,
                        color: `${theme.colors.foreground.statusWarning}`,
                    },
                    pressed: {
                        borderColor: "transparent",
                        backgroundColor: `${theme.colors.background.statusWarningPressed}`,
                        color: `${theme.colors.foreground.statusWarning}`,
                    },
                }
            },
            [ButtonVariants.DANGER]: {
                [ButtonRanks.PRIMARY]: {
                    defaultState: {
                        borderColor: "",
                        backgroundColor: "",
                        color: "",
                    },
                    hovered: {
                        borderColor: "",
                        backgroundColor: "",
                        color: "",
                    },
                    pressed: {
                        borderColor: "",
                        backgroundColor: "",
                        color: "",
                    },
                },
                [ButtonRanks.SECONDARY]: {
                    defaultState: {
                        borderColor: `${theme.colors.border.statusError}`,
                        backgroundColor: "transparent",
                        color: `${theme.colors.foreground.statusError}`,
                    },
                    hovered: {
                        borderColor: `${theme.colors.border.statusError}`,
                        backgroundColor: `${theme.colors.background.statusErrorHovered}`,
                        color: `${theme.colors.foreground.statusError}`,
                    },
                    pressed: {
                        borderColor: `${theme.colors.border.statusError}`,
                        backgroundColor: `${theme.colors.background.statusErrorPressed}`,
                        color: `${theme.colors.foreground.statusError}`,
                    },
                },
                [ButtonRanks.TERTIARY]: {
                    defaultState: {
                        borderColor: "transparent",
                        backgroundColor: "transparent",
                        color: `${theme.colors.foreground.statusError}`,
                    },
                    hovered: {
                        borderColor: "transparent",
                        backgroundColor: `${theme.colors.background.statusErrorHovered}`,
                        color: `${theme.colors.foreground.statusError}`,
                    },
                    pressed: {
                        borderColor: "transparent",
                        backgroundColor: `${theme.colors.background.statusErrorPressed}`,
                        color: `${theme.colors.foreground.statusError}`,
                    },
                }
            },
        },
    };

    return { buttonStyleData };
};
