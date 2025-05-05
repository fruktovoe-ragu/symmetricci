import { Brands, BrandsType } from 'src/constants/common';

type SwitchStyleType = {
    bodyBackgroundColor: string;
    circleBackgroundColor: string;
}

type SwitchInteractionStateType = {
    defaultChecked: SwitchStyleType;
    hoveredChecked: SwitchStyleType;
    pressedChecked: SwitchStyleType;
}

type SwitchCommonType = {
    defaultState: SwitchStyleType;
    hoveredState: SwitchStyleType;
    pressedState: SwitchStyleType;
    disabledState: SwitchStyleType;
    disabledCheckedState: SwitchStyleType;
}

export type SwitchBrandType = {
    [key in BrandsType]: SwitchInteractionStateType;
}

export type SwitchStyleDataType = {
    common: SwitchCommonType;
    brands: SwitchBrandType;
}

export const useGenerateSwitchData = (theme: any) => {
    const switchStyleData: SwitchStyleDataType = {
        common: {
            defaultState: {
                bodyBackgroundColor: `${theme.colors.background.generalInteractiveSubdued}`,
                circleBackgroundColor: `${theme.colors.foreground.generalWhiteStable}`,
            },
            hoveredState: {
                bodyBackgroundColor: `${theme.colors.background.generalOverlayOnAccentHovered}`,
                circleBackgroundColor: `${theme.colors.foreground.generalWhiteStable}`,
            },
            pressedState: {
                bodyBackgroundColor: `${theme.colors.background.generalOverlayOnAccentPressed}`,
                circleBackgroundColor: `${theme.colors.foreground.generalWhiteStable}`,
            },
            disabledState:  {
                bodyBackgroundColor: `${theme.colors.background.statusDisabled}`,
                circleBackgroundColor: `${theme.colors.foreground.statusDisabledSubdued}`,
            },
            disabledCheckedState: {
                bodyBackgroundColor: `${theme.colors.background.statusDisabled}`,
                circleBackgroundColor: `${theme.colors.foreground.statusDisabled}`,
            }
        },
        brands: {
            [Brands.BRAND_1]: {
                defaultChecked: {
                    bodyBackgroundColor: `${theme.colors.background.brandBrand1Primary}`,
                    circleBackgroundColor: `${theme.colors.foreground.generalWhiteStable}`,
                },
                hoveredChecked: {
                    bodyBackgroundColor: `${theme.colors.background.generalOverlayOnAccentHovered}`,
                    circleBackgroundColor: `${theme.colors.foreground.generalWhiteStable}`,
                },
                pressedChecked: {
                    bodyBackgroundColor: `${theme.colors.background.generalOverlayOnAccentPressed}`,
                    circleBackgroundColor: `${theme.colors.foreground.generalWhiteStable}`,
                },
            },
            [Brands.BRAND_2]: {
                defaultChecked: {
                    bodyBackgroundColor: `${theme.colors.background.brandBrand2Primary}`,
                    circleBackgroundColor: `${theme.colors.foreground.generalWhiteStable}`,
                },
                hoveredChecked: {
                    bodyBackgroundColor: `${theme.colors.background.generalOverlayOnAccentHovered}`,
                    circleBackgroundColor: `${theme.colors.foreground.generalWhiteStable}`,
                },
                pressedChecked: {
                    bodyBackgroundColor: `${theme.colors.background.generalOverlayOnAccentPressed}`,
                    circleBackgroundColor: `${theme.colors.foreground.generalWhiteStable}`,
                },
            },
            [Brands.UNIVERSAL]: {
                defaultChecked: {
                    bodyBackgroundColor: `${theme.colors.background.generalInteractive}`,
                    circleBackgroundColor: `${theme.colors.foreground.generalInteractiveInvertedAlt}`,
                },
                hoveredChecked: {
                    bodyBackgroundColor: `${theme.colors.background.generalOverlayOnAccentHovered}`,
                    circleBackgroundColor: `${theme.colors.foreground.generalInteractiveInvertedAlt}`,
                },
                pressedChecked: {
                    bodyBackgroundColor: `${theme.colors.background.generalOverlayOnAccentPressed}`,
                    circleBackgroundColor: `${theme.colors.foreground.generalInteractiveInvertedAlt}`,
                },
            },
        },
    };

    return { switchStyleData };
};
