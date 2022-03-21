import styled, { StyledProps } from "styled-components";
import {
    ColorProps,
    color,
    space,
    SpaceProps,
    typography,
    TypographyProps,
    fontSize,
    FontSizeProps,
    flexbox,
    FlexboxProps,
    LayoutProps,
    layout,
} from "styled-system";

type TextProps = TypographyProps &
    SpaceProps &
    ColorProps &
    FontSizeProps &
    FlexboxProps &
    LayoutProps;

export const Text = styled.p<TextProps>`
    color: #fff;
    ${typography}
    ${space}
    ${color}
    ${fontSize}
    ${flexbox}
    ${layout}
`;
