import { StyleSheetManager } from 'styled-components';
import { shouldForwardProp } from 'src/utils/shouldForwardProp';
import { ITextProps, defaultProps, Tags, tagsLibrary, TypographyKeys } from './TextTypes';
import { StyledText } from "./TextStyles";

export const Text: React.FC<ITextProps> = ({
    children,
    typography = defaultProps.typography,
    color = defaultProps.color,
    tag,
    htmlFor,
    align = defaultProps.align,
    nativeMargin = defaultProps.nativeMargin,
    className,
}) => {
    const componentProps = {
        typography,
        color,
        align,
        className,
    };

    const ElementTag = tag ? tag : tagsLibrary[typography as TypographyKeys];
    const labelTag = tag === Tags.LABEL;
    const hasMarginStyle = nativeMargin ? {} : { style: { margin: 0 } };

    return (
        <StyleSheetManager shouldForwardProp={shouldForwardProp}>
            <StyledText
                as={ElementTag}
                htmlFor={labelTag && htmlFor ? htmlFor : undefined}
                {...componentProps}
                {...hasMarginStyle}
            >
                {children}
            </StyledText>
        </StyleSheetManager>
    );
};
