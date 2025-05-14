import React, { Ref } from 'react';
import { Brands, Sizes, SizesType } from 'src/constants/common';

export const ButtonRanks = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    TERTIARY: 'tertiary',
} as const;

export type ButtonRanksType = typeof ButtonRanks[keyof typeof ButtonRanks];

export const ButtonVariants = {
    ...Brands,
    INFO: 'info',
    DANGER: 'danger',
} as const;

export type ButtonVariantsType = typeof ButtonVariants[keyof typeof ButtonVariants];

export const ButtonActions = {
    BUTTON: 'button',
    RESET: 'reset',
    SUBMIT: 'submit',
} as const;

type ButtonActionsType = typeof ButtonActions[keyof typeof ButtonActions];

// Button props types
export interface IButtonProps {
    /**
     *  Text content (no text converts button to icon button)
     */
    children?: string | null;
    /**
     * Visual brand-specific and system status themes
     */
    variant?: ButtonVariantsType;
    /**
     * Visual importance of the button
     */
    rank?: ButtonRanksType;
    /**
     * Size of the button
     */
    size?: SizesType;
    /**
     * Hyperlink attribute to allow button to function as a link
     */
    href?: string;
    /**
     * Hyperlink attribute that indicates its type
     */
    target?: '_self' | '_blank' | '_parent' | '_top';
    /**
     * Hyperlink attribute that defines how it relates to other elements on the webpage
     */
    rel?: string;
    /**
     * Type of action the button performs
     */
    actionType?: ButtonActionsType;
    /**
     *  Icon element
     */
    icon?: JSX.Element;
    /**
     *  Attribute that represents a description of the inner content for the screenreaders
     */
    ariaLabel?: string;
    /**
     * Provides a reference to the button or link element
     */
    buttonRef?: Ref<HTMLButtonElement | HTMLAnchorElement>;
    /**
     * Makes button stretching on all available width
     */
    fullWidth?: boolean;
    /**
     *  Indicates if button has arrow icon for dropdown (works as a default icon for icon button if no custom icon is provided)
     */
    showArrow?: boolean;
    /**
     *  Indicates whether the button is loading
     */
    showLoading?: boolean;
    /**
     * Attribute that indicates whether the button is unclickable
     */
    disabled?: boolean;
    /**
     * Custom class name for applying additional styles externally
     */
    className?: string;
    /**
     * Event listener that triggers when the button is clicked
     * @param {React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>} e
     */
    onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    /**
     * Event listener that triggers when the button is pressed down
     * @param {React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>} e
     */
    onMouseDown?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}

export const defaultProps = {
    variant: ButtonVariants.BRAND_1,
    rank: ButtonRanks.PRIMARY,
    size: Sizes.NORMAL,
    actionType: ButtonActions.BUTTON,
    fullWidth: false,
    showArrow: false,
    showLoading: false,
    disabled: false,
};
