import { BrandsType, Brands, Typography, TextStyleSubset } from 'src/constants/common';

// Switch props types
export interface ISwitchProps {
    /**
     * Text content (you can pass link or other HTML tags like br, b, span)
     */
    children?: string;
    /**
     * Text style
     */
    textStyle?: TextStyleSubset;
    /**
     * Brand style
     */
    brand?: BrandsType;
    /**
     * Attribute that specifies the data sent to the server when the switch is checked in a form submission
     */
    value?: string;
    /**
     * Attribute that specifies the key used to identify the switch's value in form submissions
     */
    name?: string;
    /**
     *  Attribute that represents a description of the inner content for the screenreaders
     */
    ariaLabel?: string;
    /**
     * Attribute that indicates whether the switch is selected
     */
    checked?: boolean;
    /**
     * Attribute that specifies whether the switch must be checked before a form can be submitted or nor
     */
    disabled?: boolean;
    /**
     * Attribute that indicates whether the form is currently invalid based on user input
     */
    required?: boolean;
    /**
     * Custom class name for applying additional styles externally
     */
    className?: string;
    /**
     * Event listener that triggers when the switch is checked or unchecked, enabling you to handle changes in its state
     * @param {boolean} checked
     */
    onChange?: (checked: boolean) => void;
}

export const defaultProps = {
    textStyle: Typography.BODY_M_R,
    brand: Brands.BRAND_1,
    checked: false,
    disabled: false,
    required: false,
};
