import { BrandsType, Brands, Typography, TextStyleSubset } from 'src/constants/common';

// Checkbox props types
export interface ICheckboxProps {
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
     * Attribute that specifies the data sent to the server when the checkbox is checked in a form submission
     */
    value?: string;
    /**
     * Attribute that specifies the key used to identify the checkbox's value in form submissions
     */
    name?: string;
    /**
     *  Attribute that represents a description of the inner content for the screenreaders
     */
    ariaLabel?: string;
    /**
     * Attribute that indicates whether the checkbox is selected
     */
    checked?: boolean;
    /**
     * Mixed or uncertain state, used when some but not all related options are selected
     */
    indeterminate?: boolean;
    /**
     * Attribute that specifies whether the checkbox must be checked before a form can be submitted or nor
     */
    disabled?: boolean;
    /**
     * Attribute that indicates whether the form is currently invalid based on user input
     */
    required?: boolean;
    /**
     * Attribute that indicates whether the checkbox is unclickable
     */
    invalid?: boolean;
    /**
     * Custom class name for applying additional styles externally
     */
    className?: string;
    /**
     * Event listener that triggers when the checkbox is checked or unchecked, enabling you to handle changes in its state
     * @param {boolean} checked
     */
    onChange?: (checked: boolean) => void;
}

export const defaultProps = {
    textStyle: Typography.BODY_M_R,
    brand: Brands.BRAND_1,
    checked: false,
    indeterminate: false,
    disabled: false,
    required: false,
    invalid: false,
};
