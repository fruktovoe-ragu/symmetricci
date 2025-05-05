import { StoryObj, Meta } from "@storybook/react";
import { useArgs } from '@storybook/preview-api';
import { Checkbox as CheckboxComponent } from "./Checkbox";
import { ICheckboxProps, defaultProps } from './CheckboxTypes';
import { Brands } from 'src/constants/common';

const checkboxContent = 'Checkbox label content';

export const Checkbox: StoryObj<ICheckboxProps> = {
    render: ({
        children, ...args
    } ) => {
        const [_, updateArgs] = useArgs();

        return (
            <CheckboxComponent
                {...args}
                onChange={isChecked => updateArgs({ ...args, checked: isChecked })}
            >
                {children}
            </CheckboxComponent>
        )
    },

    args: {
        ...defaultProps,
        children: checkboxContent,
        note: 'Note content',
        className: 'custom-class',
    },
};

export const CheckboxIndeterminate: StoryObj<ICheckboxProps> = {
    render: ({
        children, ...args
    }) => {
        const [_, updateArgs] = useArgs();

        return (
            <CheckboxComponent
                {...args}
                onChange={isChecked => updateArgs({ ...args, checked: isChecked })}
            >
                {children}
            </CheckboxComponent>
        )
    },

    args: {
        ...defaultProps,
        children: checkboxContent,
        checked: true,
        indeterminate: true,
    },
};

export const CheckboxWithoutLabel: StoryObj<ICheckboxProps> = {
    render: ({
        ...args
    }) => {
        const [_, updateArgs] = useArgs();

        return (
            <CheckboxComponent
                {...args}
                onChange={isChecked => updateArgs({ ...args, checked: isChecked })}
            />
        )
    },

    args: {
        checked: true,
        brand: Brands.UNIVERSAL,
    },
};

export default {
    title: "Low-level components/Checkbox",
    component: CheckboxComponent,
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
    },
} satisfies Meta<typeof CheckboxComponent>;
