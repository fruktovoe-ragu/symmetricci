import { useState } from 'react';
import { StoryObj, Meta } from "@storybook/react";
import { RadioButton as RadioButtonComponent } from "./RadioButton";
import { IRadioButtonProps, defaultProps } from './RadioButtonTypes';
import { Brands } from 'src/constants/common';

const radioButtonContent = 'RadioButton label content';

export const RadioButtonUncontrolled: StoryObj<IRadioButtonProps> = {
    render: ({
        children, ...args
    }) => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <RadioButtonComponent
                    {...args}
                    name="group-1"
                    value='uncontrolled-radio-1'
                    note="Note content"
                >
                    {children}
                </RadioButtonComponent>
                <RadioButtonComponent
                    {...args}
                    name="group-1"
                    value='uncontrolled-radio-2'
                >
                    {children}
                </RadioButtonComponent>
            </div>
        )
    },

    args: {
        ...defaultProps,
        children: radioButtonContent,
    },
};

export const RadioButtonControlled: StoryObj<IRadioButtonProps> = {
    render: ({
        children, ...args
    }) => {
        const [selectedOption, setSelectedOption] = useState('');

        const handleRadioChange = (value: string) => {
            setSelectedOption(value);
        }

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <RadioButtonComponent
                    {...args}
                    value='controlled-radio-1'
                    checked={selectedOption === 'controlled-radio-1'}
                    onChange={handleRadioChange}
                    >
                    {children}
                </RadioButtonComponent>
                <RadioButtonComponent
                    {...args}
                    value='controlled-radio-2'
                    checked={selectedOption === 'controlled-radio-2'}
                    onChange={handleRadioChange}
                    >
                    {children}
                </RadioButtonComponent>
            </div>
        )
    },

    args: {
        ...defaultProps,
        children: radioButtonContent,
        brand: Brands.UNIVERSAL,
    },
};

export const RadioButtonWithoutLabel: StoryObj<IRadioButtonProps> = {
    render: ({
        ...args
    }) => {
        return (
            <RadioButtonComponent {...args} />
        )
    },

    args: {
        value: 'single-radio-2',
        checked: true,
    },
};

export default {
    title: "Low-level components/RadioButton",
    component: RadioButtonComponent,
    tags: ['autodocs'],
    parameters: {
        docs: {
            canvas: { sourceState: 'shown' },
        },
    },
    argTypes: {
        textStyle: {
            options: [
                'bodyMRegular',
                'bodyMMedium',
                'bodySRegular',
                'bodySMedium',
                'captionMRegular',
                'captionMMedium',
                'captionSRegular',
                'captionSMedium'
            ],
            control: { type: "select" },
        },
        brand: {
            options: Object.values(Brands),
            control: { type: "radio" },
        },
        checked: { control: false },
    },
} satisfies Meta<typeof RadioButtonComponent>;
