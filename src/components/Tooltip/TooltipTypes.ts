// Tooltip props types
export const Variant = {
    DEFAULT: 'default',
    INVERTED: 'inverted',
    ALERT: 'alert',
} as const;

export const Side = {
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left',
} as const;

export const TooltipAlign = {
    START: 'start',
    CENTER: 'center',
    END: 'end',
} as const;

export type VariantType = typeof Variant[keyof typeof Variant];
export type SideType = typeof Side[keyof typeof Side];
export type TooltipAlignType = typeof TooltipAlign[keyof typeof TooltipAlign];

export interface ITooltipProps {
    /**
     *  Trigger that toggles the tooltip
     */
    children: React.ReactNode;
    /**
     *  Text content (you can pass link or other HTML tags like br, b, span)
     */
    title: React.ReactNode;
    /**
     *  Attribute that represents a description of the inner content for the screenreaders
     */
    ariaLabel?: string;
    /** 
     * Visual style of the tooltip 
     */
    variant?: VariantType;
    /**
     *  The preferred side of the trigger to render against when open (reversed when collisions occurs)
     */
    side?: SideType;
    /**
     *  The preferred alignment against the trigger (may change when collisions occur)
     */
    align?: TooltipAlignType;
    /**
     *  The duration from when the mouse enters a tooltip trigger until the tooltip opens (0-1000)
     */
    delayDuration?: number;
    /**
     *  Indicates if tooltip is opened. Used in combination with onOpenChange to manage the tooltip's open/close state in a controlled manner
     */
    opened?: boolean;
    /**
     *  Enable the tooltip to remain visible even when the user hovers over the tooltip itself
     */
    interactive?: boolean;
    /**
     *  Indicates if tooltip has an arrow
     */
    arrow?: boolean;
    /**
     *  Indicates if tooltip has external link icon
     */
    showExternalLinkIcon?: boolean;
    /**
     * Custom class name for applying additional styles externally
     */
    className?: string;
    /**
     *  Callback function that is called when the tooltip is opened or closed
     */
    onOpenChange?: (open: boolean) => void;
};

export const defaultProps = {
    variant: Variant.DEFAULT,
    side: Side.TOP,
    align: TooltipAlign.CENTER,
    delayDuration: 0,
    interactive: false,
    arrow: false,
    showExternalLinkIcon: false,
};
