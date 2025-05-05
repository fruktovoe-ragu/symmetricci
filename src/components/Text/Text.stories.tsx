import { StoryObj, Meta } from "@storybook/react";
import { Text } from "./Text";
import { ITextProps, defaultProps, Tags, tagsLibrary } from "./TextTypes";
import { Aligns, Typography } from 'src/constants/common';
import { lightTheme } from 'src/design-tokens/themes';

const customShortText = "Lorem consectetur adipiscing elit.";
const customLongText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas dui dolor, ut vestibulum nisi sodales et.";

export const HeadingExample: StoryObj<ITextProps> = {
    render: ({
        children, tag, typography = defaultProps.typography, ...rest
    }) => {
        const ElementTag = tag ? tag : tagsLibrary[typography];

    return (
        <Text tag={tag} typography={typography} {...rest}>{`<${ElementTag}>${children}</${ElementTag}>`}</Text>)
    },
    args: {
        children: customLongText,
        typography: Typography.HEADING_M,
        color: defaultProps.color,
        align: defaultProps.align,
        nativeMargin: true,
        className: 'custom-class',
    },
};

export const ParagraphExample: StoryObj<ITextProps> = {
    render: ({
        children, tag, typography = defaultProps.typography, ...rest
    }) => {
    return (
        <Text tag={tag} typography={typography} {...rest}>{children}</Text>)
    },
    args: {
        children: customShortText,
        typography: Typography.BODY_S_R,
        color: defaultProps.color,
        align: defaultProps.align,
    },
};

export const LabelExample: StoryObj<ITextProps> = {
    render: ({
        children, tag, typography = defaultProps.typography, ...rest
    }) => {
    return (
        <Text tag={tag} typography={typography} {...rest}>{children}</Text>)
    },
    args: {
        children: customShortText,
        typography: Typography.BODY_M_M,
        color: defaultProps.color,
        align: defaultProps.align,
        tag: Tags.LABEL,
    },
};

/** Text component for heading, paragraph or label */
export default {
    title: "Low-level components/Text",
    component: Text,
    tags: ['autodocs'],
    parameters: {
        docs: {
            canvas: { sourceState: 'shown' },
        },
    },
    argTypes: {
        typography: {
            options: Object.values(Typography),
            control: { type: "select" },
        },
        align: {
            options: Object.values(Aligns),
            control: { type: "radio" },
        },
        color: {
            options: Object.keys(lightTheme.colors.foreground),
            control: { type: "select" },
        },
        tag: {
            options: Object.values(Tags),
            control: { type: "select" },
        },
        htmlFor: {
            control: { type: "text" },
        }
    },
} as Meta<typeof Text>;
