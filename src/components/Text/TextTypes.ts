import { AlignsType, Aligns, TypographyType, Typography, ForegroundType } from 'src/constants/common';
import { foregroundTokens } from 'src/design-tokens/colors';

export const Tags = {
    H1: 'h1',
    H2: 'h2',
    H3: 'h3',
    H4: 'h4',
    H5: 'h5',
    LABEL: 'label',
    P: 'p',
} as const;

export const tagsLibrary = {
    headingXL: Tags.H1,
    headingL: Tags.H2,
    headingM: Tags.H3,
    headingS: Tags.H4,
    headingXS: Tags.H5,
    bodyMRegular: Tags.P,
    bodyMMedium: Tags.P,
    bodySRegular: Tags.P,
    bodySMedium: Tags.P,
    captionMRegular: Tags.P,
    captionMMedium: Tags.P,
    captionSRegular: Tags.P,
    captionSMedium: Tags.P,
} as const;

export type TypographyKeys = keyof typeof tagsLibrary;
export type TagsType = typeof Tags[keyof typeof Tags];

// Text props types
export interface ITextProps {
    /**
     * Text content (you can pass link or other HTML tags like br, b, span)
     */
    children?: React.ReactNode;
    /**
     * Style of the text according to Valo. Every style associates with certain HTML tag by default, but you can select any other tag
     */
    typography?: TypographyType;
    /**
     * Foreground colors from Valo
     */
    color?: ForegroundType | "inherit";
    /**
     * HTML tags for SEO and accessibility matters
     */
    tag?: TagsType;
    /**
     * Attribute for <label> tag that specifies the id of the form element that the label is associated with
     */
    htmlFor?: string;
    /**
     * Horizontal alignment
     */
    align?: AlignsType;
    /**
     * Apply browser default margins on the text
     */
    nativeMargin?: boolean;
    /**
     * Custom class name for applying additional styles externally
     */
    className?: string;
}

export const defaultProps = {
    typography: Typography.BODY_M_R,
    color: foregroundTokens[0],
    align: Aligns.LEFT,
    nativeMargin: false,
};
