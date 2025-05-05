import React, { useState, useEffect, useMemo } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Text } from 'src/components/Text/Text';
import { ICheckboxProps, defaultProps } from './CheckboxTypes';
import { Typography } from 'src/constants/common';
import {
    StyledCheckbox,
    StyledCheckboxLabel,
    StyledCheckboxContent,
    StyledCheckboxIcon,
} from "./CheckboxStyles";

const Checkbox: React.FC<ICheckboxProps> = ({
    children,
    textStyle = defaultProps.textStyle,
    note,
    brand = defaultProps.brand,
    value,
    name,
    ariaLabel,
    checked = defaultProps.checked,
    indeterminate = defaultProps.indeterminate,
    disabled = defaultProps.disabled,
    required = defaultProps.required,
    invalid = defaultProps.invalid,
    className,
    onChange,
}) => {
    const [isChecked, setIsChecked] = useState(checked);
    const isError = invalid && !disabled && !isChecked;
    const composedProps = {
        brand,
        value,
        name,
        checked: isChecked,
        defaultChecked: defaultProps.checked,
        disabled,
        required,
     };

    useEffect(() => {
        setIsChecked(checked);
    }, [checked]);

    const handleCheckedChange = (newChecked: boolean) => {
        setIsChecked(newChecked);

        onChange?.(!isChecked);
    };

    const renderIconMinus = useMemo((): JSX.Element => (
        <StyledCheckboxIcon viewBox="0 0 20 20" fill="none">
            <g filter="url(#filter0_b_6548_7663)">
                <path d="M4.16675 9.16666H15.8334V10.8333H4.16675V9.16666Z" fill="white"/>
            </g>
            <defs>
                <filter id="filter0_b_6548_7663" x="-5.83325" y="-0.833336" width="31.6667" height="21.6667" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="5"/>
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_6548_7663"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_6548_7663" result="shape"/>
                </filter>
            </defs>
        </StyledCheckboxIcon>
    ), []);

    const renderIconChecked = useMemo((): JSX.Element => (
        <StyledCheckboxIcon viewBox="0 0 20 20" fill="none">
            <g filter="url(#filter0_b_6548_7660)">
                <path d="M4.16675 10.3033L5.34508 9.125L8.293 12.0696L8.29175 12.0708L15.3626 5L16.5409 6.17833L9.47008 13.25L8.29258 14.4275L8.29175 14.4283L4.16675 10.3033Z" fill="white"/>
            </g>
            <defs>
                <filter id="filter0_b_6548_7660" x="-5.83325" y="-5" width="32.3743" height="29.4283" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="5"/>
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_6548_7660"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_6548_7660" result="shape"/>
                </filter>
            </defs>
        </StyledCheckboxIcon>
    ), []);

    return (
        <StyledCheckboxLabel className={className}>
            <StyledCheckbox
                {...composedProps}
                aria-label={ariaLabel}
                aria-disabled={disabled}
                aria-checked={isChecked}
                aria-invalid={isError}
                onCheckedChange={handleCheckedChange}
            >
                <CheckboxPrimitive.Indicator>
                    {isChecked && (indeterminate ? renderIconMinus : renderIconChecked)}
                </CheckboxPrimitive.Indicator>
            </StyledCheckbox>
            {!!children &&
                <StyledCheckboxContent disabled={disabled} onChange={() => handleCheckedChange(!isChecked)}>
                    <Text
                        typography={textStyle}
                        color={disabled ? 'statusDisabled' : 'generalPrimary'}
                    >
                        {children}
                    </Text>
                    {note &&
                        <Text
                            typography={Typography.CAPTION_M_R}
                            color={disabled ? 'statusDisabled' : 'generalSecondary'}
                        >
                            {note}
                        </Text>
                    }
                </StyledCheckboxContent>
            }
        </StyledCheckboxLabel>
    );
};

export { Checkbox };
