import { BrandsType, Brands, Typography, TextStyleSubset } from 'src/constants/common';

// Radio button props types
export interface IRadioButtonProps {
    /**
     * Primary text content (you can pass link or other HTML tags like br, b, span)
     */
    children?: React.ReactNode;
    /**
     * Primary text style
     */
    textStyle?: TextStyleSubset;
    /**
     * Secondary text content
     */
    note?: string;
    /**
     * Brand style
     */
    brand?: BrandsType;
    /**
     * Attribute that specifies the data sent to the server when the radio button is checked in a form submission
     */
    value: string;
    /**
     * Attribute that specifies the key used to identify the radio button's value in form submissions
     */
    name?: string;
    /**
     *  Attribute that represents a description of the inner content for the screenreaders
     */
    ariaLabel?: string;
    /**
     * Attribute that indicates whether the radio button is selected
     */
    checked?: boolean;
    /**
     * Attribute that specifies whether the radio button must be checked before a form can be submitted or nor
     */
    disabled?: boolean;
    /**
     * Custom class name for applying additional styles externally
     */
    className?: string;
    /**
     * Event listener that triggers when the radio button's checked state changes. Receives the value of the selected radio button as a parameter
     * @param {string} value
     */
    onChange?: (value: string) => void;
}

export const defaultProps = {
    textStyle: Typography.BODY_M_R,
    brand: Brands.BRAND_1,
    disabled: false,
};
