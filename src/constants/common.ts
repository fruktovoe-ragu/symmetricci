import { foregroundTokens, borderTokens, backgroundTokens } from "src/design-tokens/colors";

export const Aligns = {
    LEFT: 'left',
    CENTER: 'center',
    RIGHT: 'right',
} as const;

export const Brands = {
    BRAND_1: 'brand1',
    BRAND_2: 'brand2',
    UNIVERSAL: 'neutral',
} as const;

export const Typography = {
    HEADING_XL: 'headingXL',
    HEADING_L: 'headingL',
    HEADING_M: 'headingM',
    HEADING_S: 'headingS',
    HEADING_XS: 'headingXS',
    BODY_M_R: 'bodyMRegular',
    BODY_M_M: 'bodyMMedium',
    BODY_S_R: 'bodySRegular',
    BODY_S_M: 'bodySMedium',
    CAPTION_M_R: 'captionMRegular',
    CAPTION_M_M: 'captionMMedium',
    CAPTION_S_R: 'captionSRegular',
    CAPTION_S_M: 'captionSMedium',
} as const;

export const Sizes = {
    BIG: 'big',
    NORMAL: 'normal',
    SMALL: 'small',
} as const;

export type AlignsType = typeof Aligns[keyof typeof Aligns];
export type BrandsType = typeof Brands[keyof typeof Brands];
export type TypographyType = typeof Typography[keyof typeof Typography];
export type SizesType = typeof Sizes[keyof typeof Sizes];

export type TextStyleSubset = Extract<
    TypographyType,
    | typeof Typography.BODY_M_M
    | typeof Typography.BODY_M_R
    | typeof Typography.BODY_S_M
    | typeof Typography.BODY_S_R
    | typeof Typography.CAPTION_M_M
    | typeof Typography.CAPTION_M_R
    | typeof Typography.CAPTION_S_M
    | typeof Typography.CAPTION_S_R
>;

export type ForegroundType = typeof foregroundTokens[number];
export type BorderType = typeof borderTokens[number];
export type BackgroundType = typeof backgroundTokens[number];
