import { useState } from 'react';
import { StoryObj, Meta } from "@storybook/react";
import { Tooltip as TooltipComponent } from "./Tooltip";
import { Button } from "src/components/Button/Button";
import { ITooltipProps, defaultProps, Variant, Side, TooltipAlign } from './TooltipTypes';

const tooltipContent = 'You must transfer the ownership of this room before you can leave';

export const TooltipUncontrolled: StoryObj<ITooltipProps> = {
    render: ({
        ...args
    }) => {
        return (

                <TooltipComponent
                    {...args}
                >
                    <Button>Hover me</Button>
                </TooltipComponent>
        )
    },

    args: {
        ...defaultProps,
        title: tooltipContent,
        className: 'custom-class',
    },
};

export const TooltipControlled: StoryObj<ITooltipProps> = {
    render: ({
        ...args
    }) => {
        const [isOpened, setIsOpened] = useState(false);

        const handleTooltipChange = (open: boolean) => {
            setIsOpened(open);
        };

        return (

                <TooltipComponent
                    {...args}
                    opened={isOpened}
                    onOpenChange={handleTooltipChange}
                >
                    <Button>Hover me</Button>
                </TooltipComponent>
        )
    },

    args: {
        ...defaultProps,
        title: tooltipContent,
    },
};

export default {
    title: "Low-level components/Tooltip",
    component: TooltipComponent,
    tags: ['autodocs'],
    parameters: {
        docs: {
            canvas: { sourceState: 'shown' },
        },
    },
    argTypes: {
        variant: {
            options: Object.values(Variant),
            control: { type: "radio" },
        },
        side: {
            options: Object.values(Side),
            control: { type: "radio" },
        },
        align: {
            options: Object.values(TooltipAlign),
            control: { type: "radio" },
        },
        delayDuration: {
            control: { type: "number", min: 0, max: 1000, step: 10}
        }
    },
} satisfies Meta<typeof TooltipComponent>;
