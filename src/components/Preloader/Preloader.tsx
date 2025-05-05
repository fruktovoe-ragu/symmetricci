import React, { useState, useEffect } from 'react';
import { IPreloaderProps, defaultProps } from './PreloaderTypes';
import { StyledPreloader } from "./PreloaderStyles";

const Preloader: React.FC<IPreloaderProps> = ({
    color = defaultProps.color,
    delay = defaultProps.delay,
    className,
}) => {
    const [isShowed, setIsShowed] = useState(!delay);

    useEffect((): (() => void) | undefined => {
        if (isShowed) {
            return undefined;
        }

        const timerId = setTimeout(() => {
            setIsShowed(true);
        }, 250);

        return (): void => {
            clearTimeout(timerId);
        };
    }, [isShowed]);

    return isShowed ? (
        <StyledPreloader color={color} className={className}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path opacity="0.55" d="M18.5355 19.9497L15 16.4142L16.4142 15L19.9497 18.5355L18.5355 19.9497Z" fill="#141416"/>
                <path opacity="0.85" d="M15 7.53553L18.5355 4L19.9497 5.41421L16.4142 8.94975L15 7.53553Z" fill="#141416"/>
                <path opacity="0.25" d="M3.99999 18.5355L7.53552 15L8.94974 16.4142L5.4142 19.9497L3.99999 18.5355Z" fill="#141416"/>
                <path opacity="0.4" d="M11 22V17H13V22H11Z" fill="#141416"/>
                <path opacity="0.1" d="M7 13H2V11H7V13Z" fill="#141416"/>
                <path opacity="0.7" d="M22 13H17V11H22V13Z" fill="#141416"/>
                <path d="M11 7V2H13V7H11Z" fill="#141416"/>
            </svg>
        </StyledPreloader>
    ) : null;
};

export { Preloader };
