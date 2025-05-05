import { Variant, VariantType } from './TooltipTypes';

type TooltipStyleType = {
    color: string;
    bodyBackgroundColor: string;
}

export type TooltipStyleDataType = {
    [key in VariantType]: TooltipStyleType;
};

export const useGenerateTooltipData = (theme: any) => {
    const tooltipStyleData: TooltipStyleDataType = {
        [Variant.DEFAULT]: {
            color: `${theme.colors.foreground.generalPrimaryInverted}`,
            bodyBackgroundColor: `${theme.colors.background.generalMainInverted}`,
        },
        [Variant.INVERTED]: {
            color: `${theme.colors.foreground.generalPrimary}`,
            bodyBackgroundColor: `${theme.colors.background.generalMainAltDarkMode}`,
        },
        [Variant.ALERT]: {
            color: `${theme.colors.foreground.generalPrimary}`,
            bodyBackgroundColor: `${theme.colors.background.statusError}`,
        },
    };

    return { tooltipStyleData };
};
