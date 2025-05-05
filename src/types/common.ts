import { ForegroundType, BorderType, BackgroundType, TypographyType } from "src/constants/common";

type DynamicProperty = {
    [key: string]: string;
};

type DynamicProperty2<T extends string> = {
    [key in T]: string;
  };

type ColorCategories = {
    foreground: DynamicProperty2<ForegroundType>;
    border: DynamicProperty2<BorderType>;
    background: DynamicProperty2<BackgroundType>;
};

type Typography = {
    [key in TypographyType]: {
        fontFamily: string,
        paragraphIndent: number,
        paragraphSpacing: number,
        textDecoration: string,
        textCase: string,
        fontStyle: string,
        fontStretch: string,
        fontSize: string,
        fontWeight: number,
        letterSpacing: string,
        lineHeight: string,
    }
};

export type ColorThemes = {
    lightTheme: ColorCategories;
    darkTheme: ColorCategories;
};

export type StyleTheme = {
    colors: ColorCategories;
    typography: Typography;
    spacing: DynamicProperty;
    radii: DynamicProperty;
};
