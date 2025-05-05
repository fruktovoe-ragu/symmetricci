import { Brands, BrandsType } from 'src/constants/common';

type CheckboxStyleType = {
    borderColor: string;
    backgroundColor: string;
    color?: string;
}

type CheckboxInteractionStateType = {
    defaultChecked: CheckboxStyleType;
    hoveredChecked: CheckboxStyleType;
    pressedChecked: CheckboxStyleType;
}

type CheckboxCommonType = {
    defaultState: CheckboxStyleType;
    hoveredState: CheckboxStyleType;
    pressedState: CheckboxStyleType;
    invalidState: CheckboxStyleType;
    disabledState: CheckboxStyleType;
    disabledCheckedState: CheckboxStyleType;
}

export type CheckboxBrandType = {
    [key in BrandsType]: CheckboxInteractionStateType;
}

export type CheckboxStyleDataType = {
    common: CheckboxCommonType;
    brands: CheckboxBrandType;
}

export const useGenerateCheckboxData = (theme: any) => {
    const checkboxStyleData: CheckboxStyleDataType = {
        common: {
            defaultState: {
                borderColor: `${theme.colors.border.generalMain}`,
                backgroundColor: "transparent",
            },
            hoveredState: {
                borderColor: `${theme.colors.border.generalInteractiveHovered}`,
                backgroundColor: `${theme.colors.background.generalOverlayOnColorlessHovered}`,
            },
            pressedState: {
                borderColor: `${theme.colors.border.generalInteractivePressed}`,
                backgroundColor: `${theme.colors.background.generalOverlayOnColorlessPressed}`,
            },
            invalidState: {
                borderColor: `${theme.colors.border.statusError}`,
                backgroundColor: "transparent",
            },
            disabledState:  {
                borderColor: `${theme.colors.border.statusDisabled}`,
                backgroundColor: `${theme.colors.background.statusDisabledSubtle}`,
            },
            disabledCheckedState: {
                borderColor: "transparent",
                backgroundColor: `${theme.colors.background.statusDisabled}`,
            }
        },
        brands: {
            [Brands.BRAND_1]: {
                defaultChecked: {
                    borderColor: "transparent",
                    backgroundColor: `${theme.colors.background.brandBrand1Primary}`,
                    color: `${theme.colors.foreground.generalWhiteStable}`,
                },
                hoveredChecked: {
                    borderColor: "transparent",
                    backgroundColor: `${theme.colors.background.generalOverlayOnAccentHovered}`,
                    color: `${theme.colors.foreground.generalWhiteStable}`,
                },
                pressedChecked: {
                    borderColor: "transparent",
                    backgroundColor: `${theme.colors.background.generalOverlayOnAccentPressed}`,
                    color: `${theme.colors.foreground.generalWhiteStable}`,
                },
            },
            [Brands.BRAND_2]: {
                defaultChecked: {
                    borderColor: "transparent",
                    backgroundColor: `${theme.colors.background.brandBrand2Primary}`,
                    color: `${theme.colors.foreground.generalWhiteStable}`,
                },
                hoveredChecked: {
                    borderColor: "transparent",
                    backgroundColor: `${theme.colors.background.generalOverlayOnAccentHovered}`,
                    color: `${theme.colors.foreground.generalWhiteStable}`,
                },
                pressedChecked: {
                    borderColor: "transparent",
                    backgroundColor: `${theme.colors.background.generalOverlayOnAccentPressed}`,
                    color: `${theme.colors.foreground.generalWhiteStable}`,
                },
            },
            [Brands.UNIVERSAL]: {
                defaultChecked: {
                    borderColor: "transparent",
                    backgroundColor: `${theme.colors.background.generalInteractive}`,
                    color: `${theme.colors.foreground.generalInteractiveInvertedAlt}`,
                },
                hoveredChecked: {
                    borderColor: "transparent",
                    backgroundColor: `${theme.colors.background.generalOverlayOnAccentHovered}`,
                    color: `${theme.colors.foreground.generalInteractiveInvertedAlt}`,
                },
                pressedChecked: {
                    borderColor: "transparent",
                    backgroundColor: `${theme.colors.background.generalOverlayOnAccentPressed}`,
                    color: `${theme.colors.foreground.generalInteractiveInvertedAlt}`,
                },
            },
        },
    };

    return { checkboxStyleData };
};
