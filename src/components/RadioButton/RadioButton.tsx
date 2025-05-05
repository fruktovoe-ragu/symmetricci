import { StyleSheetManager } from 'styled-components';
import { shouldForwardProp } from 'src/utils/shouldForwardProp';
import { Text } from 'src/components/Text/Text';
import { IRadioButtonProps, defaultProps } from './RadioButtonTypes';
import { Typography } from 'src/constants/common';
import {
    StyledRadioButton,
    StyledRadioButonCustomInput,
    StyledRadioButtonLabel,
    StyledRadioButtonContent,
} from "./RadioButtonStyles";

const RadioButton: React.FC<IRadioButtonProps> = ({
    children,
    textStyle = defaultProps.textStyle,
    note,
    brand = defaultProps.brand,
    value,
    name,
    ariaLabel,
    checked,
    disabled = defaultProps.disabled,
    className,
    onChange,
}) => {
    const checkedProp = checked !== undefined ? { checked: checked } : {};
    const areaCheckedProp = checked !== undefined ? { 'aria-checked': checked } : {};
    const composedProps = {
        value,
        brand,
        name,
        disabled,
        ...checkedProp,
        ...areaCheckedProp,
    };

    const handleChange = () => {
        onChange?.(value);
    };

    return (
        <StyleSheetManager shouldForwardProp={shouldForwardProp}>
            <StyledRadioButtonLabel className={className}>
                <StyledRadioButton
                    {...composedProps}
                    type="radio"
                    aria-disabled={disabled}
                    aria-label={ariaLabel}
                    onChange={handleChange}
                />
                <StyledRadioButonCustomInput brand={brand} />
                {!!children &&
                    <StyledRadioButtonContent disabled={disabled} onClick={handleChange}>
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
                    </StyledRadioButtonContent>
                }
            </StyledRadioButtonLabel>
        </StyleSheetManager>
    );
};

export { RadioButton };
