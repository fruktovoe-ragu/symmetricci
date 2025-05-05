import { StoryObj, Meta } from "@storybook/react";
import { Preloader as PreloaderComponent } from "./Preloader";
import { IPreloaderProps, defaultProps } from "./PreloaderTypes";
import { lightTheme } from 'src/design-tokens/themes';

export const Preloader: StoryObj<IPreloaderProps> = {
    render: ({
        ...args
    }) => {
        return (
            <PreloaderComponent
                {...args}
            />
        )
    },
    args: {
        ...defaultProps,
        className: 'custom-class',
    },
};

export default {
    title: "Low-level components/Preloader",
    component: PreloaderComponent,
    tags: ['autodocs'],
    parameters: {
        docs: {
            canvas: { sourceState: 'shown' },
        },
    },
    argTypes: {
        color: {
            options: Object.keys(lightTheme.colors.foreground),
            control: { type: "select" },
        },
    },
} satisfies Meta<typeof PreloaderComponent>;
