import React, { useState, useEffect } from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { Text } from 'src/components/Text/Text';
import { ISwitchProps, defaultProps } from './SwitchTypes';
import {
    StyledSwitch,
    StyledSwitchWrapper,
    StyledSwitchContent,
} from "./SwitchStyles";

const Switch: React.FC<ISwitchProps> = ({
    children,
    textStyle = defaultProps.textStyle,
    brand = defaultProps.brand,
    value,
    name,
    ariaLabel,
    checked = defaultProps.checked,
    disabled = defaultProps.disabled,
    required = defaultProps.required,
    className,
    onChange,
}) => {
    const [isChecked, setIsChecked] = useState(checked);
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

    return (
        <StyledSwitchWrapper className={className}>
            <StyledSwitch
                {...composedProps}
                aria-label={ariaLabel}
                onCheckedChange={handleCheckedChange}
            >
                <SwitchPrimitive.Thumb />
            </StyledSwitch>
            <StyledSwitchContent disabled={disabled} onChange={() => handleCheckedChange(!isChecked)}>
                <Text
                    typography={textStyle}
                    color={disabled ? 'statusDisabled' : 'generalPrimary'}
                >
                    {children}
                </Text>
            </StyledSwitchContent>
        </StyledSwitchWrapper>
    );
};

export { Switch };
