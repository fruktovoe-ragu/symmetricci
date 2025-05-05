import React, { useMemo } from 'react';
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { Text } from '../Text/Text';
import { ITooltipProps, defaultProps, Variant } from './TooltipTypes';
import {
    StyledTooltipBody,
    StyledTooltipArrow,
    StyledTooltipExternalLinkIcon,
    StyledTooltipAlertIcon,
} from "./TooltipStyles";

const Tooltip: React.FC<ITooltipProps> = ({
    children,
    title,
    ariaLabel,
    variant = defaultProps.variant,
    side = defaultProps.side,
    align = defaultProps.align,
    delayDuration = defaultProps.delayDuration,
    opened,
    interactive = defaultProps.interactive,
    arrow = defaultProps.arrow,
    showExternalLinkIcon = defaultProps.showExternalLinkIcon,
    className,
    onOpenChange,
}) => {
    const openedProp = opened !== undefined ? {open: opened } : {};

    const textColor = () => {
        switch (variant) {
            case Variant.DEFAULT:
                return 'generalPrimaryInverted';
            default:
                return 'generalPrimary';
        };
    };

    const renderExternalLinKIcon = useMemo((): JSX.Element => (
        <StyledTooltipExternalLinkIcon width="20" height="20" viewBox="0 0 20 20" fill="none">
            <g filter="url(#filter0_b_3778_88912)">
                <path d="M14.1663 16.6668H4.99984C4.08094 16.6668 3.33334 15.9192 3.33334 15.0003V5.83306C3.33334 4.91415 4.08094 4.16656 4.99984 4.16656H8.33359V5.83306H4.99984V15.0003H14.1663V11.6666H15.8336V15.0003C15.8336 15.9192 15.0857 16.6668 14.1663 16.6668ZM9.75034 11.4228L8.57509 10.2438L13.8191 4.99981H10.8333V3.33331H16.6668V9.16681H15.0003V6.17881L9.75034 11.4228Z" fill="white"/>
            </g>
            <defs>
                <filter id="filter0_b_3778_88912" x="-6.66666" y="-6.66669" width="33.3335" height="33.3335" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="5"/>
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_3778_88912"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_3778_88912" result="shape"/>
                </filter>
            </defs>
        </StyledTooltipExternalLinkIcon>
    ), []);

    const renderAlertIcon = useMemo((): JSX.Element => (
        <StyledTooltipAlertIcon width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g filter="url(#filter0_b_827_9458)">
                <path d="M11.9999 21.9998C6.48594 21.9998 2 17.5139 2 11.9999C2 6.48594 6.48594 2 11.9999 2C17.5139 2 21.9998 6.48594 21.9998 11.9999C21.9967 14.6699 20.9555 17.18 19.0677 19.0677C17.18 20.9555 14.6699 21.9967 11.9999 21.9998ZM11 14.9996V17.0003H12.9998V14.9996H11ZM11 7.0004V12.9998H12.9998V7.0004H11Z" fill="white"/>
            </g>
            <defs>
                <filter id="filter0_b_827_9458" x="-8" y="-8" width="40" height="39.9998" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="5"/>
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_827_9458"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_827_9458" result="shape"/>
                </filter>
            </defs>
        </StyledTooltipAlertIcon>
    ), []);

    return  (
        <TooltipPrimitive.Provider delayDuration={delayDuration} disableHoverableContent={interactive}>
			<TooltipPrimitive.Root {...openedProp} onOpenChange={onOpenChange}>
				<TooltipPrimitive.Trigger asChild>
                    <div style={{ display: 'inline-block' }}>{children}</div>
				</TooltipPrimitive.Trigger>
				<TooltipPrimitive.Portal>
                    <div style={{ position: 'absolute', zIndex: '99999' }}>
                        <StyledTooltipBody
                            variant={variant}
                            sideOffset={4}
                            side={side}
                            align={align}
                            aria-label={ariaLabel}
                            className={className}
                        >
                            {variant === Variant.ALERT && renderAlertIcon}
                            <Text
                                color={textColor()}
                                typography="bodySRegular"
                            >
                                {title}
                                {variant !== Variant.ALERT && showExternalLinkIcon &&
                                    renderExternalLinKIcon
                                }
                            </Text>
                            {arrow &&<StyledTooltipArrow />}
                        </StyledTooltipBody>
                    </div>
				</TooltipPrimitive.Portal>
			</TooltipPrimitive.Root>
		</TooltipPrimitive.Provider>
    );
};

export { Tooltip };
