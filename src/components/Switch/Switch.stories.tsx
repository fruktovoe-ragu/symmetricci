import { StoryObj, Meta } from "@storybook/react";
import { useArgs } from '@storybook/preview-api';
import { Switch as SwitchComponent } from "./Switch";
import { ISwitchProps, defaultProps } from './SwitchTypes';
import { Brands } from 'src/constants/common';

const switchContent = 'Switch label content';

export const Switch: StoryObj<ISwitchProps> = {
    render: ({
        children, ...args
    }) => {
        const [_, updateArgs] = useArgs();

        return (
            <SwitchComponent
                {...args}
                onChange={isChecked => updateArgs({ ...args, checked: isChecked })}
            >
                {children}
            </SwitchComponent>
        )
    },

    args: {
        ...defaultProps,
        children: switchContent,
        className: 'custom-class',
    },
};

export const SwitchWithoutLabel: StoryObj<ISwitchProps> = {
    render: ({
        ...args
    }) => {
        const [_, updateArgs] = useArgs();

        return (
            <SwitchComponent
                {...args}
                onChange={isChecked => updateArgs({ ...args, checked: isChecked })}
            />
        )
    },

    args: {
        brand: Brands.UNIVERSAL,
        checked: true,
    },
};

export default {
    title: "Low-level components/Switch",
    component: SwitchComponent,
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
} satisfies Meta<typeof SwitchComponent>;
