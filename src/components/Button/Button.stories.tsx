import { StoryObj, Meta } from "@storybook/react";
import { Button as ButtonComponent } from "./Button";
import {
    IButtonProps,
    defaultProps,
    ButtonVariants,
    ButtonRanks,
    ButtonActions,
} from "./ButtonTypes";
import { Sizes } from 'src/constants/common';

const IconExample1: React.FC = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <g filter="url(#filter0_b_11_10865)">
            <path d="M13 19H11V13H5V11H11V5H13V11H19V13H13V19Z" fill="#141416"/>
        </g>
        <defs>
            <filter id="filter0_b_11_10865" x="-5" y="-5" width="34" height="34" filterUnits="userSpaceOnUse">
                <feFlood result="BackgroundImageFix"/>
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="5"/>
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_11_10865"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_11_10865" result="shape"/>
            </filter>
        </defs>
    </svg>
);

const iconMap: Record<string, React.ReactNode> = {
    none: null,
    plus: <IconExample1 />,
};

export const CTOButton: StoryObj<IButtonProps> = {
    render: ({
        children, ...args
    }) => {
        return (
            <ButtonComponent {...args}>{children}</ButtonComponent>
        )
    },
    args: {
        ...defaultProps,
        children: 'CTO button',
        className: 'custom-class',
    },
};

export const CTOButtonFull: StoryObj<IButtonProps> = {
    render: ({
        children, ...args
    }) => {
        return (
            <ButtonComponent {...args}>{children}</ButtonComponent>
        )
    },
    args: {
        ...defaultProps,
        fullWidth: true,
        children: 'CTO button full',
    },
};

export const StatusButton: StoryObj<IButtonProps> = {
    render: ({
        children, ...args
    }) => {
        return (
            <ButtonComponent {...args}>{children}</ButtonComponent>
        )
    },
    args: {
        ...defaultProps,
        children: 'Error button',
        variant: ButtonVariants.DANGER,
        rank: ButtonRanks.SECONDARY,
    },
};

export const IconButton: StoryObj<IButtonProps> = {
    render: ({
        ...args
    }) => {
        return (
            <ButtonComponent {...args} />
        )
    },
    args: {
        ...defaultProps,
        icon: <IconExample1 />,
        variant: ButtonVariants.UNIVERSAL,
        rank: 'tertiary',
        size: 'small'
    },
};

export default {
    title: "Low-level components/Button",
    component: ButtonComponent,
    tags: ['autodocs'],
    parameters: {
        docs: {
            canvas: { sourceState: 'shown' },
        },
    },
    argTypes: {
        variant: {
            options: [...Object.values(ButtonVariants)],
            control: { type: "radio" },
        },
        rank: {
            options: [...Object.values(ButtonRanks)],
            control: { type: "radio" },
        },
        size: {
            options: [...Object.values(Sizes)],
            control: { type: "radio" },
        },
        actionType: {
            options: [...Object.values(ButtonActions)],
            control: { type: "radio" },
        },
        icon: {
            options: ['none', 'plus'],
            control: { type: "radio" },
            mapping: iconMap,
        },
    },
} satisfies Meta<typeof ButtonComponent>;
