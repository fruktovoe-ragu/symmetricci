import { Typography } from 'src/constants/common';
import { StyleTheme } from 'src/types/common';
import { colorValues } from 'src/design-tokens/colors';

const base = {
    fontFamily: "Inter, sans-serif",
    paragraphIndent: 0,
    paragraphSpacing: 0,
    textDecoration: "none",
    textCase: "none",
    fontStyle: "normal",
    fontStretch: "normal",
};
const bodyM = {
    fontSize: "1rem",
    letterSpacing: "-0.0113rem",
    lineHeight: "1.5rem",
};
const bodyS = {
    fontSize: "0.875rem",
    letterSpacing: "-0.005rem",
    lineHeight: "1.25rem",
};
const captionM = {
    fontSize: "0.75rem",
    letterSpacing: "-0.005rem",
    lineHeight: "1rem",
};
const captionS = {
    fontSize: "0.625rem",
    letterSpacing: "0.005rem",
    lineHeight: "0.875rem",
};

export const allTokens = {
    typography: {
        [Typography.HEADING_XL]: {
            fontSize: "1.75rem",
            fontWeight: 600,
            letterSpacing: "-0.0369rem",
            lineHeight: "2.5rem",
            ...base,
        },
        [Typography.HEADING_L]: {
            fontSize: "1.5rem",
            fontWeight: 600,
            letterSpacing: "-0.0288rem",
            lineHeight: "2.25rem",
            ...base,
        },
        [Typography.HEADING_M]: {
            fontSize: "1.25rem",
            fontWeight: 600,
            letterSpacing: "-0.0213rem",
            lineHeight: "1.75rem",
            ...base,
        },
        [Typography.HEADING_S]: {
            fontSize: "1.125rem",
            fontWeight: 600,
            letterSpacing: "-0.0156rem",
            lineHeight: "1.5rem",
            ...base,
        },
        [Typography.HEADING_XS]: {
            fontSize: "1rem",
            fontWeight: 600,
            letterSpacing: "-0.0113rem",
            lineHeight: "1.5rem",
            ...base,
        },
        [Typography.BODY_M_R]: {
            fontWeight: 400,
            ...bodyM,
            ...base,
        },
        [Typography.BODY_M_M]: {
            fontWeight: 600,
            ...bodyM,
            ...base,
        },
        [Typography.BODY_S_R]: {
            fontWeight: 400,
            ...bodyS,
            ...base,
        },
        [Typography.BODY_S_M]: {
            fontWeight: 600,
            ...bodyS,
            ...base,
        },
        [Typography.CAPTION_M_R]: {
            fontWeight: 400,
            ...captionM,
            ...base,
        },
        [Typography.CAPTION_M_M]: {
            fontWeight: 600,
            ...captionM,
            ...base,
        },
        [Typography.CAPTION_S_R]: {
            fontWeight: 400,
            ...captionS,
            ...base,
        },
        [Typography.CAPTION_S_M]: {
            fontWeight: 600,
            ...captionS,
            ...base,
        },
    },
    spacing: {
        xxxs: "4px",
        xxs: "8px",
        xs: "12px",
        s: "16px",
        m: "24px",
        l: "32px",
        xl: "40px",
        xxl: "64px",
        xxxl: "80px",
    },
    radii: {
        s: "4px",
        m: "8px",
        l: "12px",
        full: "100%",
    },
};

export const lightTheme: StyleTheme = {
    colors: { ...colorValues.lightTheme },
    ...allTokens,
} as const;

export const darkTheme: StyleTheme = {
    colors: { ...colorValues.darkTheme },
    ...allTokens,
} as const;
