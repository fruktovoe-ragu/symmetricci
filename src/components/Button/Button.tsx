import React, { Ref, useMemo } from 'react';
import { StyleSheetManager } from 'styled-components';
import { shouldForwardProp } from 'src/utils/shouldForwardProp';
import { Sizes } from 'src/constants/common';
import { Text } from 'src/components/Text/Text';
import { Preloader } from 'src/components/Preloader/Preloader';
import { IButtonProps, defaultProps } from './ButtonTypes';
import { StyledButton, StyledContent } from "./ButtonStyles";

const Button: React.FC<IButtonProps> = ({
    children,
    variant = defaultProps.variant,
    rank = defaultProps.rank,
    size = defaultProps.size,
    href,
    target,
    rel,
    actionType = defaultProps.actionType,
    icon,
    ariaLabel,
    buttonRef,
    fullWidth,
    showArrow = defaultProps.showArrow,
    showLoading = defaultProps.showLoading,
    disabled = defaultProps.disabled,
    className,
    onClick,
    onMouseDown,
}) => {
    const ElementTag = href ? 'a' : 'button';
    const typographyType = () => {
        switch (size) {
            case Sizes.SMALL:
                return "bodySRegular";
            case Sizes.NORMAL:
                return "bodyMMedium";
            default:
                return 'bodyMMedium';
        };
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void => {
        if (disabled) {
            e.preventDefault();

            return;
        }

        onClick?.(e);
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void => {
        if (disabled) {
            e.preventDefault();

            return;
        }

        onMouseDown?.(e);
    };

    const renderedContent = useMemo((): null | JSX.Element => {
        const isIconButtonType = !children;

        const arrowIcon = (): JSX.Element => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g filter="url(#filter0_b_11_11019)">
                    <path d="M17 10H7L12 15L17 10Z" fill="#141416"/>
                </g>
                <defs>
                    <filter id="filter0_b_11_11019" x="-3" y="0" width="30" height="25" filterUnits="userSpaceOnUse">
                        <feFlood result="BackgroundImageFix"/>
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5"/>
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_11_11019"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_11_11019" result="shape"/>
                    </filter>
                </defs>
            </svg>
        );

        return (
            <StyledContent style={{ opacity: showLoading ? 0 : 1}}>
                {isIconButtonType ? (
                    <>
                        {!!icon ? icon : arrowIcon()}
                    </>
                ) : (
                    <>
                        {icon && icon}
                        {children && (
                            <Text
                                typography={typographyType()}
                                color="inherit"
                            >
                                {children}
                            </Text>
                        )}
                        {showArrow && arrowIcon()}
                    </>
                )}
            </StyledContent>
        )
    }, [
        children,
        showLoading,
        disabled,
        icon,
        showArrow,
        size,
    ]);

    const renderedLoader: JSX.Element = useMemo(() => <Preloader delay={false} />, []);

    const setRelAttribute = () => {
        if (ElementTag !== 'a') {
            return undefined;
        }

        if (rel) {
            return rel;
        }

        if (target && target !== '_self') {
            return 'noreferrer noopener';
        }

        return undefined;
    };

    return (
        <StyleSheetManager shouldForwardProp={shouldForwardProp}>
            <StyledButton
                className={className}
                variant={variant}
                rank={rank}
                size={size}
                fullWidth={fullWidth}
                hasContent={!!children}
                aria-label={ariaLabel}
                as={ElementTag}
                href={href}
                download={!!href}
                target={href ? target : undefined}
                rel={setRelAttribute()}
                type={href ? undefined : actionType}
                disabled={disabled}
                aria-disabled={disabled}
                ref={buttonRef as Ref<HTMLButtonElement & HTMLAnchorElement>}
                onClick={handleClick}
                onMouseDown={handleMouseDown}
            >
                {renderedContent}
                {showLoading && renderedLoader}
            </StyledButton>
        </StyleSheetManager>
    );
};

export { Button };
