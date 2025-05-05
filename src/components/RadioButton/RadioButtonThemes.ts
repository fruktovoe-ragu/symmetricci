import { Brands, BrandsType } from 'src/constants/common';

type RadioButtonStyleType = {
    borderColor: string;
    bodyBackgroundColor: string;
    circleBackgroundColor: string;
}

type RadioButtonInteractionStateType = {
    defaultChecked: RadioButtonStyleType;
}

type RadioButtonCommonType = {
    defaultState: RadioButtonStyleType;
    hoveredState: RadioButtonStyleType;
    pressedState: RadioButtonStyleType;
    disabledState: RadioButtonStyleType;
    disabledCheckedState: RadioButtonStyleType;
}

export type RadioButtonBrandType = {
    [key in BrandsType]: RadioButtonInteractionStateType;
}

export type RadioButtonStyleDataType = {
    common: RadioButtonCommonType;
    brands: RadioButtonBrandType;
}

export const useGenerateRadioButtonData = (theme: any) => {
    const radioButtonStyleData: RadioButtonStyleDataType = {
        common: {
            defaultState: {
                borderColor: `${theme.colors.border.generalMain}`,
                bodyBackgroundColor: "transparent",
                circleBackgroundColor: "transparent",
            },
            hoveredState: {
                borderColor: `${theme.colors.border.generalInteractiveHovered}`,
                bodyBackgroundColor: `${theme.colors.background.generalOverlayOnColorlessHovered}`,
                circleBackgroundColor: "transparent",
            },
            pressedState: {
                borderColor: `${theme.colors.border.generalInteractivePressed}`,
                bodyBackgroundColor: `${theme.colors.background.generalOverlayOnColorlessPressed}`,
                circleBackgroundColor: "transparent",
            },
            disabledState:  {
                borderColor: `${theme.colors.border.statusDisabled}`,
                bodyBackgroundColor: `${theme.colors.background.statusDisabledSubtle}`,
                circleBackgroundColor: "transparent",
            },
            disabledCheckedState: {
                borderColor: "transparent",
                bodyBackgroundColor: `${theme.colors.background.statusDisabled}`,
                circleBackgroundColor: `${theme.colors.foreground.generalWhiteStable}`,
            }
        },
        brands: {
            [Brands.BRAND_1]: {
                defaultChecked: {
                    borderColor: "transparent",
                    bodyBackgroundColor: `${theme.colors.background.brandBrand1Primary}`,
                    circleBackgroundColor: `${theme.colors.foreground.generalWhiteStable}`,
                },
            },
            [Brands.BRAND_2]: {
                defaultChecked: {
                    borderColor: "transparent",
                    bodyBackgroundColor: `${theme.colors.background.brandBrand2Primary}`,
                    circleBackgroundColor: `${theme.colors.foreground.generalWhiteStable}`,
                },
            },
            [Brands.UNIVERSAL]: {
                defaultChecked: {
                    borderColor: "transparent",
                    bodyBackgroundColor: `${theme.colors.background.generalInteractive}`,
                    circleBackgroundColor: `${theme.colors.foreground.generalInteractiveInvertedAlt}`,
                },
            },
        },
    };

    return { radioButtonStyleData };
};
